import type { NextApiRequest, NextApiResponse } from "next";
import { logContactError } from "@/lib/contactLogger";
import nodemailer from "nodemailer";
type ContactBody = {
    firstName?: string;
    lastName?: string;
    email?: string;
    company?: string;
    role?: string;
    intent?: string;
    message?: string;
};

type ApiResponse = {
    status: "success" | "error";
    message: string;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res
            .status(405)
            .json({ status: "error", message: "Method not allowed" });
    }

    const body: ContactBody = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

    const firstname = (body.firstName || "").trim();
    const lastname = (body.lastName || "").trim();
    const email = (body.email || "").trim();
    const company = (body.company || "").trim();
    const role = (body.role || "").trim();
    const intent = (body.intent || "").trim();
    const message = (body.message || "").trim();

    if (!firstname || !lastname || !email || !intent) {
        return res.status(400).json({
            status: "error",
            message: "Please fill in your name, email organisation and intent.",
        });
    }

    if (!isEmail(email)) {
        return res
            .status(400)
            .json({ status: "error", message: "Please enter a valid email." });
    }

    const name = `${firstname} ${lastname}`;

    const formattedMessage = `<html>
        <head><meta charset="utf-8"><title>Contact Form Submission</title></head>
        <body>
            <h2>New Query from DocGenie Global Contact Form</h2>
            <p><strong>Contact Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Contact Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Company:</strong> ${escapeHtml(company) || "—"}</p>
            <p><strong>Role:</strong> ${escapeHtml(role) || "—"}</p>
            <p><strong>Intent:</strong> ${escapeHtml(intent) || "—"}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        </body>
    </html>`;

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // STARTTLS on 587 — matches SMTPSecure='tls' in your PHP
            auth: {
                type: "OAuth2",
                user: process.env.GMAIL_USER,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
            },
        });

        await transporter.sendMail({
            from: `"DocGenie Global" <${process.env.GMAIL_USER}>`,
            to: process.env.CONTACT_RECEIVER || process.env.GMAIL_USER,
            replyTo: email, // "Reply" in the inbox goes to the submitter
            subject: "New Query from DocGenie Global Contact Form",
            html: formattedMessage,
        });

        return res.status(200).json({
            status: "success",
            message: "We'll get back to you as soon as possible.",
        });
    } catch (err) {
        console.error("Contact form error:", err);

        await logContactError(
            { firstname, lastname, email, company, role, intent, message },
            err
        );

        return res.status(500).json({
            status: "error",
            message: "Failed to send email. Please try again later.",
        });
    }
}
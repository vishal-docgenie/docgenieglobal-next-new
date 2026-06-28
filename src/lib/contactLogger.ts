import { promises as fs } from "fs";
import path from "path";

const LOG_DIR = path.join(process.cwd(), "logs");
const LOG_FILE = path.join(LOG_DIR, "contact-errors.log");

type ContactLogEntry = {
    firstname?: string;
    lastname?: string;
    email?: string;
    company?: string;
    role?: string;
    intent?: string;
    message?: string;
};

function formatIST(date: Date): string {
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    }).formatToParts(date);

    const get = (t: string) =>
        parts.find((p) => p.type === t)?.value ?? "";

    return `${get("day")}-${get("month")}-${get("year")} ${get("hour")}:${get("minute")} ${get("dayPeriod")}`;
}

export async function logContactError(
    data: ContactLogEntry,
    error: unknown
): Promise<void> {
    try {
        await fs.mkdir(LOG_DIR, { recursive: true });

        const entry = {
            timestamp: formatIST(new Date()),
            error:
                error instanceof Error
                    ? { name: error.name, message: error.message }
                    : String(error),
            submission: {
                firstname: data.firstname || "",
                lastname: data.lastname || "",
                email: data.email || "",
                company: data.company || "",
                role: data.role || "",
                intent: data.intent || "",
                message: data.message || "",
            },
        };

        await fs.appendFile(LOG_FILE, JSON.stringify(entry) + "\n", "utf8");
    } catch (logErr) {
        // Never let a logging failure crash the request
        console.error("Failed to write contact log:", logErr);
    }
}
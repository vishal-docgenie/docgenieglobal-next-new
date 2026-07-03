'use client';

import { useEffect, useState } from 'react';
import { Mail, Link2, Check, Share2 } from 'lucide-react';
import { BlogPost } from '@/data/blogs/types';

interface HeaderShareProps {
    blog: BlogPost;
}

// Inline brand SVGs — lucide-react's brand icons are deprecated (removed in v1.0)
const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z" />
    </svg>
);

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
);

const HeaderShare = ({ blog }: HeaderShareProps) => {
    const [currentUrl, setCurrentUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [canNativeShare, setCanNativeShare] = useState(false);

    useEffect(() => {
        setCurrentUrl(window.location.href);
        setCanNativeShare(typeof navigator !== 'undefined' && !!navigator.share);
    }, []);

    const title = encodeURIComponent(blog.title);
    const url = encodeURIComponent(currentUrl);

    const socialLinks = [
        { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${url}`, icon: <FacebookIcon /> },
        { name: 'X', url: `https://twitter.com/intent/tweet?text=${title}&url=${url}`, icon: <XIcon /> },
        { name: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, icon: <LinkedinIcon /> },
    ];

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard API can fail on http / older browsers — ignore
        }
    };

    const handleNativeShare = async () => {
        try {
            await navigator.share({ title: blog.title, url: currentUrl });
        } catch {
            // user cancelled or share failed — ignore
        }
    };

    const iconClass =
        'relative group p-2 rounded-full bg-gray-100 hover:bg-brand-blue hover:text-white transition-colors duration-300';

    const tooltipClass =
        'pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100';

    return (
        <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconClass}
                    aria-label={`Share on ${link.name}`}
                >
                    {link.icon}
                    <span className={tooltipClass}>{link.name}</span>
                </a>
            ))}

            <a
                href={`mailto:?subject=${title}&body=${url}`}
                className={iconClass}
                aria-label="Share via Email"
            >
                <Mail className="h-5 w-5" />
                <span className={tooltipClass}>Email</span>
            </a>

            <button onClick={handleCopy} className={iconClass} aria-label="Copy link">
                {copied ? <Check className="h-5 w-5" /> : <Link2 className="h-5 w-5" />}
                <span className={tooltipClass}>{copied ? 'Copied!' : 'Copy link'}</span>
            </button>

            {canNativeShare && (
                <button onClick={handleNativeShare} className={iconClass} aria-label="Share">
                    <Share2 className="h-5 w-5" />
                    <span className={tooltipClass}>Share</span>
                </button>
            )}
        </div>
    );
};

export default HeaderShare;
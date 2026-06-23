declare global {
    interface Window {
        // Flexible signature covers both gtag('config', id, {...}) and
        // gtag('event', name, {...}) call styles.
        gtag?: (...args: unknown[]) => void;

        lintrk?: (
            command: string,
            data?: Record<string, unknown>
        ) => void;

        dataLayer?: unknown[];
    }
}

export { };
declare global {
    interface Window {
        // Google Analytics
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];

        // LinkedIn
        _linkedin_partner_id?: string;
        _linkedin_data_partner_ids?: string[];

        lintrk?: {
            (command: string, data?: Record<string, unknown>): void;
            q?: unknown[];
        };

        // Apollo
        trackingFunctions?: {
            onLoad: (config: {
                appId: string;
            }) => void;
        };

        // Clarity
        clarity?: (...args: unknown[]) => void;
    }
}

export {};
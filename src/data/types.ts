export interface BlogPost {
    id: string;
    title: string;
    slug?: string;
    content: string;
    date: string;
    readTime: string;
    image: string;
    imageAlt?: string;
    category: string;
    tags: string[];
    featured?: boolean;
    conclusion?: string;
    faqs?: { question: string; answer: string }[];
}


export interface BlogPost {
  id: string;
  title: string;
  slug?: string;  // Optional because it can be generated from title
  content: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt?: string;  // Added image alt text field
  category: string;
  tags: string[];
  featured?: boolean;
  conclusion?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
  schemafaqs?: {
    "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
  }[];
}

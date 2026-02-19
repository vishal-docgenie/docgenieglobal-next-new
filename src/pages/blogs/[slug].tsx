import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import BlogPostView from '@/legacy_pages/BlogPost/BlogPostView';
import { blogData } from '@/legacy_pages/Blogs/data/blogData';
import { generateSlug } from '@/legacy_pages/BlogPost/hooks/useBlogData';
import type { BlogPost } from '@/data/types';
import Layout from '@/components/Layout';
import { generateSections } from '@/legacy_pages/BlogPost/utils/sectionUtils';

function findBlogBySlug(slug: string): BlogPost | null {
  return blogData.find(
    (b) => (b.slug ?? generateSlug(b.title)) === slug
  ) ?? null;
}

// Build sections using curated generator for consistent numbering, titles, and IDs
function buildSectionsFor(post: BlogPost) {
  return generateSections(post.content, post.id);
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blogData.map((b) => ({
      params: { slug: b.slug ?? generateSlug(b.title) },
    })),
    fallback: false, // unknown slugs return 404
  };
};

export const getStaticProps: GetStaticProps<{
  post: BlogPost;
  sections: any[];
}> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = findBlogBySlug(slug);
  if (!post) {
    return { notFound: true };
  }
  return {
    props: {
      post,
      sections: buildSectionsFor(post),
    },
  };
};

export default function BlogPage({
  post,
  sections,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <BlogPostView
        blog={post}
        sections={sections}
        allBlogs={blogData}
      />
    </Layout>
  );
}

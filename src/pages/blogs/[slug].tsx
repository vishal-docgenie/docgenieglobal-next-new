import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import BlogPostView from '@/components/blog-post/BlogPostView';
import { blogData } from '@/data/blogs/blogData';
import { generateSlug } from '@/lib/blog-slug';
import type { BlogPost } from '@/data/blogs/types';
import Layout from '@/components/Layout';
import { generateSections } from '@/lib/sectionUtils';

function findBlogBySlug(slug: string): BlogPost | null {
  return blogData.find(
    (b) => (b.slug ?? generateSlug(b.title)) === slug
  ) ?? null;
}

// Build sections from the post's content.
function buildSectionsFor(post: BlogPost) {
  return generateSections(post.content);
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
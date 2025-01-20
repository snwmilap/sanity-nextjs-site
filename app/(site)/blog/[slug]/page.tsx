import SingleBlogPost from "@/components/blog/SingleBlogPost";
import { getBlogBySlug } from "@/lib/utils";

interface BlogProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <main>
      <SingleBlogPost
        title={blog.title}
        mainImage={blog.mainImage}
        content={blog.content}
        author={blog.author}
        publishedAt={blog.publishedAt}
        categories={blog.categories}
      />
    </main>
  );
}

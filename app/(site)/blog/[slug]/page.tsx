import SingleBlogPost from "@/components/blog/SingleBlogPost";
import { getBlogBySlug } from "@/lib/utils";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const blog = await getBlogBySlug(slug);

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

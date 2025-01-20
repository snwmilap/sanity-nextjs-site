import BlogList from "@/components/blog/BlogList";
import { getBlogPosts } from "@/lib/utils";

export default async function BlogPage() {
  const blogs = await getBlogPosts();

  return (
    <>
      <BlogList blogs={blogs} showLoadMore={true} />
    </>
  );
}

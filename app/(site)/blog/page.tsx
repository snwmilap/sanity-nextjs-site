import BlogList from "@/components/blog/BlogList";
import Section from "@/components/ui/Section";
import { getBlogPosts } from "@/lib/utils";

export default async function BlogPage() {
  const blogs = await getBlogPosts();

  return (
    <main className="grow">
      <Section className="py-10">
        <header className="">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {` Welcome to our blog! Here you'll find the latest updates, articles,
            and insights from our team.`}
          </p>
        </header>
      </Section>
      <BlogList blogs={blogs} showLoadMore={true} initialVisibleBlogs={6} />
    </main>
  );
}

import BlogList from "@/components/blog/BlogList";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/ui/Section";
import { getBlogPosts } from "@/lib/utils";

export default async function Home() {
  const blogs = await getBlogPosts();

  return (
    <div className="">
      <HeroSection />
      {/* Featured Posts */}
      <Section className="py-10 bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Featured Posts
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Check out our latest blog posts and articles
          </p>
        </div>
      </Section>
      <BlogList blogs={blogs} />
    </div>
  );
}

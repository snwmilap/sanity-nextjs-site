"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { BlogListProps } from "@/types/blog";
import Section from "../ui/Section";
import Link from "next/link";

const BlogList: React.FC<BlogListProps> = ({ blogs, showLoadMore = false }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(3); // Start with 3 blogs visible

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 3); // Load 3 more blogs when clicked
  };

  const displayedBlogs = blogs.slice(0, visibleBlogs); // Show only the visible blogs

  return (
    <Section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBlogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            description={blog.excerpt}
            date={new Date(blog.publishedAt).toDateString()}
            image={blog.mainImage}
            readMoreLink={`/blog/${blog.slug}`}
          />
        ))}
      </div>

      {/* Display different buttons based on the context */}
      <div className="mt-12 text-center">
        {showLoadMore ? (
          visibleBlogs < blogs.length && (
            <button
              onClick={handleLoadMore}
              className="text-blue-500 hover:underline "
            >
              Load More
            </button>
          )
        ) : (
          <Link href="/blog" className="text-blue-500 hover:underline ">
            View All Posts
          </Link>
        )}
      </div>
    </Section>
  );
};

export default BlogList;

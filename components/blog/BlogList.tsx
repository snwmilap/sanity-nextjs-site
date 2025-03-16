"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { BlogListProps } from "@/types/blog";
import Section from "../ui/Section";
import Link from "next/link";
import Button from "../ui/Button";

const BlogList: React.FC<BlogListProps> = ({
  blogs,
  showLoadMore = false,
  initialVisibleBlogs = 3,
}) => {
  const [visibleBlogs, setVisibleBlogs] = useState(initialVisibleBlogs);

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 3);
  };

  const displayedBlogs = blogs.slice(0, visibleBlogs);

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
        {showLoadMore && visibleBlogs < blogs.length ? (
          <Button onClick={handleLoadMore}>Load More</Button>
        ) : (
          !showLoadMore && (
            <Link href="/blog">
              <Button>View All Posts</Button>
            </Link>
          )
        )}
      </div>
    </Section>
  );
};

export default BlogList;

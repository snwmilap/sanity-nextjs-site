import React from "react";
import Cards from "../ui/cards";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  readMoreLink: string;
  tags?: string[];
  author?: {
    name: string;
    role: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  image,
  readMoreLink,
  tags,
  author,
}) => {
  return (
    <Cards
      blok={{
        title,
        description,
        date,
        image,
        readMoreLink,
        tags,
        author,
      }}
      variant="left" // Change alignment as needed
      shadow="md" // Use "sm", "md", or "lg"
      radius="md" // Use "sm", "md", or "lg"
    />
  );
};

export default BlogCard;

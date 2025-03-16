"use client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SingleBlogPostProps {
  title: string;
  mainImage: string;
  content: undefined; // Portable Text content
  author: string;
  publishedAt: string;
  categories: string[];
}

const SingleBlogPost: React.FC<SingleBlogPostProps> = ({
  title,
  mainImage,
  content,
  author,
  publishedAt,
  categories,
}) => {
  const router = useRouter();

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 "
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 text-sm mb-6">
        {author && <p>By {author}</p>}
        {author && <p>|</p>}
        <p>{new Date(publishedAt).toDateString()}</p>
      </div>
      <div className="flex gap-2 mb-4">
        {categories?.map((category) => (
          <span
            key={category}
            className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded"
          >
            {category}
          </span>
        ))}
      </div>
      <Image
        src={mainImage}
        alt={title}
        className="w-full h-auto object-cover rounded-lg mb-6"
        height={600}
        width={1200}
      />
      <div className="prose max-w-none dark:prose-invert">
        {content ? (
          <PortableText value={content} />
        ) : (
          <p>No content available.</p>
        )}
      </div>
    </article>
  );
};

export default SingleBlogPost;

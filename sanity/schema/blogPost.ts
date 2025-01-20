import { Rule } from "@sanity/types";

const blogPost = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().max(100), // Title is required and has a max length
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // Generate slug from title
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }], // Reference to "author" schema
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }], // Reference to "category" schema
        },
      ],
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "A brief summary of the blog post.",
      validation: (Rule: Rule) => Rule.max(200),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }, // Rich text editor
        { type: "image" }, // Inline images
        { type: 'codeBlock' }, // Use the custom code block
        {
          type: "object",
          name: "videoEmbed",
          title: "Video Embed",
          fields: [
            {
              name: "url",
              title: "Video URL",
              type: "url",
              validation: (Rule: Rule) =>
                Rule.required().uri({
                  scheme: ["http", "https"],
                }),
            },
          ],
        },
        {
          type: "object",
          name: "embed",
          title: "Embed",
          fields: [
            {
              name: "html",
              title: "Embed HTML",
              type: "text",
              description: "Raw HTML or embed code (e.g., for iframes).",
            },
          ],
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          validation: (Rule: Rule) => Rule.max(160),
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
};

export default blogPost;

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage: string;
  publishedAt: string;
  author: string;
  categories: string[];
}

export interface BlogListProps {
  blogs: Blog[];
  showLoadMore?: boolean;
  initialVisibleBlogs?: number;
}

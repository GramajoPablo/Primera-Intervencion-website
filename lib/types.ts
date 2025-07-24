export interface WordPressPost {
  id: string;
  date: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

export interface WordPressPostEdge {
  node: WordPressPost;
}

export interface WordPressPosts {
  edges: WordPressPostEdge[];
}

export interface WordPressCategory {
  id: string;
  name: string;
  slug: string;
} 
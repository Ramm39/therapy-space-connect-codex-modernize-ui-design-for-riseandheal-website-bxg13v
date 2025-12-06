import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import blog1Image from "@/assets/blog1.jpg";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

interface BlogContextValue {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
}

const STORAGE_KEY = "blogPosts";

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: "default-1",
    title: "How to Manage Stress Mindfully",
    content:
      "Learn practical techniques to stay grounded and reduce daily stress through simple, mindful habits that you can weave into your routine without feeling overwhelmed.",
    date: "2024-01-05",
    image: blog1Image
  },
  {
    id: "default-2",
    title: "Navigating Change with Compassion",
    content:
      "Explore how self-compassion can make life transitions smoother and more empowering, especially during seasons of uncertainty and growth.",
    date: "2023-12-12"
  },
  {
    id: "default-3",
    title: "Finding Balance in Modern Life",
    content:
      "Discover small mindful rituals to bring more peace, clarity, and calm to your day while honouring the pace that works best for you.",
    date: "2023-11-20"
  }
];

const BlogContext = createContext<BlogContextValue | undefined>(undefined);

const readStoredPosts = () => {
  if (typeof window === "undefined") {
    return DEFAULT_POSTS;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return DEFAULT_POSTS;
    }

    const parsed = JSON.parse(raw) as BlogPost[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return DEFAULT_POSTS;
    }

    return parsed.map((post, index) => ({
      id: post.id ?? `stored-${index}`,
      title: post.title,
      content: post.content,
      date: post.date ?? new Date().toISOString().split("T")[0],
      image: post.image
    }));
  } catch (error) {
    console.warn("Unable to parse stored blog posts", error);
    return DEFAULT_POSTS;
  }
};

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>(() => readStoredPosts());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const value = useMemo<BlogContextValue>(
    () => ({
      posts,
      addPost: (post: BlogPost) => {
        setPosts((prev) => [post, ...prev]);
      },
      deletePost: (id: string) => {
        setPosts((prev) => prev.filter((post) => post.id !== id));
      }
    }),
    [posts]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};

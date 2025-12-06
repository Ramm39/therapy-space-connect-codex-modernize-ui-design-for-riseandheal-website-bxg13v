import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useBlog } from "@/context/BlogContext";
import type { BlogPost } from "@/context/BlogContext";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const MAX_PREVIEW_LENGTH = 300;

interface BlogPostCardProps {
  post: BlogPost;
  displayDate: string;
}

const BlogPostCard = ({ post, displayDate }: BlogPostCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = post.content.length > MAX_PREVIEW_LENGTH;
  const previewText =
    expanded || !isLong
      ? post.content
      : `${post.content.slice(0, MAX_PREVIEW_LENGTH)}…`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-primary/15 bg-white/95 shadow-soft"
    >
      {post.image ? (
        <div className="relative h-48 w-full overflow-hidden">
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
        </div>
      ) : null}
      <div className="flex h-full flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-primary/70">{displayDate}</p>
        <h3 className="mt-3 text-2xl font-semibold text-foreground">{post.title}</h3>
        <p className="mt-4 flex-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{previewText}</p>
        {isLong ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 self-start text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary/80"
          >
            {expanded ? "Read Less ▲" : "Read More ▼"}
          </button>
        ) : null}
      </div>
    </motion.article>
  );
};

const BlogPage = () => {
  const { posts } = useBlog();

  const sortedPosts = useMemo(() => {
    const toTime = (value: string) => {
      const time = new Date(value).getTime();
      return Number.isNaN(time) ? 0 : time;
    };
    return [...posts].sort((a, b) => toTime(b.date) - toTime(a.date));
  }, [posts]);

  usePageMetadata({
    title: "Blog | Rise and Heal Psychotherapy",
    description: "Explore articles and insights from Rise and Heal Psychotherapy to support your healing journey.",
    slug: "/blog"
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fcf9] to-[#e6f6f1]">
      <Navigation />
      <main className="flex-1 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Blog</h1>
            <p className="mt-4 text-base text-muted-foreground">
              Discover reflections, tools, and gentle reminders to help you feel supported in your growth.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {sortedPosts.length === 0 ? (
              <p className="rounded-3xl border border-primary/10 bg-white/90 p-8 text-center text-muted-foreground shadow-soft">
                There are no blog posts yet. Check back soon for new insights.
              </p>
            ) : (
              sortedPosts.map((post) => {
                const dateValue = new Date(post.date);
                const displayDate = Number.isNaN(dateValue.getTime())
                  ? "Undated"
                  : dateValue.toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    });
                return <BlogPostCard key={post.id} post={post} displayDate={displayDate} />;
              })
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;

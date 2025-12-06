import { FormEvent, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useBlog, type BlogPost } from "@/context/BlogContext";

const ADMIN_EMAIL = "admin@riseandheal.ca";
const ADMIN_PASSWORD = "Rise@123";
const LOGIN_STORAGE_KEY = "isAdminLoggedIn";

const createPostId = () => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `post-${Date.now()}`;
};

const AdminDashboard = () => {
  const { posts, addPost, deletePost } = useBlog();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(LOGIN_STORAGE_KEY) === "true";
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  usePageMetadata({
    title: "Admin Dashboard | Rise and Heal Psychotherapy",
    description: "Manage blog content for Rise and Heal Psychotherapy."
  });

  const sortedPosts = useMemo(() => {
    const toTime = (value: string) => {
      const time = new Date(value).getTime();
      return Number.isNaN(time) ? 0 : time;
    };
    return [...posts].sort((a, b) => toTime(b.date) - toTime(a.date));
  }, [posts]);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(LOGIN_STORAGE_KEY, "true");
      }
      setIsLoggedIn(true);
      setLoginError(null);
      setEmail("");
      setPassword("");
      return;
    }

    setLoginError("Invalid email or password. Please try again.");
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(LOGIN_STORAGE_KEY);
    }
    setIsLoggedIn(false);
  };

  const handleAddPost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) {
      setFormError("Title and content are required to publish a blog post.");
      return;
    }

    const newPost: BlogPost = {
      id: createPostId(),
      title: title.trim(),
      content: content.trim(),
      date: (date || new Date().toISOString().split("T")[0]).trim(),
      image: image.trim() || undefined
    };

    addPost(newPost);
    setTitle("");
    setContent("");
    setDate("");
    setImage("");
    setFormError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4faf7] to-[#e6f7f1]">
      <Navigation />
      <main className="flex-1 py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          {!isLoggedIn ? (
            <div className="mx-auto max-w-md rounded-3xl bg-white/95 p-8 shadow-soft">
              <h1 className="text-center text-3xl font-semibold text-foreground">Admin Login</h1>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Enter your credentials to manage blog content.
              </p>
              <form className="mt-8 space-y-4" onSubmit={handleLogin}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="admin-email" className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="admin-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (loginError) {
                        setLoginError(null);
                      }
                    }}
                    className="rounded-xl border border-muted bg-white px-4 py-2 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="admin@riseandheal.ca"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="admin-password" className="text-sm font-medium text-muted-foreground">
                    Password
                  </label>
                  <input
                    id="admin-password"
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      if (loginError) {
                        setLoginError(null);
                      }
                    }}
                    className="rounded-xl border border-muted bg-white px-4 py-2 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Enter password"
                    required
                  />
                </div>
                {loginError ? <p className="text-sm text-red-500">{loginError}</p> : null}
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-primary to-teal-500 px-4 py-2 text-center text-base font-semibold text-white shadow-soft transition hover:shadow-lg"
                >
                  Log In
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-12">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-semibold text-foreground">Admin Blog Dashboard</h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Create new posts and manage existing blog updates.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-full border border-primary/40 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
                >
                  Log Out
                </button>
              </div>

              <form className="space-y-4 rounded-3xl bg-white/95 p-6 shadow-soft" onSubmit={handleAddPost}>
                <h2 className="text-xl font-semibold text-foreground">Add a New Blog Post</h2>
                <div className="flex flex-col gap-2">
                  <label htmlFor="blog-title" className="text-sm font-medium text-muted-foreground">
                    Title
                  </label>
                  <input
                    id="blog-title"
                    type="text"
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                      if (formError) {
                        setFormError(null);
                      }
                    }}
                    className="rounded-xl border border-muted bg-white px-4 py-2 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Blog Title"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="blog-date" className="text-sm font-medium text-muted-foreground">
                    Publish Date
                  </label>
                  <input
                    id="blog-date"
                    type="date"
                    value={date}
                    onChange={(event) => {
                      setDate(event.target.value);
                      if (formError) {
                        setFormError(null);
                      }
                    }}
                    className="rounded-xl border border-muted bg-white px-4 py-2 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="blog-image" className="text-sm font-medium text-muted-foreground">
                    Image URL (optional)
                  </label>
                  <input
                    id="blog-image"
                    type="url"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    className="rounded-xl border border-muted bg-white px-4 py-2 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="blog-content" className="text-sm font-medium text-muted-foreground">
                    Content
                  </label>
                  <textarea
                    id="blog-content"
                    value={content}
                    onChange={(event) => {
                      setContent(event.target.value);
                      if (formError) {
                        setFormError(null);
                      }
                    }}
                    rows={6}
                    className="rounded-xl border border-muted bg-white px-4 py-2 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Share the full blog post content here..."
                    required
                  />
                </div>
                {formError ? <p className="text-sm text-red-500">{formError}</p> : null}
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-primary to-teal-500 px-4 py-2 text-base font-semibold text-white shadow-soft transition hover:shadow-lg"
                >
                  Publish Blog
                </button>
              </form>

              <section>
                <h2 className="text-2xl font-semibold text-foreground">Existing Blogs</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Manage the articles currently visible on the blog page.
                </p>
                <ul className="mt-6 space-y-3">
                  {sortedPosts.length === 0 ? (
                    <li className="rounded-2xl bg-white/80 p-4 text-sm text-muted-foreground shadow-soft">
                      No blog posts yet. Add your first story above.
                    </li>
                  ) : (
                    sortedPosts.map((post) => {
                      const dateValue = new Date(post.date);
                      const formattedDate = Number.isNaN(dateValue.getTime())
                        ? "Undated"
                        : dateValue.toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          });
                      return (
                        <li
                          key={post.id}
                          className="flex flex-col gap-3 rounded-2xl bg-white/95 p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <p className="text-base font-semibold text-foreground">{post.title}</p>
                            <p className="text-sm text-muted-foreground">{formattedDate}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => deletePost(post.id)}
                            className="self-start rounded-full border border-red-200 px-4 py-1 text-sm font-semibold text-red-500 transition hover:bg-red-50 sm:self-auto"
                          >
                            Delete
                          </button>
                        </li>
                      );
                    })
                  )}
                </ul>
              </section>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;

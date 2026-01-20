export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      date: "January 19, 2026",
      excerpt: "Learn how to build modern web applications with Next.js",
    },
    {
      id: 2,
      title: "Web Development Best Practices",
      date: "January 15, 2026",
      excerpt: "Essential tips and tricks for building better web applications",
    },
    {
      id: 3,
      title: "Responsive Design Techniques",
      date: "January 10, 2026",
      excerpt: "Master responsive design for mobile and desktop devices",
    },
  ];

  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-zinc-50">
        Blog
      </h1>
      <div className="w-full space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border-b border-zinc-200 dark:border-zinc-700 pb-6 last:border-b-0"
          >
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
              {post.date}
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">{post.excerpt}</p>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}

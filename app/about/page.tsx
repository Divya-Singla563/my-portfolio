export default function About() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-32 px-6 sm:px-10 lg:px-20 bg-white dark:bg-black sm:items-start">
      <h1 className="text-4xl font-bold mb-6 text-black dark:text-zinc-50">
        About Me
      </h1>
      <div className="text-lg text-zinc-700 dark:text-zinc-300 space-y-4">
        <p>
          Welcome to my portfolio! I&apos;m a passionate Full Stack Developer specializing in React Native, React.js, Next.js, MongoDB, Express, and Node.js.
        </p>
        <p>
          Here you can learn more about my experience, skills, and what I love
          to do.
        </p>
        <p>
          Feel free to explore my projects and get in touch if you&apos;d like to
          collaborate!
        </p>
      </div>
    </main>
  );
}

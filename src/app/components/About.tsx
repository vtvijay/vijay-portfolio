export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-6 py-24 text-white"
    >
      <h2 className="text-3xl font-bold md:text-4xl">
        About Me
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-300">
        I’m Vijay, a Master’s student in Applied Computer Science
        who is passionate about full-stack development and building
        real-world projects.

        I enjoy learning how systems work internally. My goal is to become a strong
        developer by understanding frontend, backend, databases,
        and software architecture deeply.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-800 p-6">
          <h3 className="text-xl font-semibold">
            Frontend
          </h3>

          <p className="mt-3 text-gray-400">
            React, Next.js, Tailwind CSS, responsive UI design.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 p-6">
          <h3 className="text-xl font-semibold">
            Backend
          </h3>

          <p className="mt-3 text-gray-400">
            Node.js, databases.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 p-6">
          <h3 className="text-xl font-semibold">
            Learning Mindset
          </h3>

          <p className="mt-3 text-gray-400">
            Focused on deep understanding, clean architecture,
            and building projects step by step.
          </p>
        </div>
      </div>
    </section>
  );
}
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-white">
      <h2 className="text-3xl font-bold md:text-4xl">Skills</h2>

      <p className="mt-4 max-w-2xl text-gray-400">
        Technologies I am learning and using to build real-world web projects.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-800 px-5 py-2 text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
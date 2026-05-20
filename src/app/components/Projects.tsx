const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS to showcase my skills, projects, and learning journey.",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Traffic Analytics Dashboard",
    description:
      "A dashboard project for visualizing traffic data, vehicle counts, density, and real-time events.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Restaurant Reservation System",
    description:
      "A full-stack restaurant booking system with menu, reservations, and admin management features.",
    tech: ["Next.js", "Node.js", "Database"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 py-24 text-white"
    >
      <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>

      <p className="mt-4 max-w-2xl text-gray-400">
        Projects I am building to improve my frontend, backend, and full-stack development skills.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-gray-800 p-6"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-900 px-3 py-1 text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
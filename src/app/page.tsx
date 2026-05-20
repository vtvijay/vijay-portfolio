import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Portfolio Website
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">Hi, I&apos;m Vijay</h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            I&apos;m a Master&apos;s student in Applied Computer Science and a
            full-stack developer in progress, learning React, Next.js, Node.js,
            and databases by building real-world projects.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Contact Me
            </a>
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
      <Contact/>
      </main>
      

    </>
  );
}

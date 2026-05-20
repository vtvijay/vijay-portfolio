export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-white">
      <h2 className="text-3xl font-bold md:text-4xl">Contact</h2>

      <p className="mt-4 max-w-2xl text-gray-400">
        I’m always open to learning opportunities, internships, collaborations,
        and interesting projects.
      </p>

      <div className="mt-10 space-y-4">
        <div className="rounded-2xl border border-gray-800 p-6">
          <h3 className="text-lg font-semibold">Email</h3>

          <p className="mt-2 text-gray-400">
            vijjuvt7@gmail.com vvijjuvt@gmail.com
          </p>
          <h3 className="text-lg font-semibold">Mobile Number</h3>
          <p className="mt-2 text-gray-400">+4917623948718 +919538580854</p>
        </div>

        <div className="rounded-2xl border border-gray-800 p-6">
          <h3 className="text-lg font-semibold">GitHub</h3>

          <a
            href="https://github.com/vtvijay"
            target="_blank"
            className="mt-2 inline-block text-gray-400 hover:text-white"
          >
            github.com/vtvijay
          </a>
        </div>

        <div className="rounded-2xl border border-gray-800 p-6">
          <h3 className="text-lg font-semibold">Location</h3>

          <p className="mt-2 text-gray-400">Germany</p>
        </div>
      </div>
    </section>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <h1 className="text-xl font-bold text-white">
          Vijay Portfolio
        </h1>

        <ul className="flex gap-6 text-sm text-gray-300">
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
import navLinks from "./navLinks";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030712]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          <span className="text-blue-500">N</span>abeel
        </h1>

        <nav>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-gray-300 hover:text-blue-500 transition duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
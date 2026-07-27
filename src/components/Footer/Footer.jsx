import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Nabeel Abdul Aziz Khan. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 transition hover:text-violet-600"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 transition hover:text-violet-600"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 transition hover:text-violet-600"
          >
            <FaFacebook size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};
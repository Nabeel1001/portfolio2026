import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";

export const ProjectCard = ({
  title,
  category,
  description,
  technologies = [],
  github,
  demo,
  image,
  featured = false,
}) => {
  return (
    <div
      className={`group overflow-hidden rounded-[28px] border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Hero */}
      <div className="relative h-60 overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500">

        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/15"></div>

        {/* Decorative blobs */}
        <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl"></div>

        {/* Category */}
        <div className="absolute left-6 top-6">
          <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-violet-700 backdrop-blur">
            {category}
          </span>
        </div>

        {/* Floating arrow */}
        <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition duration-300 group-hover:rotate-45">
          <FiArrowUpRight size={20} />
        </div>
      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold text-zinc-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-600">
          {description}
        </p>

        {/* Tech */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-violet-100 hover:text-violet-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">

          <div className="flex gap-3">

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition hover:bg-violet-600 hover:text-white"
            >
              <FiGithub size={18} />
            </a>

            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition hover:bg-cyan-500 hover:text-white"
            >
              <FiExternalLink size={18} />
            </a>

          </div>

          <button className="flex items-center gap-2 font-semibold text-violet-600 transition group-hover:gap-3">
            View Project
            <FiArrowUpRight />
          </button>

        </div>
      </div>
    </div>
  );
};
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export const ProjectShowcase = ({
  number,
  title,
  subtitle,
  description,
  technologies = [],
  image,
  github,
  demo,
  reverse = false,
}) => {
  return (
    <section
      className={`grid items-center gap-16 py-24 ${
        reverse ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
      }`}
    >
      {/* LEFT */}
      <div
        className={`space-y-8 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <p className="text-7xl font-black text-violet-100">{number}</p>

        <div>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
            {title}
          </h2>

          <p className="mt-2 text-lg font-medium text-violet-600">
            {subtitle}
          </p>
        </div>

        <p className="max-w-xl leading-8 text-zinc-600">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-violet-100 hover:text-violet-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-8 pt-4">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-semibold text-zinc-900"
          >
            <FiGithub />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-semibold text-violet-600"
          >
            Live Demo

            <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>
      </div>

      {/* RIGHT */}

      <div
        className={`${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-gradient-to-br from-violet-100 via-white to-cyan-100 shadow-xl">

          {/* Decorative Glow */}

          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

          {image ? (
            <img
              src={image}
              alt={title}
              className="relative z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="relative z-10 flex h-[420px] items-center justify-center">
              <h1 className="text-5xl font-black text-violet-200">
                Preview
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
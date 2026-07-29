import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { fadeLeft, fadeRight } from "../../animations/varients";
import { motion } from "framer-motion";

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
      className={`w-full grid grid-cols-1 items-center gap-10 py-8 ${reverse ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"
        }`}
    >
      <motion.div
        variants={reverse ? fadeRight : fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`space-y-2 flex-1 ${reverse ? "lg:order-2" : "lg:order-1"
            }`} 
      >


        {/* LEFT */}
        <div
          className={`space-y-2 ${reverse ? "lg:order-2" : "lg:order-1"
            }`}
        >
          <p className="text-7xl font-black text-(--primary-soft)">{number}</p>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
              {title}
            </h2>

            <p className="mt-2 text-lg font-medium theme-primary">
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
                className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:theme-primary-soft-bg hover:theme-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-white hover:text-zinc-900 hover:shadow-md"
            >
              <FiGithub className="text-base transition-transform duration-300 group-hover:rotate-6" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={reverse ? fadeLeft : fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={` flex-1 ${reverse ? "lg:order-1" : "lg:order-2"
            }`}
      >
        {/* RIGHT */}

        <div
          className={`${reverse ? "lg:order-1" : "lg:order-2"
            }`}
        >
          <div className="group relative overflow-hidden rounded-[32px] border theme-border theme-surface-gradient shadow-xl min-h-[320px] md:min-h-[420px]">

            {/* Decorative Glow */}

            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full theme-primary-soft-bg blur-3xl"></div>

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full theme-secondary-soft-bg blur-3xl"></div>

            {image ? (
              <div className="relative h-[320px] w-full overflow-hidden rounded-[32px] md:h-[420px]">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="relative z-10 flex h-[320px] w-full items-center justify-center rounded-[32px] md:h-[420px]">
                <h1 className="text-5xl font-black text-(--primary-soft)">
                  Preview
                </h1>
              </div>
            )}
          </div>
        </div>
      </motion.div>

    </section>
  );
};
import { HiOutlineEnvelope } from "react-icons/hi2";
import { SectionHeading } from "../SectionHeading";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-6 py-12 md:py-12"
    >
      <div className="flex justify-center">
        <SectionHeading title="Contact" />
      </div>

      <div className="mt-8 md:mt-10 rounded-[36px] border theme-border theme-surface-gradient px-10 py-20 text-center shadow-sm">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] theme-primary">
          Let's Work Together
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
          Have an idea?
          <br />
          I'd love to hear about it.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          Whether you're looking for an AI Engineer, Full Stack Developer,
          or just want to connect, feel free to reach out.
          I'm always open to discussing exciting opportunities.
        </p>

        <a
          href="mailto:nabeelk60100@gmail.com?subject=Let's%20Work%20Together"
          className="group mt-12 inline-flex items-center gap-3 rounded-full theme-primary-bg px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 theme-primary-bg-hover hover:shadow-xl"
        >
          <HiOutlineEnvelope className="text-xl transition-transform duration-300 group-hover:rotate-6" />
          Say Hello
        </a>

      </div>
    </section>
  );
};
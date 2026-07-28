import { FiBookOpen, FiCalendar, FiAward } from "react-icons/fi";

export const EducationCard = ({
  degree,
  college,
  duration,
  grade,
  coursework = [],
}) => {
  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[32px] border theme-border theme-surface-gradient p-10 shadow-lg">

      {/* Decorative */}
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full theme-primary-soft-bg blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full theme-secondary-soft-bg blur-3xl"></div>

      <div className="relative">

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full theme-accent-gradient text-white shadow-xl">
          <FiBookOpen size={34} />
        </div>

        {/* Degree */}
        <h2 className="mt-8 text-center text-3xl font-bold text-zinc-900">
          {degree}
        </h2>

        <p className="mt-2 text-center text-lg font-medium theme-primary">
          {college}
        </p>

        {/* Meta */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-sm text-gray-800">
            <FiCalendar className="theme-primary" />
            <span>{duration}</span>
          </div>

          {/* <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-sm text-gray-800">
            <FiAward className="text-violet-600" />
            <span>{grade}</span>
          </div> */}

        </div>

        

      </div>
    </div>
  );
};
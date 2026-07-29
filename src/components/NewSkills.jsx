import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaServer,
  FaLaptopCode,
  FaCloud,
  FaDatabase,
  FaTools,
  FaChevronLeft,
  FaChevronRight,
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
  FaMicrosoft,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaChartLine,
  FaRocket,
  FaProjectDiagram,
  FaLayerGroup,
  FaSearch,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiDotnet,
  SiSqlite,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiOpenaigym,
  SiLangchain,
  SiSwagger,
  SiPostman,
  SiFigma,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { SectionHeading } from "./SectionHeading";
// import { SectionHeading } from "../SectionHeading";

const skillCategories = [
  {
    title: "AI",
    Icon: FaBrain,
    skills: [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Whisper",
      "Pinecone",
      "LiveKit",
      "ElevenLabs",
    ],
  },
  {
    title: "Backend",
    Icon: FaServer,
    skills: [
      ".NET",
      "ASP.NET Core",
      "C#",
      "Web API",
      "Entity Framework",
      "SQL Server",
      // "Azure DevOps",
      "Docker",
    ],
  },
  {
    title: "Frontend",
    Icon: FaLaptopCode,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Next.js",
      "Vite",
    ],
  },
  {
    title: "Cloud",
    Icon: FaCloud,
    skills: [
      "AWS",
      "Azure",
      "Docker",
      // "Kubernetes",
      "CI/CD",
      // "Serverless",
      // "Terraform",
      // "Monitoring",
    ],
  },
  {
    title: "Database",
    Icon: FaDatabase,
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Supabase",
      // "Redis",
      "Entity Framework",
      "Database Design",
      "Stored Procedures",
      "Data Modeling",
    ],
  },
  {
    title: "Tools",
    Icon: FaTools,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "VS Code",
      // // "Azure DevOps",
      "Swagger",
      "PowerShell",
    ],
  },
];

const skillIcons = {
  Python: { icon: FaPython, color: "#3776AB" },
  LangChain: { icon: SiLangchain, color: "#2E8555" },
  LangGraph: { icon: FaProjectDiagram, color: "#8A2BE2" },
  OpenAI: { icon: SiOpenaigym, color: "#10A37F" },
  Whisper: { icon: FaSearch, color: "#6366F1" },
  Pinecone: { icon: FaProjectDiagram, color: "#2563EB" },
  LiveKit: { icon: FaRocket, color: "#F59E0B" },
  ElevenLabs: { icon: FaTerminal, color: "#EC4899" },
  ".NET": { icon: SiDotnet, color: "#512BD4" },
  "ASP.NET Core": { icon: FaServer, color: "#0078D4" },
  "C#": { icon: FaCode, color: "#239120" },
  "Web API": { icon: FaCode, color: "#2563EB" },
  "Entity Framework": { icon: FaLayerGroup, color: "#7C3AED" },
  "SQL Server": { icon: FaDatabase, color: "#0078D4" },
  "Azure DevOps": { icon: FaMicrosoft, color: "#0078D4" },
  Docker: { icon: SiDocker, color: "#0DB7ED" },
  React: { icon: FaReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  JavaScript: { icon: FaJs, color: "#F7DF1E" },
  HTML: { icon: FaHtml5, color: "#E34F26" },
  CSS: { icon: FaCss3Alt, color: "#1572B6" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  Vite: { icon: SiVite, color: "#646CFF" },
  AWS: { icon: FaAws, color: "#FF9900" },
  Azure: { icon: FaMicrosoft, color: "#0078D4" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  "CI/CD": { icon: FaRocket, color: "#10B981" },
  Serverless: { icon: FaCloud, color: "#8B5CF6" },
  Terraform: { icon: SiTerraform, color: "#7B42BC" },
  Monitoring: { icon: FaChartLine, color: "#14B8A6" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  "Database Design": { icon: FaDatabase, color: "#4F46E5" },
  "Stored Procedures": { icon: FaCode, color: "#0F766E" },
  "Data Modeling": { icon: FaProjectDiagram, color: "#F97316" },
  Git: { icon: FaGitAlt, color: "#F1502F" },
  GitHub: { icon: SiGithub, color: "#181717" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  "VS Code": { icon: FaCode, color: "#007ACC" },
  Swagger: { icon: SiSwagger, color: "#85EA2D" },
  PowerShell: { icon: FaTerminal, color: "#012456" },
};

const getSkillIcon = (skill) => skillIcons[skill] || { icon: FaCode, color: "#2563EB" };

const springConfig = {
  type: "spring",
  stiffness: 280,
  damping: 30,
};

const cardMotionSettings = {
  prev: {
    x: -150,
    y: 16,
    scale: 0.92,
    opacity: 0.45,
    rotate: -8,
    zIndex: 10,
  },
  current: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    zIndex: 20,
  },
  next: {
    x: 150,
    y: 16,
    scale: 0.92,
    opacity: 0.45,
    rotate: 8,
    zIndex: 10,
  },
};

const isSwipedLeft = (offset, velocity) => offset < -80 || velocity < -500;
const isSwipedRight = (offset, velocity) => offset > 80 || velocity > 500;

export const NewSkills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragRotation, setDragRotation] = useState(0);

  const previousIndex = activeIndex - 1;
  const nextIndex = activeIndex + 1;

  const handlePrevious = () => {
    setActiveIndex((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => Math.min(skillCategories.length - 1, current + 1));
  };

  const handleDotSelect = (index) => {
    setActiveIndex(index);
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (isSwipedLeft(offset, velocity) && activeIndex < skillCategories.length - 1) {
      handleNext();
      return;
    }

    if (isSwipedRight(offset, velocity) && activeIndex > 0) {
      handlePrevious();
      return;
    }

    setDragRotation(0);
  };

  useEffect(() => {
    setDragRotation(0);
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="mb-12 lg:mb-20">


      <section id="skills" className="py-16">
        <div className="mx-auto flex w-full max-w-280 flex-col items-center px-4 sm:px-6">
          <div className="flex w-full justify-center mb-10">
            <SectionHeading title="Skills" />
          </div>

          <div className="relative mt-10 w-full overflow-visible">
            <div className="absolute inset-y-0 left-0 hidden items-center pl-2 md:flex z-50 pointer-events-auto">
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous skill category"
                disabled={activeIndex === 0}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border theme-border theme-surface text-zinc-900 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
              >
                <FaChevronLeft size={20} className="text-zinc-900" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 hidden items-center pr-2 md:flex z-50 pointer-events-auto">
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next skill category"
                disabled={activeIndex === skillCategories.length - 1}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border theme-border theme-surface text-zinc-900 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
              >
                <FaChevronRight size={20} className="text-zinc-900"/>
              </button>
            </div>

            <div className="relative mx-auto w-full max-w-180 px-2 pt-8 pb-20 sm:px-4 sm:pb-16 min-h-105 sm:min-h-90 overflow-visible">
              {skillCategories.map((category, index) => {
                const position =
                  index === activeIndex ? "current" :
                    index === previousIndex ? "prev" :
                      index === nextIndex ? "next" :
                        "hidden";

                if (position === "hidden") {
                  return null;
                }

                const motionStyle = cardMotionSettings[position];
                const isActive = position === "current";
                const CardIcon = category.Icon;

                return (
                  <motion.div
                    key={category.title}
                    initial={false}
                    animate={{
                      x: motionStyle.x,
                      y: motionStyle.y,
                      scale: motionStyle.scale,
                      opacity: motionStyle.opacity,
                      rotate: motionStyle.rotate,
                    }}
                    transition={springConfig}
                    className="absolute left-1/2 top-0 z-10 w-full max-w-180 -translate-x-1/2"
                    style={{ zIndex: motionStyle.zIndex }}
                  >
                    <motion.div
                      drag={isActive ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.16}
                      onDrag={(_, info) => {
                        const rotation = Math.max(-10, Math.min(10, info.offset.x / 20));
                        setDragRotation(rotation);
                      }}
                      onDragEnd={handleDragEnd}
                      whileTap={isActive ? { scale: 0.99 } : undefined}
                      animate={{ rotate: isActive ? dragRotation : 0 }}
                      transition={springConfig}
                      className="relative cursor-grab overflow-hidden rounded-4xl border theme-border theme-surface p-8 shadow-xl shadow-zinc-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 theme-surface-gradient opacity-40" />
                      <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full theme-primary-soft-bg blur-3xl" />
                      <div className="absolute -bottom-14 -left-10 h-36 w-36 rounded-full theme-secondary-soft-bg blur-3xl" />
                      <div className="relative flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-zinc-900">
                          <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[rgba(37,99,235,0.12)] text-(--primary) shadow-sm shadow-[rgba(37,99,235,0.15)]">
                            <CardIcon size={24} />
                          </span>
                          <div>
                            {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                              Category
                            </p> */}
                            <h3 className="text-3xl font-semibold tracking-tight theme-primary">
                              {category.title}
                            </h3>
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {category.skills.map((skill) => {
                            const skillMeta = getSkillIcon(skill);
                            const SkillIcon = skillMeta.icon;

                            return (
                              <span
                                key={skill}
                                className="inline-flex items-center justify-center gap-2 rounded-full border theme-border bg-white/90 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:theme-primary-soft-bg hover:theme-primary"
                              >
                                <SkillIcon className="text-base" style={{ color: skillMeta.color }} />
                                <span>{skill}</span>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
      <div className="relative mt-24 lg:mt-4 flex items-center justify-center gap-3 z-20">
        {skillCategories.map((category, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={category.title}
              type="button"
              onClick={() => handleDotSelect(index)}
              aria-label={`Show ${category.title} skills`}
              className={`flex h-3 rounded-full transition-all duration-300 ${isActive ? "w-8 bg-(--primary)" : "w-3 bg-zinc-300 dark:bg-zinc-600"}`}
            />
          );
        })}
      </div>
    </div>
  );
};
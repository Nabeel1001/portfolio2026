import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const categories = [
  "All",
  "AI",
  "Backend",
  "Frontend",
  "Cloud",
  "Database",
  "Tools",
];

const skills = [
  // AI
  { name: "Python", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "LangGraph", category: "AI" },
  { name: "OpenAI", category: "AI" },
  { name: "Pinecone", category: "AI" },
  { name: "RAG", category: "AI" },
  { name: "Whisper", category: "AI" },
  { name: "ElevenLabs", category: "AI" },

  // Backend
  { name: ".NET", category: "Backend" },
  { name: "ASP.NET Core", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "Web API", category: "Backend" },
  { name: "Entity Framework", category: "Backend" },

  // Frontend
  { name: "Angular", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },

  // Cloud
  { name: "AWS", category: "Cloud" },
  { name: "Azure DevOps", category: "Cloud" },
  { name: "Docker", category: "Cloud" },

  // Database
  { name: "SQL Server", category: "Database" },
  { name: "Supabase", category: "Database" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
];

export const Skills = () => {
  const [active, setActive] = useState("All");

  const filteredSkills = useMemo(() => {
    if (active === "All") return skills;
    return skills.filter((skill) => skill.category === active);
  }, [active]);

  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="flex justify-center">
        <SectionHeading title="Skills" />
      </div>

      {/* Filters */}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300
              ${
                active === category
                  ? "bg-violet-600 text-white shadow-lg"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-violet-300 hover:text-violet-600"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.04,
              }}
              whileHover={{
                y: -6,
                scale: 1.05,
              }}
              className="group cursor-default rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-sm transition-all hover:border-violet-300 hover:shadow-lg"
            >
              <p className="font-medium text-zinc-800 transition group-hover:text-violet-700">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
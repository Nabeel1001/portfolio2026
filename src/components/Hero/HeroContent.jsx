// import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import personalInfo from "../../constants/personalInfo";
import HeroStats from "./HeroStats";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp } from "../../animations/varients";

export const SectionWrapper = ({ children }) => (
  <motion.section
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    {children}
  </motion.section>
);

const HeroContent = () => {

    const [currentTitle, setCurrentTitle] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % personalInfo.title.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="space-y-4">

            {/* Greeting */}
            <div className="space-y-3">
                <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-cyan-300 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full theme-online opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full theme-online"></span>
                    </span>

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] theme-online-text">
                        Open to AI Engineer Opportunities
                    </p>
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-gray-800 mb-0">
                    Hi, I'm
                </p>
                
                <p className="text-5xl text-gray-800 leading-tight">
                    {personalInfo.name}
                </p>
                <div className="h-14 text-3xl font-bold lg:text-3xl">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentTitle}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4 }}
                            className="text-gray-500"
                        >
                            {personalInfo.title[currentTitle]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>

            {/* Description */}

            <p className="text-gray-400 text-[16px] leading-8 max-w-2xl">
                {personalInfo.subtitle}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 ">

                <a
                    href={personalInfo.resume}
                    download
                    className="theme-resume-btn theme-primary-bg-hover flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition"
                >
                    <FaDownload />

                    Resume
                </a>


                {/* <a
                    href="#projects"
                    className="border border-blue-500 hover:bg-blue-600 transition px-6 py-4 rounded-xl flex items-center gap-3 font-semibold"
                >
                    View Projects

                    <FaArrowRight />
                </a> */}

            </div>

            <div className="hidden md:block">
                <HeroStats />
            </div>

        </div>
    );
};

export default HeroContent;
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { SectionHeading } from "../SectionHeading";
import visionIcon from "../../assets/images/visionIcon.png";
import tekhqslogo from "../../assets/images/tekhqslogo.png";
import { fadeUp, staggerContainer } from "../../animations/varients";
import { MotionWrapper } from "../../animations/MotionWrapper";
import { motion } from "framer-motion";

export const Experience = () => {

    return (
        <section
            id="experience"
            className="py-20 pt-10 px-2"
        >
            <div className="mx-auto">

                <MotionWrapper variants={fadeUp}>
                    <SectionHeading title="Experience" />
                </MotionWrapper>

                <div className="mt-6 lg:mt-14 flex flex-col gap-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col gap-8 w-full"
                    >


                        <ExperienceCard
                            role=".NET Developer"
                            company="Vision Technologies"
                            companyLogo={visionIcon}
                            duration="Jan 2025 – May 2026"
                            description="Developed and maintained enterprise healthcare applications using ASP.NET MVC/Core, C#, Angular, SQL Server, Entity Framework, and RESTful Web APIs. Built scalable backend services, responsive Angular applications, optimized SQL Server performance, and delivered new features while resolving production issues across the full stack."
                            technologies={[
                                ".NET Core",
                                "ASP.NET MVC",
                                "C#",
                                "Angular",
                                "SQL Server",
                                "Entity Framework",
                                "Web API",
                                "Azure DevOps",
                            ]}
                        />
                        <ExperienceCard
                            role=".NET Developer (Part-Time)"
                            company="TekHQs Inc."
                            companyLogo={tekhqslogo}
                            duration="Oct 2021 – Dec 2024"
                            description="Contributed to enterprise web application development using ASP.NET Core, Angular, SQL Server, and Entity Framework. Implemented business modules, REST APIs, and database features while collaborating in Agile teams using Git and Azure DevOps to deliver reliable software enhancements."
                            technologies={[
                                ".NET Core",
                                "ASP.NET Core",
                                "Angular",
                                "SQL Server",
                                "Entity Framework",
                                "REST API",
                                "Git",
                                "Azure DevOps",
                            ]}
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
export const ExperienceCard = ({
    role,
    company,
    companyLogo,
    duration,
    description,
    technologies,
    employmentType = "Full-Time",
}) => {
    return (
        <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border theme-border theme-surface p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full theme-primary-soft-bg blur-3xl transition-all duration-500"></div>
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full theme-secondary-soft-bg blur-3xl"></div>

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row">

                {/* Left */}
                <div className="flex-1">
                    <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md">
                            <img
                                src={companyLogo}
                                alt={company}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-zinc-900">
                                {role}
                            </h3>

                            <p className="mt-1 font-medium theme-primary">
                                {company}
                            </p>
                        </div>

                    </div>

                    <p className="mt-6 leading-8 text-zinc-600">
                        {description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border theme-border-strong bg-white px-4 py-2 text-xs font-medium text-gray-800 transition hover:theme-primary-soft-bg"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col items-start gap-4 lg:items-end">

                    <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-3">
                        <FiCalendar className="theme-primary" />
                        <span className="font-medium text-zinc-700">
                            {duration}
                        </span>
                    </div>

                    <span className="rounded-full theme-accent-gradient px-5 py-2 text-sm font-semibold text-white shadow-lg">
                        Full-Time
                    </span>

                </div>

            </div>
        </motion.div>
    );
};
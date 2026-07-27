import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { SectionHeading } from "../SectionHeading";
import { EducationCard } from "./EducationCard";


export const Education = () => {
    return (
        <section
            id="education"
            className="py-16 pt-10  px-2"
        >
            <div className="mx-auto max-w">
                <div className="flex flex-col items-center justify-center">
                    <SectionHeading title="Education" />

                </div>

                <div className="relative mt-16">

                    {/* Timeline Line */}
                    <div className="absolute left-0 right-0 top-12 h-[2px] bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200" />

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

                        <div className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 top-9 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-violet-600 shadow-lg" />

                            <div className="pt-16">
                                <EducationCard
                                    degree="Bachelor of Technology"
                                    college="Anurag Group of Institutions"
                                    duration="2020 – 2024"
                                    grade="CGPA: 8.1 / 10"
                                    coursework={[
                                        "Data Structures",
                                        "Algorithms",
                                        "Operating Systems",
                                        "DBMS",
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 top-9 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-violet-600 shadow-lg" />

                            <div className="pt-16">
                                <EducationCard
                                    degree="Intermediate (MPC)"
                                    college="Narayana Junior College"
                                    duration="2018 – 2020"
                                    grade="94%"
                                    coursework={[
                                        "Mathematics",
                                        "Physics",
                                        "Chemistry",
                                    ]}
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

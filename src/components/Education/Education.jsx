import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { SectionHeading } from "../SectionHeading";
import { EducationCard } from "./EducationCard";


export const Education = () => {
    return (
        <section
            id="education"
            className="py-16 pt-10 px-2"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <SectionHeading title="Education" />

                </div>

                <div className="relative mt-16">

                    {/* Timeline Line */}
                    <div className="absolute left-0 right-0 top-12 h-0.5 bg-linear-to-r from-violet-200 via-violet-400 to-violet-200" />

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

                        <div className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 top-9 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-violet-600 shadow-lg" />

                            <div className="pt-16">
                                <EducationCard
                                    degree="Bachelor of Engineering (CSE)"
                                    college="Lord's Institute of Engineering and Technology"
                                    duration="2021 – 2024"
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
                                    degree="Diploma in Computer Engineering"
                                    college="Quli Qutub Shah Government Polytechnic College"
                                    duration="2018 – 2021"
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

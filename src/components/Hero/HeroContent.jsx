// import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import personalInfo from "../../constants/personalInfo";
import HeroStats from "./HeroStats";

const HeroContent = () => {
    return (
        <div className="space-y-4">

            {/* Greeting */}
            <div className="space-y-3">
                <div className="flex items-center gap-2 w-fit rounded-full border border-cyan-300 bg-white/90 px-4 py-2 backdrop-blur-sm shadow-sm mb-4">
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500"></span>
                    </span>

                    <p className="text-xs font-semibold tracking-[0.2em] text-cyan-600 uppercase">
                        Open to AI Engineer Opportunities
                    </p>
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-gray-800 mb-0">
                    Hi, I'm
                </p>
                <p className="text-5xl text-gray-800 leading-tight">
                    {personalInfo.name}
                </p>

                <div className="text-3xl lg:text-3xl font-bold text-blue-500 h-14">

                    <span className="text-gray-500">{personalInfo.title[3]}</span>
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
                    className="bg-black hover:bg-black/85 transition px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
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
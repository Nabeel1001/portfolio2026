// import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import personalInfo from "../../constants/personalInfo";
import HeroStats from "./HeroStats";

const HeroContent = () => {
  return (
    <div className="space-y-8">

      {/* Greeting */}
      <div className="space-y-3">
        <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm">
          OPEN TO AI ENGINEER OPPORTUNITIES
        </p>

        <h1 className="text-4xl lg:text-4xl font-black leading-tight">
          Hi, I'm
          <br />

          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                {personalInfo.name}
          </span>
        </h1>

        <div className="text-3xl lg:text-3xl font-bold text-blue-500 h-14">

          {/* <TypeAnimation
            sequence={[
              ...personalInfo.title.flatMap((title) => [title, 2000]),
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          /> */}
            <span class="text-white">{personalInfo.title[3]}</span>
        </div>
      </div>

      {/* Description */}

      <p className="text-gray-400 text-lg leading-8 max-w-2xl">
        {personalInfo.subtitle}
      </p>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4">

        <a
          href={personalInfo.resume}
          download
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-4 rounded-xl flex items-center gap-3 font-semibold"
        >
          <FaDownload />

          Resume
        </a>

        <a
          href="#projects"
          className="border border-blue-500 hover:bg-blue-600 transition px-6 py-4 rounded-xl flex items-center gap-3 font-semibold"
        >
          View Projects

          <FaArrowRight />
        </a>

      </div>

      <HeroStats />

    </div>
  );
};

export default HeroContent;
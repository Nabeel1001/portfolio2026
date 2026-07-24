import personalInfo from "../../constants/personalInfo";

const HeroStats = () => {
  const stats = [
    {
      number: personalInfo.experience,
      label: "Years Experience",
    },
    {
      number: personalInfo.projects,
      label: "AI Projects",
    },
    {
      number: personalInfo.technologies,
      label: "Technologies",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-5 pt-8">
      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-gray-50 backdrop-blur-lg shadow-lg rounded-2xl p-5 text-center border border-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <h2 className="text-3xl font-bold! text-violet-600">
            {item.number}
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
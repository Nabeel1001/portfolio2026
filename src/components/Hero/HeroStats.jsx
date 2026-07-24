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
    <div className="grid grid-cols-3 gap-5 pt-8">
      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-center"
        >
          <h2 className="text-3xl font-black text-blue-500">
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
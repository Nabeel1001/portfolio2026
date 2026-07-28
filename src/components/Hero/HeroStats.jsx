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
          className="theme-surface-muted cursor-pointer rounded-2xl border theme-border p-5 text-center shadow-lg backdrop-blur-lg transition-transform duration-300 hover:scale-105"
        >
          <h2 className="text-3xl font-bold! theme-primary">
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
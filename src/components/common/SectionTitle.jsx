const SectionTitle = ({ title, highlight }) => {
  return (
    <h2 className="text-4xl md:text-5xl font-bold">
      {title}{" "}
      <span className="text-blue-500">
        {highlight}
      </span>
    </h2>
  );
};

export default SectionTitle;
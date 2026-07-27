export const SectionHeading = ({ title, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-violet-200/60 bg-gradient-to-r from-violet-50 via-white to-violet-100 px-8 py-2 shadow-sm backdrop-blur-sm ${className}`}
    >
      <h1 className="bg-gradient-to-r from-zinc-900 to-violet-700 bg-clip-text py-1 text-2xl font-bold tracking-tight text-transparent md:text-3xl">
        {title}
      </h1>
    </div>
  );
};
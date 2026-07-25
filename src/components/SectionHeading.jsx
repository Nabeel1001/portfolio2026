export const SectionHeading = ({ title }) => {
    return (
        <div className="inline-flex items-center rounded-full border border-violet-200/60 bg-gradient-to-r from-violet-50 via-white to-violet-100 px-5 py-3.5 shadow-sm backdrop-blur-sm">
            <h1 className="leading-none py-2 text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 to-violet-700 bg-clip-text text-transparent">
                {title}
            </h1>
        </div>
    );
}
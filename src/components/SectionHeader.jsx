// Reusable section heading component
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
  </div>
);

export default SectionHeader;

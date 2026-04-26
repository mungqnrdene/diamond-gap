export function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-auto flex flex-col justify-center"}>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

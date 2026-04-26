export function IconLink({ name, href, icon }) {
  return (
    <a
      href={href}
      aria-label={name}
      title={name}
      className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-[0_14px_26px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400/60 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        {icon}
      </svg>
    </a>
  );
}

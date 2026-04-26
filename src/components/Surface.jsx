export function Surface({ className = "", children }) {
  return (
    <div
      className={`rounded-[2rem] border border-white/70 bg-white/86 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/72 dark:shadow-[0_24px_80px_rgba(2,6,23,0.36)] ${className}`}
    >
      {children}
    </div>
  );
}

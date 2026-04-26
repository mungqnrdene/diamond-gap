export function Navbar({
  navItems,
  activeSection,
  darkMode,
  menuOpen,
  onNavigate,
  onToggleTheme,
  onToggleMenu,
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[96rem] items-center justify-between rounded-full border border-white/80 bg-white/92 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="text-left"
        >
          <p className="text-xl font-black tracking-[-0.06em] text-slate-950 dark:text-white sm:text-[1.9rem]">
            Diamond Gap
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
            School of Mongolia
          </p>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = item.id === activeSection;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-slate-950 text-white dark:bg-emerald-400 dark:text-slate-950"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-950 dark:border-white/10 dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:text-white"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
          >
            Холбогдох
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 dark:border-white/10 dark:text-white"
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 dark:border-white/10 dark:text-white"
            onClick={onToggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="text-lg">{menuOpen ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-[96rem] rounded-3xl border border-white/70 bg-white/92 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  item.id === activeSection
                    ? "bg-slate-950 text-white dark:bg-emerald-400 dark:text-slate-950"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

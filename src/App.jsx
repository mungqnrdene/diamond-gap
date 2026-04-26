import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import {
  financeCards,
  focusCards,
  founderProfile,
  highlights,
  managementCards,
  navItems,
  paymentOptions,
  programs,
  riskCards,
  schoolFloors,
  socialLinks,
} from "./data/siteData.jsx";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FinancePage } from "./pages/FinancePage";
import { HomePage } from "./pages/HomePage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { SchoolPage } from "./pages/SchoolPage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = window.localStorage.getItem("diamond-gap-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef(null);
  const financeRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    window.localStorage.setItem(
      "diamond-gap-theme",
      darkMode ? "dark" : "light",
    );
    document.body.style.backgroundColor = darkMode ? "#07141a" : "#f6f8f4";
  }, [darkMode]);

  useEffect(() => {
    const observers = [];

    const sections = [
      ["home", homeRef],
      ["finance", financeRef],
      ["contact", contactRef],
    ];

    sections.forEach(([key, ref]) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(key);
          }
        },
        { threshold: 0.35, rootMargin: "-20% 0px -45% 0px" },
      );
      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleNavigate = (section) => {
    const refMap = {
      home: homeRef,
      finance: financeRef,
      contact: contactRef,
    };

    refMap[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="relative min-h-screen overflow-hidden bg-[#f6f8f4] text-slate-900 transition-colors dark:bg-[#07141a] dark:text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.98),_transparent_34%),radial-gradient(circle_at_92%_10%,_rgba(18,163,127,0.10),_transparent_24%),radial-gradient(circle_at_10%_82%,_rgba(14,165,233,0.08),_transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.8),_transparent_34%),radial-gradient(circle_at_88%_12%,_rgba(16,185,129,0.12),_transparent_24%),radial-gradient(circle_at_18%_82%,_rgba(6,182,212,0.12),_transparent_24%)]" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 dark:opacity-20" />
        <div className="float-blob absolute -left-20 top-28 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="float-blob-delayed absolute right-0 top-[28rem] h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />

        <Navbar
          navItems={navItems}
          activeSection={activeSection}
          darkMode={darkMode}
          menuOpen={menuOpen}
          onNavigate={handleNavigate}
          onToggleTheme={() => setDarkMode((current) => !current)}
          onToggleMenu={() => setMenuOpen((current) => !current)}
        />

        <main className="mx-auto max-w-[96rem] px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24">
          <section ref={homeRef} id="home" className="scroll-mt-28">
            <HomePage
              onNavigate={handleNavigate}
              highlights={highlights}
              founderProfile={founderProfile}
            />
          </section>

          <section className="mt-10 xl:mt-14">
            <AboutPage
              focusCards={focusCards}
              managementCards={managementCards}
              riskCards={riskCards}
            />
          </section>

          <section className="mt-10 xl:mt-14">
            <ProgramsPage programs={programs} />
          </section>

          <section className="mt-10 xl:mt-14">
            <SchoolPage schoolFloors={schoolFloors} />
          </section>

          <section
            ref={financeRef}
            id="finance"
            className="mt-14 scroll-mt-28 xl:mt-20"
          >
            <FinancePage
              financeCards={financeCards}
              paymentOptions={paymentOptions}
            />
          </section>

          <section
            ref={contactRef}
            id="contact"
            className="mt-14 scroll-mt-28 xl:mt-20"
          >
            <ContactPage socialLinks={socialLinks} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

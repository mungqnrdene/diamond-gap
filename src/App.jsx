import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const iconMap = {
  compass: (
    <path d="M14.5 9.5 9 11l1.5 5.5L16 15l-1.5-5.5ZM12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z" />
  ),
  spark: (
    <path d="m12 3 1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3Z" />
  ),
  growth: (
    <path d="M5 16c2.5-5 6.7-8.3 14-10-1.7 7.2-5 11.5-10 14M7 7h4M7 11h3" />
  ),
  briefcase: (
    <path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m4 3H5m0 0v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7M5 10V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" />
  ),
  laptop: <path d="M4 6h16v10H4zM2 18h20M9 15h6" />,
  language: (
    <path d="M4 6h7M7.5 6c0 5-1.5 8.5-4.5 11m4.5-11c1.2 3.3 3 5.9 5.5 8M14 6h6m-3 0v11m-3-4h6" />
  ),
  building: (
    <path d="M4 20V6l8-3 8 3v14M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01M11 20v-3h2v3" />
  ),
  camera: (
    <path d="M4 8h3l2-2h6l2 2h3v10H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  ),
  coins: (
    <path d="M12 6c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Zm-8 6v3c0 1.7 3.6 3 8 3s8-1.3 8-3v-3" />
  ),
  shield: (
    <path d="M12 3 5 6v5c0 5 3.4 8.7 7 10 3.6-1.3 7-5 7-10V6l-7-3Z" />
  ),
  team: (
    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4 19a4 4 0 0 1 8 0m2 0a3.5 3.5 0 0 1 7 0" />
  ),
  chart: <path d="M5 19V9m7 10V5m7 14v-7M3 19h18" />,
  send: <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" />,
};

const navItems = [
  { id: "home", label: "Нүүр", hash: "#/" },
  { id: "about", label: "Танилцуулга", hash: "#/about" },
  { id: "programs", label: "Хөтөлбөр", hash: "#/programs" },
  { id: "campus", label: "Кампус", hash: "#/campus" },
  { id: "finance", label: "Санхүү", hash: "#/finance" },
  { id: "contact", label: "Холбоо", hash: "#/contact" },
];

const highlights = [
  { value: "16-25", label: "Зорилтот нас", icon: "compass" },
  { value: "2400", label: "Жилийн хүчин чадал", icon: "team" },
  { value: "785M₮", label: "Суурь хөрөнгө", icon: "coins" },
  { value: "5", label: "Кампусын давхар", icon: "building" },
];

const focusCards = [
  {
    title: "Чиг баримжаа",
    text: "Мэргэжлээ сонгоход эргэлзэж буй залууст бодит туршлага дээр суурилсан шилжилтийн орчин.",
    icon: "compass",
  },
  {
    title: "Практик сургалт",
    text: "IT, маркетинг, үйлчилгээ, хэл, гар урлалын чадварыг шууд хэрэглээнд ойр хэлбэрээр өгнө.",
    icon: "laptop",
  },
  {
    title: "Хувь хүний хөгжил",
    text: "Карьер төлөвлөлт, санхүүгийн боловсрол, харилцаа, манлайллыг нэгтгэсэн бүтэц.",
    icon: "growth",
  },
];

const programs = [
  ["Маркетинг / Бизнесийн удирдлага", "briefcase"],
  ["Компьютер / Технологи", "laptop"],
  ["Хувь хүний хөгжлийн хөтөлбөр", "growth"],
  ["Гадаад хэл, тэтгэлгийн бэлтгэл", "language"],
  ["Санхүүгийн болон бодлогын сургалт", "coins"],
  ["Манлайлал ба карьер хөгжүүлэлт", "spark"],
];

const campusFloors = [
  ["1-р давхар", "Welcome floor", "Хүлээн авалт, олон нийтийн талбай, кофе шоп", "80 сая ₮", "building"],
  ["2-р давхар", "Learning floor", "Анги, семинар, номын сан, багшийн өрөө", "65 сая ₮", "language"],
  ["3-р давхар", "Tech floor", "Компьютер лаборатори, практик цех, сервер", "235 сая ₮", "laptop"],
  ["4-р давхар", "Media floor", "Хэлний лаборатори, мультимедиа студи", "220 сая ₮", "camera"],
  ["5-р давхар", "Leadership floor", "Хурлын танхим, кафе, терасс, удирдлага", "165 сая ₮", "spark"],
];

const financeCards = [
  ["Нийт хөрөнгө", "785M₮", "1000м², 5 давхар сургалтын төвийн үндсэн суурь", "coins"],
  ["Сарын зардал", "20M₮", "Багш, дэд бүтэц, интернет, өдөр тутмын ажиллагаа", "chart"],
  ["Борлуулалтын боломж", "7.2B₮", "2400 суралцагч бүрэн дүүргэлтийн тооцоо", "growth"],
];

const paymentOptions = [
  ["Full", "3,000,000₮", "Бүтэн төлөлт"],
  ["Part", "1,500,000₮", "2 хуваах нөхцөл"],
  ["Half", "750,000₮", "Эхлэх уян төлбөр"],
];

const managementCards = [
  ["Сургуулийн захирал", "spark"],
  ["Сургалтын менежер", "team"],
  ["Санхүү, захиргаа", "coins"],
  ["IT / техникийн баг", "laptop"],
];

const riskCards = [
  ["Санхүү", "Зардал төлбөрөөс давах эрсдэл", "Бюджет хяналт, оновчлол", "coins"],
  ["Элсэлт", "Элсэгч төлөвлөснөөс бага байх", "Маркетинг, тэтгэлэг, олон сувгийн бүртгэл", "chart"],
  ["Багш", "Чадварлаг хүний нөөц сулрах", "Хамтрагч сургууль, тасралтгүй хөгжүүлэлт", "team"],
  ["Технологи", "Төхөөрөмж, серверийн саатал", "Нөөц төхөөрөмж, үйлчилгээний гэрээ", "shield"],
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="16.5" cy="7.5" r="1" />
      </>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: <path d="M20 8.6a2.8 2.8 0 0 0-2-2C16.4 6 12 6 12 6s-4.4 0-6 .6a2.8 2.8 0 0 0-2 2A29 29 0 0 0 4 12a29 29 0 0 0 .6 3.4 2.8 2.8 0 0 0 2 2c1.6.6 6 .6 6 .6s4.4 0 6-.6a2.8 2.8 0 0 0 2-2A29 29 0 0 0 20 12a29 29 0 0 0 0-3.4ZM10 15.5v-7l6 3.5-6 3.5Z" />,
  },
  {
    name: "TikTok",
    href: "#",
    icon: <path d="M14.8 4c.4 1.7 1.4 3 3.2 3.8v2.8a7 7 0 0 1-3-.9V15a5 5 0 1 1-5-5c.4 0 .7 0 1 .1v2.9a2.3 2.3 0 1 0 1.7 2.2V4h2.1Z" />,
  },
];

const resolvePageFromHash = () => {
  const currentHash = window.location.hash || "#/";
  const found = navItems.find((item) => item.hash === currentHash);
  return found?.id ?? "home";
};

function FeatureIcon({ name, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {iconMap[name]}
    </svg>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-up ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
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

function Surface({ className = "", children }) {
  return (
    <div
      className={`rounded-[2rem] border border-white/70 bg-white/86 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/72 dark:shadow-[0_24px_80px_rgba(2,6,23,0.36)] ${className}`}
    >
      {children}
    </div>
  );
}

function IconLink({ name, href, icon }) {
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

function HomePage({ onNavigate }) {
  return (
    <div className="page-enter space-y-10 lg:space-y-14">
      <Reveal>
        <Surface className="hero-surface p-6 sm:p-8 lg:p-10 ">

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black tracking-[-0.07em] text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
                Gap year санааг олон хуудастай, modern interaction-тай веб туршлага болгосон хувилбар.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                Diamond GAP School of Mongolia-ийн үндсэн санааг нэг урт page дээр биш,
                navbar-аар шилждэг view-үүд, scroll reveal animation, утгатай icon system-ээр цэгцэлж харуулна.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onNavigate("about")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
                >
                  <FeatureIcon name="compass" className="h-4 w-4" />
                  Танилцуулга үзэх
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-950 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-emerald-400"
                >
                  <FeatureIcon name="send" className="h-4 w-4" />
                  Холбоо барих
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item, index) => (
              <Reveal key={item.label} delay={80 * index}>
                <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5">
                  <FeatureIcon name={item.icon} className="mb-4 h-8 w-8 text-emerald-700 dark:text-emerald-300" />
                  <p className="text-2xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.label}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Surface>
      </Reveal>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page-enter">
      <Surface className="p-7 sm:p-8">
        <SectionHeader
          eyebrow="Төслийн суурь санаа"
          title="Энгийн сургалтын төв биш, залуусын чиглэлээ олох transitional ecosystem"
          description="PDF-ийн үндсэн мессежийг илүү цэгцтэй болгож 3 гол багц санаанд хуваав."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {focusCards.map((card, index) => (
            <Reveal key={card.title} delay={90 * index}>
              <article className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_18px_44px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg dark:from-emerald-400 dark:to-cyan-400">
                  <FeatureIcon name={card.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Surface>
    </div>
  );
}

function ProgramsPage() {
  return (
    <div className="page-enter grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <Reveal>
        <Surface className="bg-slate-950 p-8 text-white dark:bg-slate-900">
          <SectionHeader
            eyebrow="Хөтөлбөрүүд"
            title="Олон чиглэл нэг кампус дотор"
            description="Практик ур чадвар, манлайлал, гадаад хэл, карьер төлөвлөлтийг интеграцчилсан бүтэц."
          />
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
              Need-driven design
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              64% ажил олгогч ур чадвар сул гэж үзсэн, 70% суралцагч чиглэлээ тодорхойлоогүй гэсэн PDF-ийн судалгаатай шууд холбож хөтөлбөрийн бүтэц гаргасан.
            </p>
          </div>
        </Surface>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {programs.map(([program, icon], index) => (
          <Reveal key={program} delay={70 * index}>
            <Surface className="p-6">
              <FeatureIcon name={icon} className="h-7 w-7 text-emerald-700 dark:text-emerald-300" />
              <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
                Track {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold tracking-[-0.04em] text-slate-950 dark:text-white">
                {program}
              </h3>
            </Surface>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function CampusPage() {
  return (
    <div className="page-enter space-y-8">
      <SectionHeader
        eyebrow="Кампусын туршлага"
        title="5 давхар орон зайг page-based байдлаар задласан бүтэц"
        description="Хүснэгт шиг мэдрэмжээс гарч, давхар бүрийг story-driven картуудаар уншигдах хэлбэрт оруулав."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {campusFloors.map(([name, title, desc, budget, icon], index) => (
          <Reveal key={name} delay={70 * index}>
            <Surface className="p-5">
              <FeatureIcon name={icon} className="h-7 w-7 text-emerald-700 dark:text-emerald-300" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
                {name}
              </p>
              <h3 className="mt-3 text-xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {desc}
              </p>
              <div className="mt-6 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-900 dark:bg-emerald-400/15 dark:text-emerald-300">
                {budget}
              </div>
            </Surface>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function FinancePage() {
  return (
    <div className="page-enter">
      <Reveal>
        <Surface className="bg-slate-950 px-6 py-8 text-white dark:bg-slate-900 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
            <div>
              <SectionHeader
                eyebrow="Санхүүгийн зураглал"
                title="Investment story-г decision-ready байдлаар үзүүлсэн"
                description="Хөрөнгө оруулалт, сарын зардал, борлуулалтын боломжийг ялгаж харуулснаар илүү хурдан ойлгогдоно."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {financeCards.map(([label, value, note, icon], index) => (
                  <Reveal key={label} delay={80 * index}>
                    <article className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5">
                      <FeatureIcon name={icon} className="h-7 w-7 text-emerald-300" />
                      <p className="mt-4 text-xs uppercase tracking-[0.26em] text-emerald-300">
                        {label}
                      </p>
                      <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">
                        {value}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{note}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Төлбөрийн бүтэц
              </p>
              <div className="mt-6 space-y-4">
                {paymentOptions.map(([name, price, note]) => (
                  <div
                    key={name}
                    className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                          {name}
                        </p>
                        <p className="mt-2 text-sm text-slate-300">{note}</p>
                      </div>
                      <p className="text-xl font-black tracking-[-0.04em] text-white">
                        {price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Surface>
      </Reveal>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="page-enter grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
      <Reveal>
        <Surface className="bg-slate-950 p-8 text-white dark:bg-slate-900">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">
            Contact + Icons
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
            Social link текстийн оронд icon-only action болгон шинэчилсэн.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Доорх icon-ууд одоогоор placeholder URL-тай. Дараа нь жинхэнэ
            Facebook, Instagram, YouTube, TikTok линкээр солиод шууд ашиглаж
            болно.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {socialLinks.map((item, index) => (
              <Reveal key={item.name} delay={70 * index}>
                <IconLink {...item} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
            <p className="text-sm leading-7 text-slate-300">
              UI/UX талдаа contact хэсгийг хоёр хэсэгт хувааж, зүүн талд quick actions, баруун талд form хадгалсан тул илүү цэвэр уншигдаж байна.
            </p>
          </div>
        </Surface>
      </Reveal>

      <Reveal delay={80}>
        <Surface className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
            Inquiry Form
          </p>
          <h3 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">
            Элсэлт, түншлэл, хамтын ажиллагаанд бэлэн контакт блок
          </h3>

          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Нэр
              </span>
              <input
                type="text"
                placeholder="Таны нэр"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-emerald-400"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                И-мэйл
              </span>
              <input
                type="email"
                placeholder="name@email.com"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-emerald-400"
              />
            </label>
            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Сэдэв
              </span>
              <input
                type="text"
                placeholder="Элсэлт, түншлэл, хөрөнгө оруулалт..."
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-emerald-400"
              />
            </label>
            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Мессеж
              </span>
              <textarea
                rows="5"
                placeholder="Дэлгэрэнгүй хүсэлтээ бичнэ үү"
                className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-emerald-400"
              />
            </label>
            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                Backend холболт нэмэхэд шууд ашиглахад бэлэн UI бүтэц.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
              >
                Мессеж илгээх
              </button>
            </div>
          </form>
        </Surface>
      </Reveal>
    </div>
  );
}

function AboutExtras() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Reveal>
        <Surface className="p-7">
          <SectionHeader
            eyebrow="Удирдлага"
            title="Сургалтын чанар, санхүү, хүний нөөцийг нэгдсэн системээр удирдана"
            description="Удирдлагын бүтцийг товч, role-based байдлаар үлдээж уншигдах байдлыг сайжрууллаа."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {managementCards.map(([item, icon], index) => (
              <Reveal key={item} delay={70 * index}>
                <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  <FeatureIcon name={icon} className="mb-3 h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Surface>
      </Reveal>

      <Reveal delay={80}>
        <Surface className="p-7">
          <SectionHeader
            eyebrow="Эрсдэлийн хяналт"
            title="Critical risk-үүдийг шууд арга хэмжээтэй нь хослуулсан"
            description="Санхүү, элсэлт, багш, технологийн эрсдэлийг action-oriented картуудаар харуулж байна."
          />
          <div className="mt-8 grid gap-4">
            {riskCards.map(([title, text, action, icon], index) => (
              <Reveal key={title} delay={70 * index}>
                <article className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                  <FeatureIcon name={icon} className="mb-3 h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                  <p className="text-sm font-bold text-slate-950 dark:text-white">
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {text}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                    {action}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Surface>
      </Reveal>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = window.localStorage.getItem("diamond-gap-theme");
    if (saved) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [activePage, setActivePage] = useState(resolvePageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setActivePage(resolvePageFromHash());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "diamond-gap-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  const currentLabel = useMemo(
    () => navItems.find((item) => item.id === activePage)?.label ?? "Нүүр",
    [activePage],
  );

  const handleNavigate = (pageId) => {
    const match = navItems.find((item) => item.id === pageId);
    if (!match) return;
    window.location.hash = match.hash;
    setMenuOpen(false);
  };

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return (
          <div className="space-y-8">
            <AboutPage />
            <AboutExtras />
          </div>
        );
      case "programs":
        return <ProgramsPage />;
      case "campus":
        return <CampusPage />;
      case "finance":
        return <FinancePage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="relative min-h-screen overflow-hidden bg-[#f7fbf7] text-slate-900 transition-colors dark:bg-[#07141a] dark:text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.98),_transparent_34%),radial-gradient(circle_at_88%_12%,_rgba(16,185,129,0.16),_transparent_24%),radial-gradient(circle_at_18%_82%,_rgba(14,165,233,0.14),_transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.8),_transparent_34%),radial-gradient(circle_at_88%_12%,_rgba(16,185,129,0.12),_transparent_24%),radial-gradient(circle_at_18%_82%,_rgba(6,182,212,0.12),_transparent_24%)]" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 dark:opacity-20" />
        <div className="float-blob absolute -left-20 top-28 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="float-blob-delayed absolute right-0 top-[28rem] h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />

        <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/92 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
            <button
              type="button"
              onClick={() => handleNavigate("home")}
              className="flex items-center gap-3 text-left"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-black text-white dark:bg-emerald-400 dark:text-slate-950">
                DG
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">
                  Diamond GAP
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {currentLabel}
                </p>
              </div>
            </button>

            <nav className="hidden items-center gap-2 lg:flex">
              {navItems.map((item) => {
                const active = item.id === activePage;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigate(item.id)}
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
                onClick={() => setDarkMode((current) => !current)}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-950 dark:border-white/10 dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:text-white"
              >
                {darkMode ? "Light" : "Dark"}
              </button>
              <button
                type="button"
                onClick={() => handleNavigate("contact")}
                className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
              >
                Холбогдох
              </button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setDarkMode((current) => !current)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 dark:border-white/10 dark:text-white"
                aria-label="Toggle theme"
              >
                {darkMode ? "☀" : "☾"}
              </button>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 dark:border-white/10 dark:text-white"
                onClick={() => setMenuOpen((current) => !current)}
                aria-label="Toggle navigation"
              >
                <span className="text-lg">{menuOpen ? "×" : "≡"}</span>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/70 bg-white/92 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 lg:hidden">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigate(item.id)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                      item.id === activePage
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

        <main className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;

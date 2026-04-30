import avatarImage from "../assets/avatar.png";
import academyImage from "../assets/academy.png";
import { FeatureIcon } from "../components/FeatureIcon";
import { Reveal } from "../components/Reveal";
import { Surface } from "../components/Surface";

const highlights = [
  { value: "16-25", label: "Зорилтот нас", icon: "compass" },
  { value: "2400", label: "Жилийн элсэлтийн боломж", icon: "team" },
];

const founderProfile = {
  name: "Дашцэрэнгийн Дашням",
  role: "Төслийн санаачлагч",
  image: avatarImage,
  summary:
    "Олон салбарын бизнес, боловсрол, сэтгэл зүйн туршлагыг нэгтгэн залуучуудын чиг баримжаа, ур чадварын шилжилтэд чиглэсэн сургуулийн санаачилгыг дэвшүүлж  байна.",
  companies: [
    "Diamond Forex LLC",
    "Diamond Marketing Agency LLC",
    "Diamond Hand Mebel LLC",
    "Diamond Fashion LLC",
    "Diamond Grand Medical LLC",
    "Diamond Kids Academy LLC",
    "Diamond Travel LLC",
    "Алмазан гэр бүл ТББ",
  ],
  education: [
    "Монгол Улсын Их Сургууль — Геологи",
    "Шихихутаг их сургууль — Эрх зүй",
    "Удирдлагын академи — Төрийн захиргаа",
    "Этүгэн их сургууль — Сэтгэл зүйч",
    "Систем Векторын Сэтгэлзүйн судлал",
  ],
};

export function HomePage({ onNavigate }) {
  return (
    <div className="page-enter space-y-10 lg:space-y-14">
      <Reveal>
        <Surface className="hero-surface min-h-[calc(100vh-8.5rem)] p-6 sm:p-8 lg:p-12">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
            <FeatureIcon name="spark" className="h-4 w-4" />
            Career direction + practical skill academy
          </div>
          <h1 className="max-w-5xl text-4xl font-black leading-[0.95] pb-5 tracking-[-0.07em] text-slate-950 dark:text-white sm:text-5xl xl:text-7xl 2xl:text-[5.45rem]">
            Diamond GAP School of Mongolia
          </h1>

          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row">
                <img
                  src={founderProfile.image}
                  alt={founderProfile.name}
                  className="h-40 w-40 rounded-[1.6rem] object-cover object-top"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
                    {founderProfile.role}
                  </p>
                  <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">
                    {founderProfile.name}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
                    {founderProfile.summary}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-900 dark:text-white">
                    Компани, байгууллагууд
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {founderProfile.companies.slice(0, 8).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 text-emerald-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-900 dark:text-white">
                    Боловсрол
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {founderProfile.education.slice(0, 5).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 text-cyan-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                className="relative w-full max-w-auto"
                src={academyImage}
                alt="academy"
              />
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 xl:text-xl">
                Мэргэжлийн чиг баримжаа, практик сургалт, хувь хүний хөгжил,
                кампусын бодит орчныг нэгтгэсэн modern академийн танилцуулга.
                Суралцагч зөвхөн мэргэжил сонгох биш, амьдралд хэрэгтэй ур
                чадвараа бодит туршлагаар бэхжүүлэх урсгал эндээс эхэлнэ.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onNavigate("finance")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
                >
                  <FeatureIcon name="coins" className="h-4 w-4" />
                  Санхүүгийн хэсэг рүү
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
          <div className="grid gap-10 xl:grid-cols-2 items-start mt-8">
            <div className="relative w-full max-w-auto pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
                src="https://www.youtube.com/embed/0eN0oQ8aviQ"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-2">
              {highlights.map((item, index) => (
                <Reveal key={item.label} delay={80 * index}>
                  <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5">
                    <p className="mt-2 text-lg flex justify-center leading-7 text-slate-600 dark:text-slate-300">
                      {item.label}
                    </p>

                    <div className="flex flex-row items-center justify-center">
                      <FeatureIcon
                        name={item.icon}
                        className="mr-4 h-8 w-8 text-emerald-700 dark:text-emerald-300"
                      />
                      <p className="text-3xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Surface>
      </Reveal>
    </div>
  );
}

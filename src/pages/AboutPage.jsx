import { FeatureIcon } from "../components/FeatureIcon";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Surface } from "../components/Surface";

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

const managementCards = [
  ["Сургуулийн захирал", "spark"],
  ["Сургалтын менежер", "team"],
  ["Санхүү, захиргаа", "coins"],
  ["IT / техникийн баг", "laptop"],
];

const riskCards = [
  [
    "Санхүү",
    "Зардал төлбөрөөс давах эрсдэл",
    "Бюджет хяналт, оновчлол",
    "coins",
  ],
  [
    "Элсэлт",
    "Элсэгч төлөвлөснөөс бага байх",
    "Маркетинг, тэтгэлэг, олон сувгийн бүртгэл",
    "chart",
  ],
  [
    "Багш",
    "Чадварлаг хүний нөөц сулрах",
    "Хамтрагч сургууль, тасралтгүй хөгжүүлэлт",
    "team",
  ],
  [
    "Технологи",
    "Төхөөрөмж, серверийн саатал",
    "Нөөц төхөөрөмж, үйлчилгээний гэрээ",
    "shield",
  ],
];

export function AboutPage() {
  return (
    <div className="page-enter space-y-8">
      <Surface className="p-7 sm:p-8 xl:p-10">
        <SectionHeader
          eyebrow="Төслийн суурь санаа"
          title="Энгийн сургалтын төвөөс илүү, залуусын чиглэлээ олох шилжилтийн экосистем"
          description="Суралцагч мэргэжлээ сонгохоос гадна бодит ажлын ур чадвар, өөртөө итгэх байдал, амьдралд хэрэгтэй чадамжаа нэг дор хөгжүүлэх логиктой."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {focusCards.map((card, index) => (
            <Reveal key={card.title} delay={90 * index}>
              <article className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_18px_44px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg dark:from-emerald-400 dark:to-cyan-400">
                  <FeatureIcon name={card.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Surface>

      <div className="flex flex-col gap-8 lg:grid-cols-2">
        <Reveal>
          <Surface className="p-7">
            <SectionHeader
              eyebrow="Удирдлага"
              title="Сургалтын чанар, санхүү, хүний нөөцийг нэгдсэн системээр удирдана"
              description="Удирдлагын бүтцийг товч, role-based байдлаар үлдээж уншигдах байдлыг сайжрууллаа."
            />
            <div className=" mt-8 grid gap-3 sm:grid-cols-2">
              {managementCards.map(([item, icon], index) => (
                <Reveal key={item} delay={70 * index}>
                  <div className=" flex flex-col items-center justify-center rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-4 text-lg font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    <FeatureIcon
                      name={icon}
                      className="mb-3 h-6 w-6 text-emerald-700 dark:text-emerald-300"
                    />
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
              title="Дараах гол эрсдэлүүдийг урьдчилан тооцоолж, тэдгээрийг бууруулах стратеги боловсруулна"
              description="Санхүү, элсэлт, багш, технологийн эрсдэлийг доор харуулж байна."
            />
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {riskCards.map(([title, text, action, icon], index) => (
                <Reveal key={title} delay={70 * index}>
                  <article className=" flex flex-col items-center rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                    <FeatureIcon
                      name={icon}
                      className="mb-3 h-6 w-6 text-emerald-700 dark:text-emerald-300"
                    />
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
    </div>
  );
}

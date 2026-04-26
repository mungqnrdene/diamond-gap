import { FeatureIcon } from "../components/FeatureIcon";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Surface } from "../components/Surface";

const financeCards = [
  [
    "Нийт хөрөнгө",
    "785M₮",
    "1000м², 5 давхар сургалтын төвийн үндсэн суурь",
    "coins",
  ],
  [
    "Сарын зардал",
    "20M₮",
    "Багш, дэд бүтэц, интернет, өдөр тутмын ажиллагаа",
    "chart",
  ],
  [
    "Борлуулалтын боломж",
    "7.2B₮",
    "2400 суралцагч бүрэн дүүргэлтийн тооцоо",
    "growth",
  ],
];

const paymentOptions = [
  ["Full", "3,000,000₮", "Бүтэн төлөлт"],
  ["Part", "1,500,000₮", "2 хуваах нөхцөл"],
  ["Half", "750,000₮", "Эхлэх уян төлбөр"],
];

export function FinancePage() {
  return (
    <div className="page-enter">
      <Reveal>
        <Surface className="bg-white px-6 py-8 text-white dark:bg-slate-900 sm:px-8 xl:px-12 xl:py-12">
          <div className="grid gap-8 xl:grid-cols-[1fr_0.92fr]">
            <div>
              <SectionHeader
                eyebrow="Төлбөрийн мэдээлэл"
                title="Та манай академид дараах төлбөрийн сонголтуудаас сонголт хийж болно"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {financeCards.map(([label, value, note, icon], index) => (
                  <Reveal key={label} delay={80 * index}>
                    <article className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5">
                      <FeatureIcon
                        name={icon}
                        className="h-7 w-7 text-emerald-600"
                      />
                      <p className="mt-4 text-xs uppercase tracking-[0.26em] text-emerald-600">
                        {label}
                      </p>
                      <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">
                        {value}
                      </h3>
                      <p className="mt-3 text-lg leading-7 text-gray-900 dark:text-white ">
                        {note}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/90 bg-gray-800 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Төлбөр
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

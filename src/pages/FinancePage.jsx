import { FeatureIcon } from "../components/FeatureIcon";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Surface } from "../components/Surface";

export function FinancePage({ financeCards, paymentOptions }) {
  return (
    <div className="page-enter">
      <Reveal>
        <Surface className="bg-slate-950 px-6 py-8 text-white dark:bg-slate-900 sm:px-8 xl:px-12 xl:py-12">
          <div className="grid gap-8 xl:grid-cols-[1fr_0.92fr]">
            <div>
              <SectionHeader
                eyebrow="Санхүүгийн зураглал"
                title="Хөрөнгө оруулалт, үйл ажиллагааны зардал, орлогын боломжийг нэг дор ойлгох бүтэц"
                description="Төслийн суурь хөрөнгө, сар бүрийн зардал, бүрэн хүчин чадлын орлогын боломжийг томоор, ойлгомжтой card hierarchy-гаар үзүүлэв."
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

import { FeatureIcon } from "../components/FeatureIcon";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Surface } from "../components/Surface";

export function ProgramsPage({ programs }) {
  return (
    <div className="page-enter grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
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

import { FeatureIcon } from "../components/FeatureIcon";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Surface } from "../components/Surface";

const programs = [
  ["Маркетинг / Бизнесийн удирдлага", "briefcase"],
  ["Компьютер / Технологи", "laptop"],
  ["Хувь хүний хөгжлийн хөтөлбөр", "growth"],
  ["Гадаад хэл, тэтгэлгийн бэлтгэл", "language"],
  ["Санхүүгийн болон бодлогын сургалт", "coins"],
  ["Манлайлал ба карьер хөгжүүлэлт", "spark"],
];

export function ProgramsPage() {
  return (
    <div className="page-enter xl:grid-cols-[0.95fr_1.05fr] w-full">
      <Reveal>
        <Surface className="bg-white p-8 text-slate-800 dark:bg-slate-900 light:text-white w-full">
          <SectionHeader
            eyebrow="Хөтөлбөрүүд"
            title="Манай хөтөлбөрүүдэд багтсан мэргэжлийн чиглэлүүд болон сургалтын агуулга"
          />

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 w-full">
            <div className="grid gap-4 sm:grid-cols-2 w-full">
              {programs.map(([program, icon], index) => (
                <Reveal key={program} delay={70 * index}>
                  <Surface className="p-6 w-full h-full">
                    <FeatureIcon
                      name={icon}
                      className="h-7 w-7 text-emerald-400"
                    />

                    <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
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
        </Surface>
      </Reveal>
    </div>
  );
}

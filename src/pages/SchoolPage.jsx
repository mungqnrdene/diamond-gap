import { FeatureIcon } from "../components/FeatureIcon";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Surface } from "../components/Surface";

export function SchoolPage({ schoolFloors }) {
  return (
    <div className="page-enter space-y-8">
      <SectionHeader
        eyebrow="Diamond Gap School"
        title="Diamond Gap School-н 5 давхар ба давхар бүрийн танилцуулага"
      />

      <div className="space-y-6">
        {schoolFloors.map((floor, index) => (
          <Reveal key={floor.name} delay={70 * index}>
            <Surface className="overflow-hidden p-4 sm:p-5 xl:p-6">
              <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
                <div className={index % 2 === 1 ? "xl:order-2" : ""}>
                  <img
                    src={floor.image}
                    alt={`${floor.name} зураг`}
                    className="w-full rounded-[1.5rem] border border-slate-200 object-cover shadow-[0_18px_44px_rgba(15,23,42,0.08)] dark:border-white/10"
                  />
                </div>

                <div className={index % 2 === 1 ? "xl:order-1" : ""}>
                  <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-300">
                    <FeatureIcon name={floor.icon} className="h-4 w-4" />
                    {floor.name}
                  </div>

                  <h3 className="text-3xl font-black tracking-[-0.05em] text-slate-950 dark:text-white xl:text-4xl">
                    {floor.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                    {floor.description}
                  </p>

                  <div className="mt-6 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-emerald-400 dark:text-slate-950">
                    {floor.budget}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {floor.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Surface>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

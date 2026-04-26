import { IconLink } from "../components/IconLink";
import { Reveal } from "../components/Reveal";
import { Surface } from "../components/Surface";

export function ContactPage({ socialLinks }) {
  return (
    <div className="page-enter grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
      <Reveal>
        <Surface className="bg-slate-950 p-8 text-white dark:bg-slate-900">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
            Холбоо барих хэсгийг цэвэр, шууд ашиглахад бэлэн бүтэцтэй болгосон.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Доорх icon-ууд нь social сувгуудын placeholder action. Дараа нь бодит
            Facebook, Instagram, YouTube, TikTok линкээр солиод шууд ашиглаж болно.
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
            Элсэлт, түншлэл, хамтын ажиллагаанд зориулсан форм
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

import { IconLink } from "../components/IconLink";
import { Reveal } from "../components/Reveal";
import { Surface } from "../components/Surface";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/DiamondFxOfficial",
    icon: (
      <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/diamond.daashka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
    href: "https://youtube.com/@diamond_daashka?si=gs7VZjtCYpP5NDO-",
    icon: (
      <path d="M20 8.6a2.8 2.8 0 0 0-2-2C16.4 6 12 6 12 6s-4.4 0-6 .6a2.8 2.8 0 0 0-2 2A29 29 0 0 0 4 12a29 29 0 0 0 .6 3.4 2.8 2.8 0 0 0 2 2c1.6.6 6 .6 6 .6s4.4 0 6-.6a2.8 2.8 0 0 0 2-2A29 29 0 0 0 20 12a29 29 0 0 0 0-3.4ZM10 15.5v-7l6 3.5-6 3.5Z" />
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <path d="M14.8 4c.4 1.7 1.4 3 3.2 3.8v2.8a7 7 0 0 1-3-.9V15a5 5 0 1 1-5-5c.4 0 .7 0 1 .1v2.9a2.3 2.3 0 1 0 1.7 2.2V4h2.1Z" />
    ),
  },
];

export function ContactPage() {
  return (
    <div className="page-enter grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
      <Reveal>
        <Surface className="bg-slate-950 p-8 text-white dark:bg-slate-900">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">
            Social Accounts
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
            Сошиал хаягууд
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Та доорх сошиал линкүүдээр дамжуулан бидэнтэй холбогдох боломжтой.
            Мөн манай байршил болон оффисын мэдээллийг доорхи хэсгээс харах
            боломжтой.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {socialLinks.map((item, index) => (
              <Reveal key={item.name} delay={70 * index}>
                <IconLink {...item} />
              </Reveal>
            ))}
          </div>
        </Surface>
        <Surface className="bg-slate-950 p-8 text-white dark:bg-slate-900 mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">
            Number or Email
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
            Дугаар болон имэйл хаяг
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Та бидэнтэй шууд холбогдохыг хүсвэл доорх дугаар болон имэйл хаягаар
            холбогдоорой. Бид таны асуулт, санал хүсэлтийг хүлээн авахдаа үргэлж
            бэлэн.
          </p>

          <div className="flex items-center gap-8">
            <div className="">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Утасны дугаар
              </p>

              <a href="tel:+97699099090">
                <h5 className="mt-1 text-2xl font-black tracking-[-0.05em] text-white hover:text-emerald-300 transition">
                  +976 9909 9090
                </h5>
              </a>
            </div>

            <div className="">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Имэйл хаяг
              </p>

              <a href="mailto:info@diamondfx.mn">
                <h5 className="mt-1 text-2xl font-black text-white hover:text-emerald-300 transition">
                  info@diamondfx.mn
                </h5>
              </a>
            </div>
          </div>
        </Surface>
      </Reveal>

      <Reveal delay={80}>
        <Surface className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
            Location
          </p>

          <h3 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">
            Манай байршил
          </h3>

          <div className="mt-8 overflow-hidden rounded-[1.4rem] border border-slate-200 dark:border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.6834581061253!2d106.89763187690096!3d47.91548446659605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693c9078907c1%3A0xfad6b3d0338e50e0!2sDiamond%20Fx!5e1!3m2!1sen!2smn!4v1777212124170!5m2!1sen!2smn"
              className="h-[420px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Манай оффисын байршил Google Maps дээр харагдаж байна.
          </p>
        </Surface>
      </Reveal>
    </div>
  );
}

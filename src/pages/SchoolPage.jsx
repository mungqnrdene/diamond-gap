import floor9Image from "../assets/floor-9.png";
import floor10Image from "../assets/floor-10.png";
import floor11Image from "../assets/floor-11.png";
import floor12Image from "../assets/floor-12.png";
import floor13Image from "../assets/floor-13.png";
import { FeatureIcon } from "../components/FeatureIcon";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Surface } from "../components/Surface";

const schoolFloors = [
  {
    name: "1-р давхар",
    title: "Welcome floor",
    description:
      "Хүлээн авалт, олон нийтийн танхим, хүлээлгийн хэсэг, жижиг кофе шоптой. Төвийн нүүр царай болж хэрэглэгчтэй анх холбогдох бүс.",
    description2:
      "1-р давхрын тохижилтын нийт өртөг 80 сая төгрөг бөгөөд сургалтын төвийн гол үйлчилгээний орчин, хүлээн авалт, танхим, кофе шоп болон үндсэн дэд бүтэц бүрэн бүрдсэн иж бүрэн тохижилт хийгдэх төлөвтэй",

    budget: "80 сая ₮",
    image: floor9Image,
    features: [
      "Ресепшн",
      "Олон зориулалтын танхим",
      "Кофе шоп",
      "Хүлээлгийн хэсэг",
    ],
    icon: "building",
  },
  {
    name: "2-р давхар",
    title: "Learning floor",
    description:
      "Стандарт ангиуд, семинарын өрөө, багшийн өрөө, нам гүм судалгааны орон зай бүхий номын сантай сургалтын үндсэн давхар.",
    description2:"2-р давхарын анги танхим, семинар, багшийн өрөө болон номын сангийн тоног төхөөрөмж, тавилга, AV/Lighting/Wi-Fi, IT сүлжээ зэрэг бүх зардлыг нэгтгэхэд нийт 65,000,000₮ болсон байна. Энэ нь тухайн давхарын сургалтын орчныг бүрэн хангах, оюутан болон багш нарын хэрэгцээг бүрэн дэмжихэд зориулагдсан байна.",
    budget: "65 сая ₮",
    image: floor10Image,
    features: ["Анги A/B", "Семинар", "Номын сан", "Багшийн өрөө"],
    icon: "language",
  },
  {
    name: "3-р давхар",
    title: "Tech floor",
    description:
      "35-40 компьютер суудалтай лаборатори, практик цех, сервер, уулзалтын өрөө, материалын агуулахтай технологийн суурь орчин.",
      description2:"-р давхарын компьютер лаборатори, практик цех, багшийн оффис, сервер, материалын агуулах зэрэг бүх тоног төхөөрөмж, тавилга, сүлжээ, серверийн суурилуулалт зэрэг зардлыг нэгтгэхэд нийт 235,000,000₮ болсон байна. 3-р давхарын сургалтын болон технологийн орчныг бүрэн хангах, оюутан болон багш нарын сургалтын хэрэгцээг бүрэн дэмжихэд зориулагдсан байна.",
    budget: "235 сая ₮",
    image: floor11Image,
    features: [
      "Компьютер лаборатори",
      "Практик цех",
      "Сервер",
      "Уулзалтын өрөө",
    ],
    icon: "laptop",
  },
  {
    name: "4-р давхар",
    title: "Media floor",
    description:
      "Хэлний лаборатори, мультимедиа студи, control room, консультацийн өрөөтэй контент ба хэлний боловсролын бүтээлч давхар.",
    description2:"4-р давхарын хэлний лаборатори, мультимедиа студи, сургалтын болон консультацийн өрөө, ажилтны lounge, агуулах, Studio Control Room зэрэг бүх тоноглол, монтаж, аудио/видео системийн зардлыг нэгтгэхэд нийт 220,000,000₮ болсон байна. 4-р давхарын сургалтын болон бүтээлч орчныг бүрэн хангах, оюутан болон багш нарын бүтээмж, сургалтын хэрэгцээг бүрэн дэмжихэд зориулагдсан байна.",
    budget: "220 сая ₮",
    image: floor12Image,
    features: ["Хэлний лаборатори", "AV студи", "Control room", "Consult room"],
    icon: "camera",
  },
  {
    name: "5-р давхар",
    title: "Leadership floor",
    description:
      "Хурлын танхим, кафе, терасс, удирдлагын оффис байрлах бөгөөд community, илтгэл, networking-т чиглэсэн орон зай.",
    description2:"5-р давхарын бүх тоноглол, тавилга, AV/техник, гал тогоо, терасс болон инженерийн нэмэлт системийн зардлыг нэгтгэхэд нийт 165,000,000₮ болсон байна. Энэ зардал нь 5-р давхарын үйл ажиллагаа, сургалт, үйлчилгээ, захиргааны орчныг бүрэн хангах боломжтой.",
    budget: "165 сая ₮",
    image: floor13Image,
    features: ["Хурлын танхим", "Кафе", "Терасс", "Удирдлагын оффис"],
    icon: "spark",
  },
];

export function SchoolPage() {
  return (
    <div className="page-enter space-y-8">
      <SectionHeader
        eyebrow="Diamond Gap School"
        title="Diamond Gap School-н давхар бүрийн танилцуулага"
        description="Нийт 5-н давхар"
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
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                    {floor.description2}
                  </p>

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

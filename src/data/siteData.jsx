import avatarImage from "../assets/avatar.png";
import floor9Image from "../assets/floor-9.png";
import floor10Image from "../assets/floor-10.png";
import floor11Image from "../assets/floor-11.png";
import floor12Image from "../assets/floor-12.png";
import floor13Image from "../assets/floor-13.png";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "finance", label: "Finance" },
  { id: "contact", label: "Contact" },
];

export const highlights = [
  { value: "16-25", label: "Зорилтот нас", icon: "compass" },
  { value: "2400", label: "Жилийн элсэлтийн боломж", icon: "team" },
  { value: "785M₮", label: "Суурь хөрөнгө", icon: "coins" },
  { value: "5", label: "Сургуулийн давхар", icon: "building" },
];

export const focusCards = [
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

export const founderProfile = {
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

export const programs = [
  ["Маркетинг / Бизнесийн удирдлага", "briefcase"],
  ["Компьютер / Технологи", "laptop"],
  ["Хувь хүний хөгжлийн хөтөлбөр", "growth"],
  ["Гадаад хэл, тэтгэлгийн бэлтгэл", "language"],
  ["Санхүүгийн болон бодлогын сургалт", "coins"],
  ["Манлайлал ба карьер хөгжүүлэлт", "spark"],
];

export const schoolFloors = [
  {
    name: "1-р давхар",
    title: "Welcome floor",
    description:
      "Хүлээн авалт, олон нийтийн танхим, хүлээлгийн хэсэг, жижиг кофе шоптой. Төвийн нүүр царай болж хэрэглэгчтэй анх холбогдох бүс.",
    budget: "80 сая ₮",
    image: floor9Image,
    features: ["Ресепшн", "Олон зориулалтын танхим", "Кофе шоп", "Хүлээлгийн хэсэг"],
    icon: "building",
  },
  {
    name: "2-р давхар",
    title: "Learning floor",
    description:
      "Стандарт ангиуд, семинарын өрөө, багшийн өрөө, нам гүм судалгааны орон зай бүхий номын сантай сургалтын үндсэн давхар.",
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
    budget: "235 сая ₮",
    image: floor11Image,
    features: ["Компьютер лаборатори", "Практик цех", "Сервер", "Уулзалтын өрөө"],
    icon: "laptop",
  },
  {
    name: "4-р давхар",
    title: "Media floor",
    description:
      "Хэлний лаборатори, мультимедиа студи, control room, консультацийн өрөөтэй контент ба хэлний боловсролын бүтээлч давхар.",
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
    budget: "165 сая ₮",
    image: floor13Image,
    features: ["Хурлын танхим", "Кафе", "Терасс", "Удирдлагын оффис"],
    icon: "spark",
  },
];

export const financeCards = [
  ["Нийт хөрөнгө", "785M₮", "1000м², 5 давхар сургалтын төвийн үндсэн суурь", "coins"],
  ["Сарын зардал", "20M₮", "Багш, дэд бүтэц, интернет, өдөр тутмын ажиллагаа", "chart"],
  ["Борлуулалтын боломж", "7.2B₮", "2400 суралцагч бүрэн дүүргэлтийн тооцоо", "growth"],
];

export const paymentOptions = [
  ["Full", "3,000,000₮", "Бүтэн төлөлт"],
  ["Part", "1,500,000₮", "2 хуваах нөхцөл"],
  ["Half", "750,000₮", "Эхлэх уян төлбөр"],
];

export const managementCards = [
  ["Сургуулийн захирал", "spark"],
  ["Сургалтын менежер", "team"],
  ["Санхүү, захиргаа", "coins"],
  ["IT / техникийн баг", "laptop"],
];

export const riskCards = [
  ["Санхүү", "Зардал төлбөрөөс давах эрсдэл", "Бюджет хяналт, оновчлол", "coins"],
  ["Элсэлт", "Элсэгч төлөвлөснөөс бага байх", "Маркетинг, тэтгэлэг, олон сувгийн бүртгэл", "chart"],
  ["Багш", "Чадварлаг хүний нөөц сулрах", "Хамтрагч сургууль, тасралтгүй хөгжүүлэлт", "team"],
  ["Технологи", "Төхөөрөмж, серверийн саатал", "Нөөц төхөөрөмж, үйлчилгээний гэрээ", "shield"],
];

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/DiamondFxOfficial",
    icon: <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" />,
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
    icon: <path d="M20 8.6a2.8 2.8 0 0 0-2-2C16.4 6 12 6 12 6s-4.4 0-6 .6a2.8 2.8 0 0 0-2 2A29 29 0 0 0 4 12a29 29 0 0 0 .6 3.4 2.8 2.8 0 0 0 2 2c1.6.6 6 .6 6 .6s4.4 0 6-.6a2.8 2.8 0 0 0 2-2A29 29 0 0 0 20 12a29 29 0 0 0 0-3.4ZM10 15.5v-7l6 3.5-6 3.5Z" />,
  },
  {
    name: "TikTok",
    href: "#",
    icon: <path d="M14.8 4c.4 1.7 1.4 3 3.2 3.8v2.8a7 7 0 0 1-3-.9V15a5 5 0 1 1-5-5c.4 0 .7 0 1 .1v2.9a2.3 2.3 0 1 0 1.7 2.2V4h2.1Z" />,
  },
];

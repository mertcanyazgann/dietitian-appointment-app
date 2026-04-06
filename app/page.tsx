import {
  HeartPulse,
  CalendarCheck2,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Apple,
  Salad,
  ActivitySquare,
  MessageCircleHeart,
} from "lucide-react";
import AppointmentRequestForm from "@/components/public/AppointmentRequestForm";

const heroCards = [
  { title: "Online Görüşme", text: "Uzaktan danışmanlık desteği" },
  { title: "Yüz Yüze", text: "Planlı bireysel görüşmeler" },
  { title: "Kişiye Özel", text: "Yaşam tarzına uygun programlar" },
];

const featureCards = [
  {
    Icon: Apple,
    title: "Kilo Yönetimi",
    text: "Sürdürülebilir ve dengeli planlama",
  },
  {
    Icon: ActivitySquare,
    title: "Sporcu Beslenmesi",
    text: "Performans odaklı yaklaşım",
  },
  {
    Icon: Salad,
    title: "Sağlıklı Beslenme",
    text: "Günlük yaşama uyumlu düzen",
  },
  {
    Icon: MessageCircleHeart,
    title: "Takip Süreci",
    text: "Düzenli kontrol ve yönlendirme",
  },
];

const firstMeetingSteps = [
  "Randevu talebi oluşturulur",
  "Uygun tarih ve saat değerlendirilir",
  "İlk görüşme planlanır",
  "Kişiye özel beslenme süreci başlatılır",
];

const aboutCards = [
  {
    title: "Bireysel danışmanlık",
    text: "Her danışan için farklı ihtiyaç analizi",
  },
  {
    title: "Takip ve değerlendirme",
    text: "Sürece göre güncellenen planlama",
  },
  {
    title: "Online ve yüz yüze seçenek",
    text: "Esnek görüşme modeli",
  },
  {
    title: "Ulaşılabilir süreç",
    text: "Anlaşılır, gerçekçi ve uygulanabilir sistem",
  },
];

const services = [
  "Kilo alma / verme danışmanlığı",
  "Sporcu beslenmesi",
  "Sağlıklı yaşam ve sürdürülebilir beslenme",
  "Online beslenme danışmanlığı",
];

const processSteps = [
  {
    step: "1",
    title: "Randevu talebi",
    text: "Sitedeki form üzerinden talep bırakılır.",
  },
  {
    step: "2",
    title: "Uygunluk kontrolü",
    text: "Tarih ve saat değerlendirilir.",
  },
  {
    step: "3",
    title: "Görüşme planı",
    text: "Online veya yüz yüze görüşme netleştirilir.",
  },
  {
    step: "4",
    title: "Takip süreci",
    text: "Danışmanlık ve ilerleme takibi başlar.",
  },
];

const appointmentHighlights = [
  { Icon: CalendarCheck2, label: "Online / Yüz yüze" },
  { Icon: ShieldCheck, label: "Admin onaylı süreç" },
];

const contactCards = [
  { Icon: Phone, title: "Telefon", text: "+90 5xx xxx xx xx" },
  { Icon: Mail, title: "E-posta", text: "randevu@ornek.com" },
  { Icon: MapPin, title: "Adres", text: "Bursa / Türkiye" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600">
              Dyt. Ayşe Bozkaya Yazgan
            </p>
            <h1 className="text-lg font-bold text-slate-900">
              Beslenme ve Yaşam Danışmanlığı
            </h1>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#hakkimda" className="transition hover:text-slate-900">
              Hakkımda
            </a>
            <a href="#hizmetler" className="transition hover:text-slate-900">
              Hizmetler
            </a>
            <a href="#surec" className="transition hover:text-slate-900">
              Süreç
            </a>
            <a href="#iletisim" className="transition hover:text-slate-900">
              İletişim
            </a>
          </nav>

          <a
            href="#randevu"
            className="inline-flex items-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            Randevu Al
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-emerald-50 via-white to-lime-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-emerald-700 shadow-sm">
              <HeartPulse className="h-4 w-4" /> Kişiye özel beslenme yaklaşımı
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Sağlıklı yaşam hedeflerin için profesyonel beslenme desteği
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Kilo kontrolü, sporcu beslenmesi, sürdürülebilir beslenme
              alışkanlıkları ve yaşam tarzına uygun danışmanlık için online veya
              yüz yüze randevu oluşturabilirsiniz.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#randevu"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Randevu Al <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Hizmetleri İncele
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm"
                >
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-100/50">
              <div className="grid gap-4 sm:grid-cols-2">
                {featureCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <item.Icon className="h-6 w-6 text-emerald-600" />
                    <h3 className="mt-3 font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-xl">
              <p className="text-sm text-emerald-300">İlk görüşme süreci</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-200">
                {firstMeetingSteps.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="hakkimda" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[32px] bg-emerald-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Hakkımda
            </p>
            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              Bilimsel temelli, sürdürülebilir ve kişiye özel yaklaşım
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Danışanların yaşam tarzını, hedeflerini ve günlük rutinlerini
              dikkate alarak uygulanabilir beslenme planları oluşturuyorum. Amaç
              yalnızca kısa süreli sonuç değil, kalıcı ve sağlıklı alışkanlıklar
              kazandırmaktır.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <h4 className="font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Hizmetler
            </p>
            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              Size uygun danışmanlık başlıkları
            </h3>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
                <p className="mt-4 font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="surec" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Süreç
          </p>
          <h3 className="mt-4 text-3xl font-bold text-slate-900">
            Randevu ve danışmanlık süreci nasıl ilerler?
          </h3>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 font-bold text-emerald-700">
                {item.step}
              </div>
              <h4 className="mt-5 text-lg font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="randevu"
        className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
              Randevu Al
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Hemen randevu talebi oluşturun
            </h3>
            <p className="mt-4 max-w-xl leading-8 text-emerald-50">
              Online veya yüz yüze görüşme için uygun tarih ve saatinizi seçin.
              Talebiniz admin paneline düşer ve onay sonrası randevunuz
              planlanır.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {appointmentHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <item.Icon className="h-5 w-5 text-white" />
                  <p className="mt-3 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-3 shadow-2xl">
            <AppointmentRequestForm />
          </div>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {contactCards.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <item.Icon className="h-6 w-6 text-emerald-600" />
              <h4 className="mt-4 font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dyt. Ayşe Bozkaya Yazgan — Tüm hakları saklidır.</p>
          <a
            href="#randevu"
            className="font-medium text-emerald-700 hover:text-emerald-800"
          >
            Randevu Al
          </a>
        </div>
      </footer>
    </main>
  );
}
import React from "react";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Activity,
  Salad,
  Scale,
  ChevronRight,
} from "lucide-react";
import AppointmentRequestForm from "@/components/public/AppointmentRequestForm";

const stats = [
  { value: "Online", label: "Görüşme seçeneği" },
  { value: "Yüz yüze", label: "Bireysel destek" },
  { value: "Kişiye özel", label: "Beslenme planı" },
];

const services = [
  {
    icon: Scale,
    title: "Kilo Yönetimi",
    text: "Sürdürülebilir kilo alma ve verme süreci için kişisel planlama.",
  },
  {
    icon: Activity,
    title: "Sporcu Beslenmesi",
    text: "Performans, toparlanma ve enerji dengesi odaklı yaklaşım.",
  },
  {
    icon: Salad,
    title: "Sağlıklı Yaşam",
    text: "Günlük hayata uyumlu, uygulanabilir beslenme düzeni.",
  },
];

const steps = [
  {
    no: "01",
    title: "Talep oluştur",
    text: "Uygun tarih ve saat seçerek hızlıca randevu talebi bırakın.",
  },
  {
    no: "02",
    title: "Uygunluk onayı",
    text: "Talebiniz kontrol edilir ve randevu detayınız netleştirilir.",
  },
  {
    no: "03",
    title: "Görüşmeyi başlat",
    text: "Online veya yüz yüze görüşmeyle danışmanlık süreci başlar.",
  },
];

const benefits = [
  "Bilimsel ve uygulanabilir yaklaşım",
  "Danışanın yaşam tarzına uygun planlama",
  "Düzenli takip ve sürdürülebilir süreç",
  "Online ve yüz yüze esnek görüşme modeli",
];

export default function DietitianSiteLandingPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f7f2]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Dyt. Ayşe Bozkaya Yazgan
            </p>
            <p className="mt-1 text-sm text-slate-600">Beslenme ve yaşam danışmanlığı</p>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-slate-600 lg:flex">
            <a href="#hakkimda" className="transition hover:text-slate-900">Hakkımda</a>
            <a href="#hizmetler" className="transition hover:text-slate-900">Hizmetler</a>
            <a href="#surec" className="transition hover:text-slate-900">Süreç</a>
            <a href="#iletisim" className="transition hover:text-slate-900">İletişim</a>
          </nav>

          <a
            href="#randevu"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Randevu Al
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-10 lg:pb-20 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-emerald-700 shadow-sm">
              <Sparkles className="h-4 w-4" /> Kişiye özel, sade ve sürdürülebilir yaklaşım
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              Beslenme sürecinizi daha sağlıklı ve daha sürdürülebilir hale getirin.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Kilo kontrolü, sağlıklı yaşam ve sporcu beslenmesi gibi alanlarda, yaşam temponuza uygun profesyonel danışmanlık desteği alın.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#randevu"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-4 font-medium text-white transition hover:bg-emerald-700"
              >
                Hemen Randevu Al <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#hakkimda"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Detayları İncele
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                  <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-emerald-200/50 to-lime-100/40 blur-3xl" />
            <div className="rounded-[36px] border border-white/70 bg-white/90 p-6 shadow-2xl shadow-slate-200/70">
              <div className="rounded-[28px] bg-slate-900 p-7 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">Danışmanlık süreci</p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight">
                      Basit, güvenli ve planlı randevu deneyimi
                    </h2>
                  </div>
                  <HeartPulse className="h-10 w-10 text-emerald-300" />
                </div>

                <div className="mt-6 grid gap-3">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hakkimda" className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] bg-[#e8f5ee] p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Hakkımda</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-slate-900">
              Bilimsel, sakin ve gerçek hayatla uyumlu bir beslenme yaklaşımı
            </h3>
            <p className="mt-5 leading-8 text-slate-600">
              Danışanların yaşam düzenini, hedeflerini ve sürdürülebilirlik ihtiyacını merkeze alarak ilerliyorum. Amaç; kısa süreli motivasyon değil, uzun vadeli ve uygulanabilir alışkanlıklar oluşturmaktır.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Bireysel değerlendirme",
                text: "Her danışan için ihtiyaç ve hedef odaklı özel planlama yapılır.",
              },
              {
                title: "Takip süreci",
                text: "Plan düzenli aralıklarla değerlendirilir ve güncellenir.",
              },
              {
                title: "Esnek görüşme modeli",
                text: "Online ve yüz yüze seçeneklerle sürece kolay uyum sağlanır.",
              },
              {
                title: "Uygulanabilir sistem",
                text: "Günlük yaşamda sürdürülebilir, gerçekçi ve sade çözümler sunulur.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hizmetler" className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Hizmetler</p>
          <h3 className="text-3xl font-semibold text-slate-900">İhtiyacınıza uygun danışmanlık alanları</h3>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <div key={item.title} className="group rounded-[30px] border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              <div className="mt-6 inline-flex items-center text-sm font-medium text-emerald-700">
                Detaylı incele <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="surec" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Süreç</p>
            <h3 className="text-3xl font-semibold text-slate-900">Randevu süreci nasıl ilerler?</h3>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {steps.map((item) => (
              <div key={item.no} className="rounded-[30px] border border-black/5 bg-[#fafaf7] p-7 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700">{item.no}</p>
                <h4 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="randevu" className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="rounded-[34px] bg-slate-900 p-8 text-white lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Randevu Al</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight">
              Hemen talebinizi oluşturun, uygun görüşme planınızı birlikte netleştirelim.
            </h3>
            <p className="mt-5 leading-8 text-slate-300">
              Online veya yüz yüze görüşme seçeneğiyle, size uygun tarih ve saat için hızlıca talep oluşturabilirsiniz. Talebiniz admin paneline düşer ve onay sonrası randevunuz planlanır.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                { Icon: CalendarCheck2, label: "Online ve yüz yüze görüşme seçeneği" },
                { Icon: ShieldCheck, label: "Admin onaylı ve kontrollü randevu süreci" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-4">
                  <item.Icon className="mt-0.5 h-5 w-5 text-emerald-300" />
                  <span className="text-sm text-slate-200">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-black/5 bg-white p-3 shadow-2xl shadow-slate-200/70">
            <AppointmentRequestForm />
          </div>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { Icon: Phone, title: "Telefon", text: "+90 5xx xxx xx xx" },
            { Icon: Mail, title: "E-posta", text: "randevu@ornek.com" },
            { Icon: MapPin, title: "Adres", text: "Bursa / Türkiye" },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm">
              <item.Icon className="h-6 w-6 text-emerald-700" />
              <h4 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dyt. Ayşe Bozkaya Yazgan — Tüm hakları saklıdır.</p>
          <a href="#randevu" className="font-medium text-emerald-700 transition hover:text-emerald-800">
            Randevu Al
          </a>
        </div>
      </footer>
    </main>
  );
}

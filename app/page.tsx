"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Apple,
  Activity,
  Salad,
  Star,
  ShieldCheck,
} from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80",
    badge: "Kişiye özel danışmanlık",
    title: "Sağlıklı yaşam hedefleriniz için profesyonel beslenme desteği",
    text: "Kilo kontrolü, sporcu beslenmesi ve sürdürülebilir yaşam alışkanlıkları için size özel planlanmış danışmanlık süreci.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=80",
    badge: "Online ve yüz yüze görüşme",
    title: "Size uygun sistem, günlük yaşamınıza uyumlu planlama",
    text: "Gerçek hayatta uygulanabilir, sürdürülebilir ve sizi yormayan bir beslenme yaklaşımı oluşturun.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1600&q=80",
    badge: "Takip odaklı süreç",
    title: "Sadece liste değil, düzenli takip ve gerçek yönlendirme",
    text: "İlk görüşmeden sonraki süreçte de hedeflerinize göre yeniden planlanan profesyonel takip desteği alın.",
  },
];

const services = [
  {
    icon: Apple,
    title: "Kilo Yönetimi",
    text: "Kilo alma ve verme sürecinde sürdürülebilir beslenme planlaması.",
  },
  {
    icon: Activity,
    title: "Sporcu Beslenmesi",
    text: "Performans, toparlanma ve enerji dengesi odaklı danışmanlık.",
  },
  {
    icon: Salad,
    title: "Sağlıklı Yaşam",
    text: "Günlük hayata uyumlu, uygulanabilir ve sade beslenme düzeni.",
  },
];

const testimonials = [
  {
    name: "Danışan Yorumu",
    text: "Süreç çok daha düzenli ve sürdürülebilir hale geldi. Yasak odaklı değil, gerçekten uygulanabilir bir planla ilerledik.",
  },
  {
    name: "Danışan Yorumu",
    text: "Online görüşme çok rahattı. Takip sürecinde motive kalmamı sağlayan en önemli şey düzenli geri bildirim oldu.",
  },
  {
    name: "Danışan Yorumu",
    text: "Sadece liste verilmedi; yaşam düzenime göre gerçekçi bir sistem kuruldu. Bu yüzden devam ettirebildim.",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white shadow-md">
              AY
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
                Dyt. Ayşe Bozkaya Yazgan
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Beslenme ve yaşam danışmanlığı
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 lg:flex">
            <a href="#hakkimda" className="transition hover:text-slate-900">
              Hakkımda
            </a>
            <a href="#hizmetler" className="transition hover:text-slate-900">
              Hizmetler
            </a>
            <a href="#yorumlar" className="transition hover:text-slate-900">
              Yorumlar
            </a>
            <a href="#iletisim" className="transition hover:text-slate-900">
              İletişim
            </a>
          </nav>

          <Link
            href="/randevu"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Randevu Al
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 lg:pb-20 lg:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-emerald-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Kişiye özel, modern ve sürdürülebilir danışmanlık
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              Sağlıklı yaşam hedefleriniz için profesyonel beslenme desteği
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Kilo kontrolü, sporcu beslenmesi ve sürdürülebilir yaşam
              alışkanlıkları için size özel planlanmış danışmanlık süreci.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/randevu"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-4 font-medium text-white transition hover:bg-emerald-700"
              >
                Hemen Randevu Al <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Hizmetleri İncele
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: "Online", label: "Görüşme seçeneği" },
                { value: "Yüz yüze", label: "Bireysel destek" },
                { value: "Takip", label: "Düzenli süreç" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-lg font-semibold text-slate-900">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white shadow-2xl shadow-slate-200/70">
            <div className="relative h-[520px] w-full">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

              <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-5">
                <div className="rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 backdrop-blur">
                  {slides[currentSlide].badge}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="rounded-full bg-white/85 p-3 text-slate-800 backdrop-blur transition hover:bg-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="rounded-full bg-white/85 p-3 text-slate-800 backdrop-blur transition hover:bg-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <h2 className="max-w-xl text-3xl font-semibold leading-tight">
                  {slides[currentSlide].title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">
                  {slides[currentSlide].text}
                </p>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="hakkimda" className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] bg-[#e8f5ee] p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Hakkımda
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-slate-900">
              Bilimsel, sakin ve gerçek hayatla uyumlu bir beslenme yaklaşımı
            </h3>
            <p className="mt-5 leading-8 text-slate-600">
              Danışanların yaşam düzenini, hedeflerini ve sürdürülebilirlik
              ihtiyacını merkeze alarak ilerliyorum. Amaç; kısa süreli
              motivasyon değil, uzun vadeli ve uygulanabilir alışkanlıklar
              oluşturmaktır.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Kişiye özel yaklaşım",
                "Düzenli takip ve değerlendirme",
                "Online ve yüz yüze esneklik",
                "Gerçekçi ve uygulanabilir sistem",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
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
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h4 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hizmetler" className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Hizmetler
          </p>
          <h3 className="text-3xl font-semibold text-slate-900">
            İhtiyacınıza uygun danışmanlık alanları
          </h3>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="group rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-5 text-xl font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="yorumlar" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Danışan Yorumları
            </p>
            <h3 className="text-3xl font-semibold text-slate-900">
              Sürece dair geri bildirimler
            </h3>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-[30px] border border-slate-200 bg-[#fafaf7] p-7 shadow-sm"
              >
                <div className="flex gap-1 text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="mt-5 leading-8 text-slate-600">{item.text}</p>
                <p className="mt-5 font-semibold text-slate-900">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="rounded-[36px] bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 text-white shadow-xl lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100">
                Randevu
              </p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight">
                Uygun tarih ve saat için hemen randevu talebi oluşturun
              </h3>
              <p className="mt-4 max-w-2xl leading-8 text-emerald-50">
                Online veya yüz yüze görüşme için randevu sayfasına geçin.
                Talebiniz admin paneline düşer ve onay sonrası randevunuz
                planlanır.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-emerald-50">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <CalendarDays className="h-4 w-4" />
                  Online / Yüz yüze
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <ShieldCheck className="h-4 w-4" />
                  Admin onaylı süreç
                </span>
              </div>
            </div>

            <div>
              <Link
                href="/randevu"
                className="inline-flex items-center rounded-full bg-white px-6 py-4 font-medium text-emerald-700 transition hover:bg-emerald-50"
              >
                Randevu Sayfasına Git <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
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
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <item.Icon className="h-6 w-6 text-emerald-700" />
              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dyt. Ayşe Bozkaya Yazgan — Tüm hakları saklıdır.</p>
          <Link
            href="/randevu"
            className="font-medium text-emerald-700 transition hover:text-emerald-800"
          >
            Randevu Al
          </Link>
        </div>
      </footer>
    </main>
  );
}
import Link from "next/link";
import { ArrowLeft, CalendarCheck2, ShieldCheck } from "lucide-react";
import AppointmentRequestForm from "@/components/public/AppointmentRequestForm";

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-900">
      <section className="container-site py-10 lg:py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Ana Sayfaya Dön
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="rounded-[34px] bg-slate-900 p-8 text-white lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Randevu Al
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight">
              Uygun tarih ve saat için randevu talebinizi oluşturun
            </h1>
            <p className="mt-5 leading-8 text-slate-300">
              Online veya yüz yüze görüşme seçeneğiyle size uygun zamanı seçin. Talebiniz admin paneline düşer ve onay sonrası randevunuz planlanır.
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

          <div className="form-shell p-3">
            <AppointmentRequestForm />
          </div>
        </div>
      </section>
    </main>
  );
}
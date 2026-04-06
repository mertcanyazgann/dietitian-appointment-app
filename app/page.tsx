import AppointmentRequestForm from "@/components/public/AppointmentRequestForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="font-semibold text-orange-600">Dyt. Ayşe Bozkaya Yazgan</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Beslenme danışmanlığı için online randevu talebi oluşturun
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Danışanlar tarih ve saat seçerek talep bırakabilir. Admin panelinden talepler değerlendirilir,
            onaylanır ve randevular planlanır.
          </p>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">İletişim</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p><strong>Telefon:</strong> +90 5xx xxx xx xx</p>
              <p><strong>E-posta:</strong> randevu@ornek.com</p>
              <p><strong>Adres:</strong> Bursa / Türkiye</p>
            </div>
          </div>
        </div>

        <AppointmentRequestForm />
      </section>
    </main>
  );
}

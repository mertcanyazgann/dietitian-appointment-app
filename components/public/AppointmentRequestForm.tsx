"use client";

import { useState } from "react";

type FormState = {
  full_name: string;
  phone: string;
  email: string;
  meeting_type: "online" | "in_person";
  requested_date: string;
  requested_time: string;
  note: string;
};

const initialState: FormState = {
  full_name: "",
  phone: "",
  email: "",
  meeting_type: "in_person",
  requested_date: "",
  requested_time: "",
  note: "",
};

export default function AppointmentRequestForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/appointment-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Bir hata oluştu.");
        setLoading(false);
        return;
      }

      setMessage("Randevu talebiniz başarıyla alındı.");
      setForm(initialState);
    } catch {
      setError("Sunucuya bağlanırken hata oluştu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <h2 className="text-2xl font-semibold">Randevu Talep Formu</h2>
      <p className="mt-2 text-sm text-slate-500">Formu doldurun, uygunluk sonrası sizinle iletişime geçilsin.</p>

      <div className="mt-6 grid gap-4">
        <input
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          placeholder="Ad Soyad"
          value={form.full_name}
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
          required
        />

        <input
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          placeholder="Telefon"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />

        <input
          type="email"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          placeholder="E-posta"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <select
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          value={form.meeting_type}
          onChange={(e) => setForm({ ...form, meeting_type: e.target.value as "online" | "in_person" })}
        >
          <option value="in_person">Yüz yüze</option>
          <option value="online">Online</option>
        </select>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="date"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
            value={form.requested_date}
            onChange={(e) => setForm({ ...form, requested_date: e.target.value })}
            required
          />
          <input
            type="time"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
            value={form.requested_time}
            onChange={(e) => setForm({ ...form, requested_time: e.target.value })}
            required
          />
        </div>

        <textarea
          className="min-h-[120px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          placeholder="Not"
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Gönderiliyor..." : "Talep Oluştur"}
        </button>

        {message ? <p className="text-sm text-green-600">{message}</p> : null}
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </div>
    </form>
  );
}

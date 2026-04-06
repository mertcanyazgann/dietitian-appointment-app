"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormState = {
  full_name: string;
  phone: string;
  email: string;
  meeting_type: "online" | "in_person";
  appointment_date: string;
  appointment_time: string;
  note: string;
};

const initialState: FormState = {
  full_name: "",
  phone: "",
  email: "",
  meeting_type: "in_person",
  appointment_date: "",
  appointment_time: "",
  note: "",
};

export default function ManualAppointmentForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/appointments", {
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

      setMessage("Randevu başarıyla eklendi.");
      setForm(initialState);
      router.refresh();
    } catch {
      setError("Sunucuya bağlanırken hata oluştu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">Manuel Randevu Ekle</h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <input
          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
          placeholder="Ad Soyad"
          value={form.full_name}
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
          required
        />

        <input
          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
          placeholder="Telefon"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
          type="email"
          placeholder="E-posta"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <select
          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
          value={form.meeting_type}
          onChange={(e) => setForm({ ...form, meeting_type: e.target.value as "online" | "in_person" })}
        >
          <option value="in_person">Yüz yüze</option>
          <option value="online">Online</option>
        </select>

        <input
          type="date"
          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
          value={form.appointment_date}
          onChange={(e) => setForm({ ...form, appointment_date: e.target.value })}
          required
        />

        <input
          type="time"
          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
          value={form.appointment_time}
          onChange={(e) => setForm({ ...form, appointment_time: e.target.value })}
          required
        />

        <textarea
          className="min-h-[120px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500 md:col-span-2"
          placeholder="Not"
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
        />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60"
        >
          {loading ? "Kaydediliyor..." : "Randevu Ekle"}
        </button>

        {message ? <p className="text-sm text-green-600">{message}</p> : null}
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </div>
    </form>
  );
}

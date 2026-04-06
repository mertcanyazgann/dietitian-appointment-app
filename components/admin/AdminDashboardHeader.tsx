"use client";

import { useRouter } from "next/navigation";

export default function AdminDashboardHeader() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">Admin Paneli</h1>
        <p className="mt-2 text-slate-600">Randevu taleplerini yönetin ve planlanan randevuları görüntüleyin.</p>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
      >
        Çıkış Yap
      </button>
    </div>
  );
}

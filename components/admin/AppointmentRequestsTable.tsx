"use client";

import { useRouter } from "next/navigation";
import { AppointmentRequest } from "@/types";
import { formatMeetingType, formatRequestStatus } from "@/lib/utils";

export default function AppointmentRequestsTable({ requests }: { requests: AppointmentRequest[] }) {
  const router = useRouter();

  async function approveRequest(id: number) {
    await fetch("/api/admin/approve-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestId: id }),
    });

    router.refresh();
  }

  async function cancelRequest(id: number) {
    await fetch("/api/admin/cancel-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestId: id }),
    });

    router.refresh();
  }

  return (
    <section className="overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold">Randevu Talepleri</h2>

      <table className="w-full min-w-[900px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-slate-500">
            <th className="py-3">Ad Soyad</th>
            <th>Telefon</th>
            <th>E-posta</th>
            <th>Tarih</th>
            <th>Saat</th>
            <th>Tür</th>
            <th>Durum</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((item) => (
            <tr key={item.id} className="border-b border-slate-100 align-top">
              <td className="py-4 font-medium">{item.full_name}</td>
              <td>{item.phone}</td>
              <td>{item.email || "-"}</td>
              <td>{item.requested_date}</td>
              <td>{item.requested_time}</td>
              <td>{formatMeetingType(item.meeting_type)}</td>
              <td>{formatRequestStatus(item.status)}</td>
              <td>
                <div className="flex gap-2">
                  <button
                    onClick={() => approveRequest(item.id)}
                    className="rounded-xl bg-green-600 px-3 py-2 text-white hover:bg-green-700 disabled:opacity-50"
                    disabled={item.status !== "pending"}
                  >
                    Onayla
                  </button>
                  <button
                    onClick={() => cancelRequest(item.id)}
                    className="rounded-xl bg-red-600 px-3 py-2 text-white hover:bg-red-700 disabled:opacity-50"
                    disabled={item.status !== "pending"}
                  >
                    İptal
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {requests.length === 0 ? (
            <tr>
              <td colSpan={8} className="py-8 text-center text-slate-500">
                Henüz randevu talebi bulunmuyor.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </section>
  );
}

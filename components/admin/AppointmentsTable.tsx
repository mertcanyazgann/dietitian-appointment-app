import { Appointment } from "@/types";
import { formatMeetingType } from "@/lib/utils";

export default function AppointmentsTable({ appointments }: { appointments: Appointment[] }) {
  return (
    <section className="overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold">Planlanan Randevular</h2>

      <table className="w-full min-w-[900px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-slate-500">
            <th className="py-3">Ad Soyad</th>
            <th>Telefon</th>
            <th>E-posta</th>
            <th>Tarih</th>
            <th>Saat</th>
            <th>Tür</th>
            <th>Not</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((item) => (
            <tr key={item.id} className="border-b border-slate-100 align-top">
              <td className="py-4 font-medium">{item.full_name}</td>
              <td>{item.phone || "-"}</td>
              <td>{item.email || "-"}</td>
              <td>{item.appointment_date}</td>
              <td>{item.appointment_time}</td>
              <td>{formatMeetingType(item.meeting_type)}</td>
              <td>{item.note || "-"}</td>
            </tr>
          ))}

          {appointments.length === 0 ? (
            <tr>
              <td colSpan={7} className="py-8 text-center text-slate-500">
                Henüz planlanan randevu bulunmuyor.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </section>
  );
}

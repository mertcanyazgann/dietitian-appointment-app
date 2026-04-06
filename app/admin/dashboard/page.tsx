import { requireAdmin } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import AdminDashboardHeader from "@/components/admin/AdminDashboardHeader";
import AppointmentRequestsTable from "@/components/admin/AppointmentRequestsTable";
import AppointmentsTable from "@/components/admin/AppointmentsTable";
import ManualAppointmentForm from "@/components/admin/ManualAppointmentForm";

export default async function AdminDashboardPage() {
  await requireAdmin();

  const supabase = await createClient();

  const { data: requests } = await supabase
    .from("appointment_requests")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: appointments } = await supabase
    .from("appointments")
    .select("*")
    .order("appointment_date", { ascending: true })
    .order("appointment_time", { ascending: true });

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <AdminDashboardHeader />
        <ManualAppointmentForm />
        <AppointmentRequestsTable requests={requests || []} />
        <AppointmentsTable appointments={appointments || []} />
      </div>
    </main>
  );
}

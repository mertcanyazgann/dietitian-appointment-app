import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { appointmentRequestSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = appointmentRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Geçersiz veri." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const { data: existingSlot, error: slotError } = await supabaseAdmin
      .from("appointments")
      .select("id")
      .eq("appointment_date", data.requested_date)
      .eq("appointment_time", data.requested_time)
      .maybeSingle();

    if (slotError) {
      return NextResponse.json({ error: slotError.message }, { status: 500 });
    }

    if (existingSlot) {
      return NextResponse.json(
        { error: "Seçilen tarih ve saatte başka bir randevu bulunmaktadır." },
        { status: 409 }
      );
    }

    const { error } = await supabaseAdmin.from("appointment_requests").insert({
      full_name: data.full_name,
      phone: data.phone,
      email: data.email || null,
      meeting_type: data.meeting_type,
      requested_date: data.requested_date,
      requested_time: data.requested_time,
      note: data.note || null,
      status: "pending",
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası oluştu." }, { status: 500 });
  }
}

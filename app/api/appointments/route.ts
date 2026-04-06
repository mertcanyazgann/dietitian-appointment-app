import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { manualAppointmentSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Yetkisiz işlem." }, { status: 401 });
    }

    const body = await request.json();
    const parsed = manualAppointmentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Geçersiz veri." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const { data: existingSlot, error: slotError } = await supabase
      .from("appointments")
      .select("id")
      .eq("appointment_date", data.appointment_date)
      .eq("appointment_time", data.appointment_time)
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

    const { error } = await supabase.from("appointments").insert({
      full_name: data.full_name,
      phone: data.phone || null,
      email: data.email || null,
      meeting_type: data.meeting_type,
      appointment_date: data.appointment_date,
      appointment_time: data.appointment_time,
      note: data.note || null,
      created_by: user.id,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası oluştu." }, { status: 500 });
  }
}

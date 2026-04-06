import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Yetkisiz işlem." }, { status: 401 });
    }

    const { requestId } = await request.json();

    if (!requestId) {
      return NextResponse.json({ error: "requestId zorunludur." }, { status: 400 });
    }

    const { data: requestData, error: requestError } = await supabase
      .from("appointment_requests")
      .select("*")
      .eq("id", requestId)
      .single();

    if (requestError || !requestData) {
      return NextResponse.json({ error: "Talep bulunamadı." }, { status: 404 });
    }

    if (requestData.status !== "pending") {
      return NextResponse.json({ error: "Sadece bekleyen talepler onaylanabilir." }, { status: 400 });
    }

    const { data: existingSlot, error: slotError } = await supabase
      .from("appointments")
      .select("id")
      .eq("appointment_date", requestData.requested_date)
      .eq("appointment_time", requestData.requested_time)
      .maybeSingle();

    if (slotError) {
      return NextResponse.json({ error: slotError.message }, { status: 500 });
    }

    if (existingSlot) {
      return NextResponse.json(
        { error: "Bu tarih ve saatte zaten planlanmış randevu var." },
        { status: 409 }
      );
    }

    const { error: insertError } = await supabase.from("appointments").insert({
      full_name: requestData.full_name,
      phone: requestData.phone,
      email: requestData.email,
      meeting_type: requestData.meeting_type,
      appointment_date: requestData.requested_date,
      appointment_time: requestData.requested_time,
      note: requestData.note,
      source_request_id: requestData.id,
      created_by: user.id,
    });

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    const { error: updateError } = await supabase
      .from("appointment_requests")
      .update({ status: "approved" })
      .eq("id", requestId);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası oluştu." }, { status: 500 });
  }
}

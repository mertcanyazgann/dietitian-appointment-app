import { z } from "zod";

export const appointmentRequestSchema = z.object({
  full_name: z.string().min(2, "Ad soyad zorunludur."),
  phone: z.string().min(10, "Telefon zorunludur."),
  email: z.string().email("Geçerli bir e-posta girin.").optional().or(z.literal("")),
  meeting_type: z.enum(["online", "in_person"]),
  requested_date: z.string().min(1, "Tarih zorunludur."),
  requested_time: z.string().min(1, "Saat zorunludur."),
  note: z.string().optional(),
});

export const manualAppointmentSchema = z.object({
  full_name: z.string().min(2, "Ad soyad zorunludur."),
  phone: z.string().optional(),
  email: z.string().email("Geçerli bir e-posta girin.").optional().or(z.literal("")),
  meeting_type: z.enum(["online", "in_person"]),
  appointment_date: z.string().min(1, "Tarih zorunludur."),
  appointment_time: z.string().min(1, "Saat zorunludur."),
  note: z.string().optional(),
});

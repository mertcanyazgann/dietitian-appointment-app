export type MeetingType = "online" | "in_person";
export type RequestStatus = "pending" | "approved" | "cancelled";

export interface AppointmentRequest {
  id: number;
  full_name: string;
  phone: string;
  email: string | null;
  meeting_type: MeetingType;
  requested_date: string;
  requested_time: string;
  note: string | null;
  status: RequestStatus;
  created_at: string;
}

export interface Appointment {
  id: number;
  full_name: string;
  phone: string | null;
  email: string | null;
  meeting_type: MeetingType;
  appointment_date: string;
  appointment_time: string;
  note: string | null;
  source_request_id: number | null;
  created_by: string | null;
  created_at: string;
}

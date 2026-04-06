import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMeetingType(value: "online" | "in_person") {
  return value === "online" ? "Online" : "Yüz yüze";
}

export function formatRequestStatus(value: "pending" | "approved" | "cancelled") {
  if (value === "pending") return "Beklemede";
  if (value === "approved") return "Onaylandı";
  return "İptal";
}

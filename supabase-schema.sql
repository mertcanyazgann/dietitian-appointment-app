create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

create table if not exists public.appointment_requests (
  id bigint generated always as identity primary key,
  full_name text not null,
  phone text not null,
  email text,
  meeting_type text not null check (meeting_type in ('online', 'in_person')),
  requested_date date not null,
  requested_time time not null,
  note text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.appointments (
  id bigint generated always as identity primary key,
  full_name text not null,
  phone text,
  email text,
  meeting_type text not null check (meeting_type in ('online', 'in_person')),
  appointment_date date not null,
  appointment_time time not null,
  note text,
  source_request_id bigint references public.appointment_requests(id) on delete set null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create unique index if not exists appointments_unique_slot_idx
on public.appointments (appointment_date, appointment_time);

alter table public.profiles enable row level security;
alter table public.appointment_requests enable row level security;
alter table public.appointments enable row level security;

drop policy if exists "read own profile" on public.profiles;
create policy "read own profile"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

drop policy if exists "insert own profile" on public.profiles;
create policy "insert own profile"
on public.profiles
for insert
to authenticated
with check (auth.uid() = id);

drop policy if exists "update own profile" on public.profiles;
create policy "update own profile"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "public insert appointment requests" on public.appointment_requests;
create policy "public insert appointment requests"
on public.appointment_requests
for insert
to anon, authenticated
with check (true);

drop policy if exists "authenticated read appointment requests" on public.appointment_requests;
create policy "authenticated read appointment requests"
on public.appointment_requests
for select
to authenticated
using (true);

drop policy if exists "authenticated update appointment requests" on public.appointment_requests;
create policy "authenticated update appointment requests"
on public.appointment_requests
for update
to authenticated
using (true)
with check (true);

drop policy if exists "authenticated read appointments" on public.appointments;
create policy "authenticated read appointments"
on public.appointments
for select
to authenticated
using (true);

drop policy if exists "authenticated insert appointments" on public.appointments;
create policy "authenticated insert appointments"
on public.appointments
for insert
to authenticated
with check (true);

drop policy if exists "authenticated delete appointments" on public.appointments;
create policy "authenticated delete appointments"
on public.appointments
for delete
to authenticated
using (true);

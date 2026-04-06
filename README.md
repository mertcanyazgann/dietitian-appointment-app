# Diyetisyen Randevu Sistemi

Next.js + Supabase ile hazırlanmış yayınlanabilir randevu talep ve admin yönetim sistemi.

## Kurulum

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

## Gerekenler

- Supabase projesi
- `.env.local` dosyasına doğru değerler
- SQL scriptinin Supabase SQL Editor'da çalıştırılması
- Authentication > Users bölümünden admin kullanıcı oluşturulması

## Yayınlama

- GitHub'a yükle
- Vercel'e bağla
- Environment Variables olarak:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

## Supabase SQL

`supabase-schema.sql` dosyasını SQL Editor içinde çalıştır.

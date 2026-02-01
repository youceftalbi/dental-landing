// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

// 1. تحديد مكان بلجن next-intl
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 2. 🔥 إضافة إعدادات الصور هنا لحل مشكلة Cloudinary 🔥
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      
      // يمكنك إضافة أي دومينات صور خارجية أخرى هنا
    ],
  },
  
  // 3. إضافة إعدادات Next.js الأخرى هنا إذا لزم الأمر
};

// 4. تصدير الإعدادات النهائية بعد تغليفها ببلجن next-intl
export default withNextIntl(nextConfig);
// app/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // قائمة جميع اللغات المدعومة
  locales: ['fr', 'ar'],

  // تحديد اللغة الافتراضية
  defaultLocale: 'ar',

  // تفعيل خاصية الـ Prefix: أي يجب أن يكون مسار اللغة موجوداً في الـ URL
  localePrefix: 'always'
});

export const config = {
  // تطبيق Middleware على كل المسارات باستثناء مسارات الـ API والـ Admin والملفات العامة
  matcher: [
    '/', // المسار الجذري
    '/(ar|fr)/:path*', // تطبيق على كل المسارات اللغوية
    '/((?!_next|_vercel|.*\\..*|api|admin).*)' // استثناء مسار admin و api وغيره
  ]
};
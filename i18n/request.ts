// i18n/request.ts
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { AbstractIntlMessages } from 'next-intl'; 
 
const locales = ['ar', 'fr'];
 
// 💡 NEW: استخدام params مباشرة بدلاً من فكها
export default getRequestConfig(async (params) => {
  // ✅ NEW: استخراج الـ locale من الـ params (يحتوي على requestLocale و locale)
  const currentLocale = params.locale as string; 
  if (!locales.includes(currentLocale)) notFound();
 
  // تعديل المسار
  const messages = (await import(`../messages/${currentLocale}.json`)).default as AbstractIntlMessages;
 
  return {
    locale: currentLocale, 
    messages,
    timeZone: 'Asia/Riyadh' 
  };
});
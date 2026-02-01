import '../globals.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import getRequestConfig from '../../i18n/request'; 
import ClientProvider from './ClientProvider'; 
import { ReactNode } from 'react';
import { AbstractIntlMessages } from 'next-intl'; 

export async function generateStaticParams() {
  return ['fr', 'ar'].map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "dental-solution",
  description:" An e-commerce application built with Next.js 13, TypeScript, Tailwind CSS, and more.",
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>; // ✅ تغيير هنا
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // ✅ إضافة await هنا
  const { locale } = await params; 
  
  const locales = ['fr', 'ar'];
  if (!locales.includes(locale)) {
    notFound();
  }

  const config = await getRequestConfig({ 
    locale, 
    requestLocale: Promise.resolve(locale) 
  }); 
  
  const messages = config.messages as AbstractIntlMessages; 
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        <ClientProvider messages={messages}>
           <main className="min-h-screen pt-0"> 
             {children}
          </main>
        </ClientProvider>
      </body>
    </html>
  );
}
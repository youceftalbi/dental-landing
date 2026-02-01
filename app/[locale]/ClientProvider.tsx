// app/[locale]/ClientProvider.tsx
'use client';

import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';


interface ClientProviderProps {
    children: ReactNode;
    messages: AbstractIntlMessages; // يجب أن تكون موجودة هنا
}

export default function ClientProvider({ children, messages }: ClientProviderProps) {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
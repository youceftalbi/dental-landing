'use client';
import { useTranslations, useLocale } from 'next-intl';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const t = useTranslations('whatsapp');
  const locale = useLocale();

  // رقم الواتساب بدون + أو أصفار
  const phoneNumber = "213783122172";

  const handleClick = () => {
    const message = encodeURIComponent(t('message'));
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 ${
        locale === 'ar' ? 'left-6' : 'right-6'
      } z-50 flex flex-col items-end gap-2`}
    >
      {/* رسالة تشجيعية فوق الزر */}
      <div className="bg-white text-gray-800 text-xs py-1 px-3 rounded-full shadow-lg border border-green-100 animate-bounce">
        {locale === 'ar'
          ? 'احجز استشارة مجانية الآن'
          : 'Réservez une consultation gratuite'}
      </div>

      <button
        onClick={handleClick}
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-3 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
          {t('button')}
        </span>
        <FaWhatsapp size={32} />
      </button>
    </div>
  );
}

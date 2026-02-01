'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { Check, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function LandingPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappNumber = '+213783122172';
  const whatsappMessage = t('cta.title');
  const isRTL = locale === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 rounded-full px-6 py-2 mb-6">
            <p className="text-sm font-semibold">{t('hero.badge')}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t.rich('hero.title', {
              invisible: (chunks) => <span className="text-yellow-300">{chunks}</span>
            })}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95">
            {t.rich('hero.subtitle', {
              bookings: (chunks) => <span className="font-bold text-yellow-300">{chunks}</span>
            })}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
            <p className="text-lg">
              {t.rich('hero.painPoint', {
                imagine: (chunks) => <span className="font-bold text-yellow-300">{chunks}</span>
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Problems Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('problems.title')}
          </h2>
          <p className="text-xl text-gray-600">{t('problems.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{t(`problems.list.${i}.icon`)}</div>
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">
                    {t(`problems.list.${i}.title`)}
                  </h3>
                  <p className="text-gray-700">{t(`problems.list.${i}.desc`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-8 text-center">
          <AlertCircle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {t('problems.rootCause.title')}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.rich('problems.rootCause.desc', {
              invisible: (chunks) => <span className="font-bold text-yellow-800">{chunks}</span>
            })}
          </p>
        </div>
      </div>

      {/* Knowledge Gap Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {t('knowledgeGap.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-red-600 mb-1">
                    {t(`knowledgeGap.myths.${i}.myth`)}
                  </p>
                  <p className="text-gray-700 font-medium mb-3">
                    {t(`knowledgeGap.myths.${i}.mythText`)}
                  </p>
                  <div className="border-t-2 border-blue-300 my-3"></div>
                  <p className="text-sm font-semibold text-green-600 mb-1">
                    {t(`knowledgeGap.myths.${i}.reality`)}
                  </p>
                  <p className="text-gray-700 font-medium mb-3">
                    {t(`knowledgeGap.myths.${i}.realityText`)}
                  </p>
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-3 text-center">
                  <p className="text-sm font-bold">{t(`knowledgeGap.myths.${i}.stat`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expert Diagnosis Section - NEW */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('diagnosis.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-4">{t('diagnosis.subtitle')}</p>
            <p className="text-lg text-gray-700 bg-white/60 rounded-lg p-4 inline-block">
              {t('diagnosis.intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {t(`diagnosis.items.${i}.number`)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {t(`diagnosis.items.${i}.title`)}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-red-700">
                        <span className="font-semibold">❌ المشكلة:</span> {t(`diagnosis.items.${i}.problem`)}
                      </p>
                      <p className="text-orange-700">
                        <span className="font-semibold">📉 التأثير:</span> {t(`diagnosis.items.${i}.impact`)}
                      </p>
                      <p className="text-green-700">
                        <span className="font-semibold">✅ الحل:</span> {t(`diagnosis.items.${i}.solution`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expert Insight */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('diagnosis.expertInsight.title')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <Check className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <p className="text-blue-50">{t(`diagnosis.expertInsight.points.${i}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('diagnosis.conclusion.title')}</h3>
            <p className="text-xl font-semibold text-yellow-300 mb-4">{t('diagnosis.conclusion.mainPoint')}</p>
            <p className="text-gray-200 leading-relaxed mb-6">{t('diagnosis.conclusion.desc')}</p>
            <div className="bg-red-600 rounded-lg p-4 mb-6">
              <p className="font-bold text-lg">{t('diagnosis.conclusion.warning')}</p>
            </div>
            <p className="text-xl font-bold text-yellow-300">{t('diagnosis.conclusion.cta')}</p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.rich('solution.title', {
              behavior: (chunks) => <span className="text-blue-600">{chunks}</span>
            })}
          </h2>
          <p className="text-xl text-gray-600">{t('solution.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
              <Check className="w-8 h-8" />
              {t('solution.whatWeDoTitle')}
            </h3>
            <ul className="space-y-4">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{t(`solution.benefits.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">{t('solution.results.title')}</h3>
              <p className="text-blue-100 mb-6">{t('solution.results.subtitle')}</p>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-bold text-yellow-300 text-lg">
                    {t('solution.results.case1.title')}
                  </p>
                  <p className="text-sm mb-2">{t('solution.results.case1.subtitle')}</p>
                  <ul className="text-sm space-y-1">
                    {[0, 1, 2, 3].map((i) => (
                      <li key={i}>{t(`solution.results.case1.stats.${i}`)}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-bold text-yellow-300 text-lg">
                    {t('solution.results.case2.title')}
                  </p>
                  <p className="text-sm">{t('solution.results.case2.desc')}</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-bold text-yellow-300 text-lg">
                    {t('solution.results.case3.title')}
                  </p>
                  <p className="text-sm">{t('solution.results.case3.desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6">
              <h4 className="font-bold text-purple-800 mb-2 text-lg">
                {t('solution.techComparison.title')}
              </h4>
              <p className="text-purple-600 text-sm font-semibold mb-3">
                {t('solution.techComparison.subtitle')}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {t('solution.techComparison.desc')}
              </p>
              
              {/* Technical Comparison Table */}
              <div className="space-y-2 mb-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-lg p-3 text-xs">
                    <p className="font-bold text-purple-800 mb-1">
                      {t(`solution.techComparison.comparison.${i}.metric`)}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-red-600">
                        ❌ WP: {t(`solution.techComparison.comparison.${i}.wordpress`)}
                      </p>
                      <p className="text-green-600">
                        ✅ Next: {t(`solution.techComparison.comparison.${i}.nextjs`)}
                      </p>
                    </div>
                    <p className="text-blue-700 font-semibold mt-1">
                      → {t(`solution.techComparison.comparison.${i}.impact`)}
                    </p>
                  </div>
                ))}
              </div>
              
              <p className="text-purple-700 font-semibold text-sm whitespace-pre-line border-t-2 border-purple-200 pt-3">
                {t('solution.techComparison.pricing')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('howItWorks.title')}
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 h-full">
                  <div className="text-5xl font-bold text-white/30 mb-3">
                    {t(`howItWorks.steps.${i}.num`)}
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {t(`howItWorks.steps.${i}.title`)}
                  </h3>
                  <p className="text-blue-100 text-sm">
                    {t(`howItWorks.steps.${i}.desc`)}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-cyan-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t('pricing.title')}
        </h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
          <div className="border-2 border-gray-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('pricing.package.title')}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-blue-600">
                {t('pricing.package.price')}
              </span>
              <span className="text-gray-500 line-through mr-2">
                {t('pricing.package.oldPrice')}
              </span>
            </div>
            <ul className="space-y-3 mb-6">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    {t(`pricing.package.features.${i}`)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600">{t('pricing.package.note')}</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 rounded-xl p-8 text-center">
          <p className="text-2xl font-bold text-gray-800 mb-3">
            {t('pricing.limitedOffer.title')}
          </p>
          <p className="text-lg text-gray-700">
            {t.rich('pricing.limitedOffer.desc', {
              cta: (chunks) => <span className="font-bold text-orange-600">{chunks}</span>
            })}
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {t('faq.title')}
          </h2>

          <div className="space-y-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className={`w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <span className="font-bold text-gray-800 text-lg">
                    {t(`faq.questions.${i}.q`)}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {t(`faq.questions.${i}.a`)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-blue-100">{t('cta.subtitle')}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {t('cta.intro')}
            </p>
            
            <div className={`space-y-3 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{t(`cta.benefits.${i}`)}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {t('cta.buttonText')}
              </span>
            </a>

            <p className="text-center text-gray-600 text-sm mt-6">
              {t('cta.note')}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">{t('footer.company')}</p>
          <p className="text-sm text-gray-500">{t('footer.tagline')}</p>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
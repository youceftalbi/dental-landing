
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // تأكد من أن الـ paths هذه صحيحة وتغطي جميع مكوناتك
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // الألوان الأساسية
        primary: {
          DEFAULT: '#0406c3', // اللون الأساسي (Navbar Background, Main Buttons)
          Hover: '#4d4fe0',
          Bg: '#e0e1fa',
          Border: '#6b6eea',
          50: '#e0e1fa',
          100: '#b3b5f1',
          200: '#8083e7',
          300: '#4d4fe0',
          400: '#2628d6',
          500: '#0406c3',
          600: '#0305aa',
          700: '#03048f',
          800: '#020374',
          900: '#010258',
        },
        // الألوان الثانوية (لأزرار الإجراءات الثانوية أو التنبيهات)
       secondary: {
  // أخضر يكمّل الأزرق
  DEFAULT: '#10b981', // أخضر
  hover: '#34d399',
  bg: '#d1fae5',
  border: '#10b981',
  50: '#ecfdf5',
  100: '#d1fae5',
  200: '#a7f3d0',
  300: '#6ee7b7',
  400: '#34d399',
  500: '#10b981',
  600: '#059669',
  700: '#047857',
  800: '#065f46',
  900: '#064e3b',
},
        background: '#f8fafc', // لون الخلفية الفاتح (Same as gray-50)
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
};
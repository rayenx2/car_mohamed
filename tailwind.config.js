/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'primary-blue': '#1E40AF', // rgb(30, 64, 175)
        'deep-blue': '#1E3A8A', // rgb(30, 58, 138)
        'light-blue': '#3B82F6', // rgb(59, 130, 246)

        // Secondary Palette
        'whatsapp-green': '#059669', // rgb(5, 150, 105)
        'success-green': '#10B981', // rgb(16, 185, 129)
        'gold-accent': '#D4AF37',   // For Arabic version highlights

        // Neutrals
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-600': '#4B5563',
        'gray-900': '#111827',

        // Legacy colors support (to prevent breaking existing components immediately)
        'footer-gray': '#666666',
        'car-page-red': 'hsl(0, 100%, 40%)',
        'car-green': 'hsl(120, 100%, 15%)',
        'car-red': 'hsl(0, 100%, 40%)',
        'car-yellow': 'hsl(39, 100%, 40%)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', '-apple-system', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
        // Legacy font support
        bebasFont: ['bebasFont', 'sans-serif'],
        segoe: ['SegoeUI', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        // Mobile-optimized sizes
        'display-mobile': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-mobile': ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-mobile': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-mobile': ['0.9375rem', { lineHeight: '1.6', fontWeight: '400' }],
        // Legacy
        '17': '1.0625rem',
      },
      spacing: {
        'xs': '0.5rem',   // 8px
        'sm': '1rem',     // 16px
        'md': '1.5rem',   // 24px
        'lg': '2rem',     // 32px
        'xl': '3rem',     // 48px
        '2xl': '4rem',    // 64px
        '3xl': '6rem',    // 96px

        // Safe area insets for notched devices
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',

        // Legacy spacing
        '2.5': '10px',
        '7.625': '30.5px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.05)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.1)',
        'whatsapp': '0 4px 6px rgba(0,0,0,0.1)',
        'whatsapp-hover': '0 10px 20px rgba(0,0,0,0.15)',
        'whatsapp-sticky': '0 8px 16px rgba(5,150,105,0.3)',

        // Legacy shadows
        'car-shadow-green': '109.5px -110px hsl(120, 100%, 15%)',
        'car-shadow-red': '109.5px -110px hsl(0, 100%, 40%)',
        'car-shadow-yellow': '0px 70px hsl(39, 100%, 40%)',
        'buy-form': '5px 5px 5px 5px hsl(0, 0%, 80%)',
        'car-page-shadow': '5px 5px 5px 5px hsl(0, 0%, 70%)',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.9', transform: 'scale(1.05)' },
        },
        'spinner-spin': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(5, 150, 105, 0.7)' },
          '50%': { boxShadow: '0 0 0 15px rgba(5, 150, 105, 0)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spinner-spin 5s linear infinite',
        'pulse-subtle': 'pulse-subtle 2s infinite',
      },
      // Legacy extensions
      inset: {
        '10p': '10%',
      },
      lineHeight: {
        'car-title': '21px',
      },
      maxHeight: {
        '80vh': '80vh',
      },
      width: {
        '80vw': '80vw',
        '90vw': '90vw',
      },
      screens: {
        'xs': '470px',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
      variants: {
        color: ['active']
      },
      zIndex: {
        '-1': '-1',
        '10': '10px',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B17C3F',
          50: '#F9F3ED',
          100: '#F3E7DB',
          200: '#E6CFB7',
          300: '#D9B793',
          400: '#CC9F6F',
          500: '#B17C3F',
          600: '#8E6332',
          700: '#6B4A26',
          800: '#483219',
          900: '#25190D',
        },
        secondary: {
          DEFAULT: '#1B4B66',
          light: '#2D6F95',
          dark: '#123447',
        },
        dark: {
          DEFAULT: '#2A2A2A',
          light: '#404040',
          lighter: '#606060',
        },
        gold: {
          lightest: '#FDF8F3',
          lighter: '#F9F3ED',
          light: '#F3E7DB',
          DEFAULT: '#B17C3F',
          dark: '#8E6332',
          darker: '#755229',
          darkest: '#5C4120'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Helvetica Neue', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'luxury-fade': 'luxuryFadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'luxury-float': 'luxuryFloat 3s ease-in-out infinite',
        'luxury-reveal': 'luxuryReveal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'luxury-sparkle': 'luxurySparkle 4s linear infinite',
        'luxury-pulse': 'luxuryPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'draw': 'draw 2s ease-out forwards',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '75%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        draw: {
          to: { strokeDashoffset: '0' }
        },
        borderGlow: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(177, 124, 63, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(177, 124, 63, 0.4)',
          },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.1)',
        'strong': '0 8px 35px rgba(0, 0, 0, 0.15)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        'luxury': '0 10px 30px rgba(177, 124, 63, 0.15)',
        'luxury-hover': '0 20px 40px rgba(177, 124, 63, 0.2)',
        'luxury-card': '20px 20px 60px rgba(0, 0, 0, 0.05), -20px -20px 60px rgba(255, 255, 255, 0.8)',
        'luxury-button': '0 20px 40px -10px rgba(177, 124, 63, 0.3), 0 0 0 2px rgba(177, 124, 63, 0.4)',
        'glass': '0 8px 32px rgba(177, 124, 63, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #B17C3F 0%, #96683A 100%)',
        'gradient-luxury-soft': 'linear-gradient(145deg, #ffffff, #f5f5f5)',
        'pattern-dots': 'radial-gradient(circle, #B17C3F 1px, transparent 1px)',
        'pattern-lines': 'repeating-linear-gradient(45deg, #B17C3F 0, #B17C3F 1px, transparent 0, transparent 50%)',
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'luxury-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      screens: {
        'xs': '475px',
      },
      backdropBlur: {
        'luxury': '30px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.luxury-gradient': {
          'background': 'linear-gradient(135deg, #B17C3F 0%, #96683A 100%)',
        },
        '.luxury-text': {
          'background': 'linear-gradient(135deg, #B17C3F 0%, #96683A 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.luxury-preserve-3d': {
          'transform-style': 'preserve-3d',
          'perspective': '1000px',
        },
        '.luxury-backdrop-blur': {
          'backdrop-filter': 'blur(30px) saturate(180%)',
        },
        '.pattern-dots': {
          'background-size': '20px 20px',
        },
        '.pattern-lines': {
          'background-size': '30px 30px',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
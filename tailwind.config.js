/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        pegasus: {
          start: '#0A3D91',
          end: '#1E90FF',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(10, 61, 145, 0.15)',
        glow: '0 0 0 2px rgba(30, 144, 255, 0.25)',
      },
      backgroundImage: {
        'pegasus-gradient': 'linear-gradient(135deg, #0A3D91 0%, #1E90FF 100%)',
        'pegasus-radial': 'radial-gradient(1000px 600px at 10% -10%, rgba(255,255,255,0.08), transparent), radial-gradient(800px 500px at 90% 10%, rgba(255,255,255,0.06), transparent)',
      },
      transitionTimingFunction: {
        'out-back': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}


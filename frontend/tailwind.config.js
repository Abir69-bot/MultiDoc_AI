export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  plugins: [],
};

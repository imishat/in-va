function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        black: 'black',
        white: 'white',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
        'accent': 'var(--accent)',
        'accent2': 'var(--accent2)',
        'accent3': 'var(--accent3)',
        'accent4': 'var(--accent4)',
        'accent5': 'var(--accent5)',
        'accent6': 'var(--accent6)',
        'accent7': 'var(--accent7)',
        'accent8': 'var(--accent8)',
        'accent9': 'var(--accent9)',
      },
      textColor: {
        transparent: 'transparent',
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accent: 'var(--text-accent)',
        accent2: 'var(--text-accent2)',
        black: 'black',
        white: 'white',
      },
      boxShadow: {
        none: 'none',
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
        lg: '0 30px 40px 0 rgb(16 36 94 / 20%)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
    },
  },
  plugins: [],
}

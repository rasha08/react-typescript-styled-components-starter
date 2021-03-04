import { Theme } from '../types/Theme';

export const defaultTheme: Omit<Theme, 'colors'> = {
  elementSizes: {
    headerHeight: '100px',
  },
  breakpoints: {
    mobile: '420px',
    tablet: '720px',
    desktop: '1024px',
  },
  fonts: {
    family: {
      primary: "'Segoe UI', 'Roboto', sans-serif",
      secondary: 'Ubuntu sans-serif',
    },
    sizes: {
      large: '2rem',
      normal: '1rem',
      small: '0.8rem',
    },
  },
};

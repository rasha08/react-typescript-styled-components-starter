export type Theme = {
  elementSizes: {
    headerHeight: string;
  };
  breakpoints: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  fonts: {
    family: {
      primary: string;
      secondary: string;
    };
    sizes: {
      large: string;
      normal: string;
      small: string;
    };
  };
  colors: {
    primary: string;
    background: string;
    text: string;
  };
};

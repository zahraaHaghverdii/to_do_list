// theme.js
export const createTheme = (customBreakpoints = {}) => {
  const defaultBreakpoints = {
    mini_mobile: "400px",
    mobile: "767px",
    mini_tablet: "768px",
    tablet: "888px",
    max_tablet: "970px",
    desktop: "1024px",
  };

  // ادغام نقاط شکست پیش‌فرض و سفارشی
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };

  return {
    breakpoints,
  };
};

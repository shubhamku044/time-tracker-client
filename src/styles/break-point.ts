const size = {
  xs: '440px', // for small screen mobile
  sm: '576', // for mobile screen
  md: '768', // for tablets
  lg: '1024', // for laptops
  xl: '1280', // for desktop / monitors
  xxl: '1440', // for big screens
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};

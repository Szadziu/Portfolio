const size = {
  // mobile devices
  mobileS: '320px',
  mobileM: '480px',
  mobileL: '768px',
  // desktop devices
  desktop: '1024px',
  desktopFHD: '1920px',
  desktop2k: '2048px',
  desktop4k: '3840px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopFHD: `(min-width: ${size.desktopFHD})`,
  desktop2k: `(min-width: ${size.desktop2k})`,
  desktop4k: `(min-width: ${size.desktop4k})`,
};

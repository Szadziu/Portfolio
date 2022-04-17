const size = {
  // mobile devices
  mobileS: '320px', // 320x658 Galaxy S9+
  mobileM: '480px',
  mobileL: '768px',
  // desktop devices
  desktop: '1024px', // 1280x720
  desktopFHD: '1920px', // 1366x768
  desktop2k: '2048px', // 2048x1080
  desktop4k: '3840px', // 3840x2160
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

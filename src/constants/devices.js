const size = {
  // mobile devices
  mobileS: '320px', // 320x658 Galaxy S9+
  mobileM: '390px', // 390x844 iPhone 12 Pro
  mobileL: '414px', // 414x736 iPhone 6/7/8 Plus
  mobileXL: '1242px', // 1242x2688 XS Max
  tabletS: '640px', // 640x480 small tablet
  tabletM: '768px', // 768x1024 iPad
  tabletL: '1024px', //1024x1366 iPad Pro
  // desktop devices
  desktop13: '1280px', // 1280x720
  desktop15: '1366px', // 1366x768
  desktopHD: '1920px', // 1920x1080
  desktop2k: '2048px', // 2048x1080
  desktop4k: '3840px', // 3840x2160
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileXL: `(min-width: ${size.mobileXL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tabletM: `(min-width: ${size.tabletM})`,
  tabletL: `(min-width: ${size.tabletL})`,
  desktop13: `(min-width: ${size.desktop13})`,
  desktop15: `(min-width: ${size.desktop15})`,
  desktopHD: `(min-width: ${size.desktopHD})`,
  desktop2k: `(min-width: ${size.desktop2k})`,
  desktop4k: `(min-width: ${size.desktop4k})`,
};

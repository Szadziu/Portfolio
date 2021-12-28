const size = {
  // urządzenia mobilne
  mobileS: "320px", // 320x568 - iPhone 5
  mobileSL: "568px", // landscape mobileS
  mobileM: "375px", // 375x667 iPhone 6/7/8
  mobileL: "414px", // 414x736 iPhone 6/7/8 Plus
  tabletS: "640px", // 640x480 small Tablet
  tabletSP: "480px", // portrait tabletS
  tabletM: "768px", // 768x1024 iPad
  tabletL: "1024px", //1024x1366 iPad Pro
  // urządzenia desktopowe
  laptop13: "1280px", // 1280x720
  laptop15: "1366px", // 1366x768
  desktopHD: "1920px", // 1920x1080
  desktop4k: "3840px", // 3840x2160
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileSL: `(min-width: ${size.mobileSL})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tabletSP: `(min-width: ${size.tabletSP})`,
  tabletM: `(min-width: ${size.tabletM})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop13: `(min-width: ${size.laptop13})`,
  laptop15: `(min-width: ${size.laptop15})`,
  desktopHD: `(min-width: ${size.desktopHD})`,
  desktop4k: `(min-width: ${size.desktop4k})`,
};

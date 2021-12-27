const size = {
  // urządzenia mobilne
  mobileS: "320px", // 320x568 - iPhone 5
  mobileM: "375px", // 375x667 iPhone 6/7/8
  mobileL: "414px", // 414x736 iPhone 6/7/8 Plus
  tabletS: "640px", // 640x480 small Tablet
  tabletM: "768px", // 768x1024 iPad
  tabletL: "1024px", //1024x1366 iPad Pro
  // urządzenia desktopowe
  laptop13: "1280px", // 1280x720
  laptop15: "1366px", // 1366x768
  desktopHD: "1920px", // 1920x1080
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tabletM: `(min-width: ${size.tabletM})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop13: `(min-width: ${size.laptop13})`,
  laptop15: `(min-width: ${size.laptop15})`,
  desktopHD: `(min-width: ${size.desktopHD})`,
};

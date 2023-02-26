const size = {
    mobileS: '360px',
    mobileM: '480px',
    mobileL: '768px',
    desktop: '1024px',
    desktopHD: '1280px',
    desktopFHD: '1920px',
    desktop2k: '2560px',
    desktop4k: '3840px',
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopHD: `(min-width: ${size.desktopHD})`,
    desktopFHD: `(min-width: ${size.desktopFHD})`,
    desktop2k: `(min-width: ${size.desktop2k})`,
    desktop4k: `(min-width: ${size.desktop4k})`,
};

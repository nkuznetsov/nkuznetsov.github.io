import { ThemeType } from 'models';

const DEBUG = false;
export const DEFAULT_IS_DEBUG = DEBUG;
export const SHOW_DEBUG = DEBUG;

export const SITE_NAME = 'Fluffy Oyster';

export const GRAPHQL_URL = 'https://fluffyoyster.onrender.com/graphql';

export const BREAKPOINTS = {
  // default breakpoints need to be left as are
  xs: 0, // default
  xxxxxsm: 320,
  xxxxsm: 335,
  xxxsm: 390,
  xxsm: 420,
  xsm: 480,
  sm: 520, // default
  xxxmd: 565,
  xxmd: 740,
  xmd: 1200,
  md: 1745, // default
  lg: 2035, // default
  xl: 2321 // default
};

/**
 * Collection of switches for magic components
 * Header and header image, slideout image, logo
 * Not accounting for logo if window.innerWidth < 520px - left pane is hidden
 */
export const DEFAULT_IS_MAGIC =
  window.innerWidth < BREAKPOINTS.sm ? [false, false] : [false, false, false];

export const DEFAULT_THEME_TYPE = ThemeType.Dark;
export const DEFAULT_LOCALE = 'en';

/** Delay in ms, after which tooltip disappears */
export const TOOLTIP_DELAY = 600;

/** Used for scrolling */
export const HOME_PAGE = '.home-page';
export const EXPERIENCE_PAGE = '.experience-page';

/** Links */
export const GITHUB_LINK = 'https://github.com/nkuznetsov';
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/kuznetsovnikita/';

/** Svgs */
export const WAND_SVG =
  "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='32px' height='32px' viewBox='0 0 294.059 294.059' style='enable-background:new 0 0 294.059 294.059;' xml:space='preserve'%3E%3Cg%3E%3Cpath style='fill:%231E252B;' d='M273.862,293.367c-5.169,0-10.339-1.973-14.282-5.915L76.878,104.749 c-7.888-7.887-7.888-20.676,0-28.563c7.887-7.889,20.677-7.889,28.564,0l182.702,182.701c7.887,7.889,7.887,20.676,0,28.564 C284.201,291.394,279.031,293.367,273.862,293.367z'/%3E%3Cpath style='fill:%23333E48;' d='M169.401,188.907c-5.169,0-10.338-1.972-14.282-5.917l-78.24-78.241 c-7.888-7.887-7.888-20.676,0-28.563c7.887-7.889,20.677-7.889,28.564,0l78.24,78.24c7.888,7.888,7.888,20.676,0,28.564 C179.739,186.935,174.57,188.907,169.401,188.907z'/%3E%3Cg%3E%3Cpolygon style='fill:%23FFC843;' points='91.161,158.055 59.5,180.244 49.51,142.896 10.995,139.544 27.348,104.512 0,77.185 35.044,60.862 31.66,22.348 68.998,32.371 91.161,0.693 113.322,32.371 150.661,22.348 147.276,60.862 182.321,77.185 154.973,104.512 171.326,139.544 132.811,142.896 122.821,180.244 '/%3E%3Cpolygon style='fill:%23FFE09B;' points='91.161,130.652 72.891,143.456 67.126,121.903 44.9,119.967 54.336,99.755 38.554,83.983 58.778,74.564 56.824,52.34 78.371,58.125 91.161,39.842 103.95,58.125 125.497,52.34 123.544,74.564 143.767,83.983 127.984,99.755 137.421,119.967 115.195,121.903 109.43,143.456 '/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A";

/** Card flipping */
export const FLIP_SPEED_FRONT_TO_BACK = 1;
export const FLIP_SPEED_BACK_TO_FRONT = 1;
export const IS_INFINITE_ROTATION = true;
export const CARD_Z_INDEX = 'auto';

/** Google AdSense */
export const AD_CLIENT = 'ca-pub-4609964133332939';
export const AD_SLOT = '2603031932';

/** Google Analytics */
export const MEASUREMENT_ID = 'G-W0M9VTXPWT';

import { keyframes } from '@mui/system';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Navbar is DESKTOP_NAV_HEIGHT and 18x2 padding
export const DESKTOP_NAV_HEIGHT = 48;

export const NAV_BAR_HEIGHT = 84; // 48 + (18x2)

// Height of expanded section when clicking on MENU
export const MOBILE_NAV_EXPAND_SECTION = 140;

export const MAX_WIDTH_BREAKPOINT = 855;

export const SCREEN_GUTTER = '32px';
export const WIDE_SCREEN_GUTTER = '80px';

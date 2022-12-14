import * as React from 'react';
import { DESKTOP_NAV_HEIGHT, fadeIn } from '../common/ui/shared';
import { HeaderProps } from './Header';
import { LogoButton } from './components/LogoButton';
import { NavLinks } from './components/NavLinks';
import { NavMenuButton } from './components/NavMenuButton';
import { styled } from '@mui/system';

const RootContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  background: theme.palette.nav.main,
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '18px 0',
  maxWidth: '100%',
  height: `${DESKTOP_NAV_HEIGHT}px`,
  ['@media (max-width:855px)']: {
    padding: '18px 32px',
    maxHeight: '72px',
  },
  '& .nav-links': {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    listStyle: 'none',
    width: '60vw',
    animation: `${fadeIn} ease 1s`,
    WebkitAnimation: `${fadeIn} ease 1s`,
    MozAnimation: `${fadeIn} ease 1s`,
    OAnimation: `${fadeIn} ease 1s`,
    msAnimation: `${fadeIn} ease 1s`,
    ['@media (max-width:855px)']: {
      display: 'none',
    },
  },
  '& .link': {
    color: theme.palette.navLinks.main,
    padding: '0 12px',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.2s ease-out',
    '&:hover': {
      letterSpacing: '1px',
    },
    '&:focus': {
      background: 'rgba(0, 0, 0, 0.04)',
      outline: 'none',
    },
  },
}));

export const DesktopNav: React.FC<HeaderProps> = ({
  displaymenu,
  toggleMobileNav,
}) => {
  return (
    <RootContainer>
      <LogoButton displaymenu={displaymenu} toggleMobileNav={toggleMobileNav} />
      <NavLinks displaymenu={displaymenu} toggleMobileNav={toggleMobileNav} />
      <NavMenuButton navButtonDisplay="menu" onClick={toggleMobileNav} />
    </RootContainer>
  );
};

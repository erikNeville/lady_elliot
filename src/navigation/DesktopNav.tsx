import * as React from 'react';
import { HeaderProps } from './Header';
import { LogoButton } from './components/LogoButton';
import { NavLinks } from './components/NavLinks';
import { NavMenuButton } from './components/NavMenuButton';
import { styled } from '@mui/system';

const RootContainer = styled('nav')(({ theme }) => ({
  background: theme.palette.nav.main,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '18px 0',
  display: 'flex',
  flexFlow: 'row nowrap',
  height: '28px',

  '@media screen and (max-width: 855px)': {
    height: '72px',
    flexFlow: 'column nowrap',
    justifyContent: 'space-evenly',
  },

  '& .nav-links': {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    listStyle: 'none',
    width: '60vw',
    animation: 'fadeIn ease 1s',
    WebkitAnimation: 'fadeIn ease 1s',
    MozAnimation: 'fadeIn ease 1s',
    OAnimation: 'fadeIn ease 1s',
    msAnimation: 'fadeIn ease 1s',

    '@media screen and (max-width: 855px)': {
      display: 'none',
    },
    '@keyframes fadeIn': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
    '@-moz-keyframes fadeIn': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
    '@-webkit-keyframes fadeIn': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
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
      <NavMenuButton navButtonDisplay={'menu'} onClick={toggleMobileNav} />
    </RootContainer>
  );
};

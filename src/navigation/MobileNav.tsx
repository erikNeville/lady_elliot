import * as React from 'react';
import { Accordion, AccordionDetails } from '@mui/material';
import { HeaderProps } from './Header';
import { NavLinks } from './components/NavLinks';
import { styled } from '@mui/system';

const MAXHEIGHT = (displaymenu: boolean): string => {
  if (displaymenu) {
    return '190px';
  } else {
    return '0px';
  }
};

const TRANSITION = (displaymenu: boolean): string => {
  if (displaymenu) {
    return 'max-height 0.2s ease-in';
  } else {
    return 'max-height 0.2s ease-out';
  }
};

const RootContainer = styled('nav', {
  shouldForwardProp: (prop) => prop !== 'displaymenu',
})<{ displaymenu: boolean }>(({ theme, displaymenu }) => ({
  background: theme.palette.nav.main,
  display: 'block',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  maxHeight: '190px',
  width: '100%',
  '& .nav-links': {
    maxHeight: MAXHEIGHT(displaymenu),
    overflow: 'hidden',
    textAlign: 'center',
    transition: TRANSITION(displaymenu),
  },
  '& .link': {
    color: theme.palette.navLinks.main,
    padding: '8px 8px',
    display: 'flex',
    flexFlow: 'column nowrap',
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.2s ease-out',
    '&:hover': {
      letterSpacing: '1px',
    },
    '&:focus': {
      outline: 'none',
    },
  },
}));

export const MobileNav: React.FC<HeaderProps> = ({
  displaymenu,
  toggleMobileNav,
}) => {
  return (
    <Accordion>
      <AccordionDetails sx={{ padding: 0 }}>
        <RootContainer displaymenu={displaymenu}>
          <NavLinks
            isMobileLink={true}
            displaymenu={displaymenu}
            toggleMobileNav={toggleMobileNav}
          />
        </RootContainer>
      </AccordionDetails>
    </Accordion>
  );
};

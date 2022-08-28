import * as React from 'react';
import { Accordion, AccordionDetails } from '@mui/material';
import { HeaderProps } from './Header';
import { MOBILE_NAV_EXPAND_SECTION } from '../common/ui/shared';
import { NavLinks } from './components/NavLinks';
import { styled } from '@mui/system';

const expandHeight = `${MOBILE_NAV_EXPAND_SECTION}px`;

const getTransition = (displayMenu: boolean): string =>
  displayMenu ? 'height 0.2s ease-in' : 'height 0.2s ease-out';

const RootContainer = styled('nav', {
  shouldForwardProp: (prop) => prop !== 'displaymenu',
})<{ displaymenu: boolean }>(({ theme, displaymenu }) => ({
  background: theme.palette.nav.main,
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'end',
  width: '100%',
  '& .nav-links': {
    height: displaymenu ? expandHeight : 0,
    transition: getTransition(displaymenu),
    paddingRight: '40px',
    overflow: 'hidden',
    textAlign: 'right',
  },
  '& .link': {
    color: theme.palette.navLinks.main,
    padding: '8px 8px',
    display: 'block',
    fontSize: '16px',
    fontWeight: 500,
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

// Expanded section that appears when clicking MENU
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

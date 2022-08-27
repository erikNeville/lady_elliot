import * as React from 'react';
import { Accordion, AccordionDetails } from '@mui/material';
import { MUIStyledCommonProps, styled } from '@mui/system';
import { HeaderProps } from './Header';
import { NavLinks } from './components/NavLinks';

type MobileNavProps = {
  displaymenu: boolean;
} & MUIStyledCommonProps;

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
  shouldForwardProp: (prop) => prop !== 'displaymenu'
})<{displaymenu: boolean}>(
  ({ theme, displaymenu }: MobileNavProps) => ({
    background: theme && theme.palette.nav.main,
    alignSelf: 'center',
    display: 'block',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    maxHeight: '190px',
    width: '100%',

    '& .nav-links': {
      maxHeight: MAXHEIGHT(displaymenu),
      // maxHeight: displaymenu ? '190px' : '0',
      overflow: 'hidden',
      textAlign: 'center',
      transition: TRANSITION(displaymenu),
      // transition: displaymenu
      //   ? 'max-height 0.2s ease-in'
      //   : 'max-height 0.2s ease-out',
    },

    '& .link': {
      color: theme && theme.palette.navLinks.main,
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
  })
);

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

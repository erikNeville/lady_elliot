import * as React from 'react';
import { HeaderProps } from '../Header';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

const RootContainer = styled('nav')`
  align-items: center;
  display: flex;
  width: 40vw;
  justify-content: center;
  flex-flow: row nowrap;
  @media screen and (max-width: 855px) {
    width: 100%;
  }

  .logo-link {
    font-weight: bold;
    color: ${(props) => props.theme.palette.navTitle.main};
    font-size: 28px;
    text-decoration: none;
    transition: all 0.2s ease-out;
    @media screen and (max-width: 855px) {
      padding-bottom: 18px;
      font-size: 24px;
    }
    &:hover {
      letter-spacing: 2px;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const LogoButton: React.FC<HeaderProps> = ({
  displaymenu,
  toggleMobileNav,
}) => {
  const closeNav = React.useCallback(() => {
    if (displaymenu) {
      toggleMobileNav();
    }
    window.scrollTo(0, 0);
  }, [displaymenu, toggleMobileNav]);

  return (
    <RootContainer>
      <Link
        component={RouterLink}
        to="/"
        className="logo-link"
        onClick={closeNav}
      >
        Lady Elliot Art
      </Link>
    </RootContainer>
  );
};

import * as React from 'react';
import { HeaderProps } from '../Header';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import signature from '../../imgs/links/elliot_signature_logo.png';
import { styled } from '@mui/system';

const Signature = styled('img')({
  display: 'block',
  objectFit: 'contain',
  objectPosition: '50% 50%',
  height: '60px',
  width: '100%',
});

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
    <Link
      component={RouterLink}
      to="/"
      className="logo-link"
      onClick={closeNav}
    >
      <Signature
        className="signature-logo"
        src={signature}
        alt="Lady Elliot Art"
      />
    </Link>
  );
};

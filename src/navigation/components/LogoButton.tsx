import * as React from 'react';
import { Box } from '@mui/material';
import { HeaderProps } from '../Header';
import signature from '../../imgs/links/elliot_signature_logo.png';
import { styled } from '@mui/system';
import { useHistory } from 'react-router-dom';

const Styled = {
  Root: styled(Box)({
    width: '40vw',
    ['@media (max-width:855px)']: {
      width: 'unset',
    },
  }),
};

const Signature = styled('img')({
  display: 'block',
  objectFit: 'contain',
  height: '78px',
  margin: '0 auto',
  cursor: 'pointer',
});

export const LogoButton: React.FC<HeaderProps> = ({
  displaymenu,
  toggleMobileNav,
}) => {
  const history = useHistory();
  const closeNav = React.useCallback(() => {
    if (displaymenu) {
      toggleMobileNav();
    }
    window.scrollTo(0, 0);
  }, [displaymenu, toggleMobileNav]);

  const handleClick = (): void => {
    closeNav();
    history.push('/');
  };

  return (
    <Styled.Root>
      <Signature
        className="signature-logo"
        src={signature}
        alt="Lady Elliot Art"
        onClick={handleClick}
      />
    </Styled.Root>
  );
};

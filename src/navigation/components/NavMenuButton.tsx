import * as React from 'react';
import { keyframes, styled } from '@mui/system';
import Button from '@mui/material/Button';

interface NavMenuButtonProps {
  navButtonDisplay: string;
  onClick: () => void;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.navLinks.main,
  // background: 'transparent',
  fontSize: '22px',
  border: 'none',
  display: 'none',
  '& .menu': {
    cursor: 'pointer',
    color: theme.palette.navLinks.main,
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    transition: 'all 0.2s ease-out',
    '&:hover': {
      letterSpacing: '2px',
    },
  },
  '&:focus': {
    outline: 'none',
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '@media (max-width:855px)': {
    width: '100%',
    animation: `${fadeIn} ease 1s`,
    display: 'block',
  },
}));

export const NavMenuButton: React.FC<NavMenuButtonProps> = ({
  navButtonDisplay,
  onClick,
}) => {
  return (
    <NavButton onClick={onClick} variant="text" disableTouchRipple>
      <p className="menu">{navButtonDisplay}</p>
    </NavButton>
  );
};

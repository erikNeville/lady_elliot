import * as React from 'react';
import Button from '@mui/material/Button';
import { fadeIn } from '../../common/ui/shared';
import { styled } from '@mui/system';

interface NavMenuButtonProps {
  navButtonDisplay: string;
  onClick: () => void;
}

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.navLinks.main,
  fontSize: '18px',
  border: 'none',
  padding: 0,
  minWidth: '0px',
  width: '64px',
  display: 'none',
  '& .menu': {
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

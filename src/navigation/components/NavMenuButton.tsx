import * as React from 'react';
import { styled } from '@mui/system';

interface NavMenuButtonProps {
  navButtonDisplay: string;
  onClick: () => void;
}

const NavButton = styled('button')`
  color: ${(props) => props.theme.palette.navLinks.main};
  background: transparent;
  font-size: 22px;
  border: none;
  display: none;
  @media screen and (max-width: 855px) {
    width: 100%;
  }
  .menu {
    cursor: pointer;
    color: ${(props) => props.theme.palette.navLinks.main}
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.2s ease-out;
    &:hover {
      letter-spacing: 2px;
    }
    
  }
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 855px) {
    animation: fadeIn ease 1s;
    display: block;
    -webkit-animation: fadeIn ease 1s;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const NavMenuButton: React.FC<NavMenuButtonProps> = ({
  navButtonDisplay,
  onClick,
}) => {
  return (
    <NavButton onClick={onClick}>
      <p className="menu">{navButtonDisplay}</p>
    </NavButton>
  );
};

import * as React from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { styled } from '@mui/system';
import { useMenustate } from '../common/context/UIContext';

export interface HeaderProps {
  displaymenu: boolean;
  toggleMobileNav: () => void;
  isMobileLink?: boolean;
}

const Styled = {
  Root: styled('div', {
    shouldForwardProp: (prop) => prop !== 'hidden',
  })<{ hidden: boolean }>(({ hidden }) => ({
    overflow: 'auto',
    boxShadow: hidden ? 'none' : '0 10px 10px -5px',
    textAlign: 'center',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1030,
    transform: `translateY(${hidden ? '-90px' : 0})`,
    transition: 'all 0.5s ease',
  })),
};

interface Props {
  hideNav: boolean;
  children: React.ReactNode;
}

const Header: React.FC<Props> = ({ hideNav, children }) => {
  const { menustate, setMenustate } = useMenustate();

  const body = document.querySelector('body');

  const toggleMobileNav = React.useCallback(() => {
    if (menustate === false) {
      setMenustate(true);
    } else if (menustate === true) {
      setMenustate(false);
    }
  }, [menustate, setMenustate]);

  const handleScroll = React.useCallback(() => {
    if (menustate === true) {
      toggleMobileNav();
    }
  }, [menustate, toggleMobileNav]);

  const autoHideMobileNav = React.useCallback(() => {
    const screenWidth = window.innerWidth;
    if (menustate === true && screenWidth > 768) {
      setMenustate(false);
    }
  }, [menustate, setMenustate]);

  React.useEffect(() => {
    if (body) {
      body.addEventListener('scroll', handleScroll);

      return (): void => {
        body.removeEventListener('scroll', handleScroll);
      };
    }
  }, [body, handleScroll]);

  React.useEffect(() => {
    window.addEventListener('resize', autoHideMobileNav);

    return (): void => {
      window.removeEventListener('resize', autoHideMobileNav);
    };
  }, [window, autoHideMobileNav]);

  return (
    <>
      <Styled.Root hidden={hideNav}>
        <DesktopNav displaymenu={menustate} toggleMobileNav={toggleMobileNav} />
        <MobileNav displaymenu={menustate} toggleMobileNav={toggleMobileNav} />
      </Styled.Root>
      {children}
    </>
  );
};

export default Header;

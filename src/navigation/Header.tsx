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
  Root: styled('div')({
    overflow: 'hidden',
    boxShadow: '0 10px 10px -5px',
    textAlign: 'center',
    width: '100%',
    position: 'fixed',
    zIndex: 1030,
  }),
};

const Header: React.FC = () => {
  const { menustate, setMenustate } = useMenustate();

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
    document.querySelector('body')?.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  React.useEffect(() => {
    window.addEventListener('resize', autoHideMobileNav);
  }, [autoHideMobileNav]);

  return (
    <Styled.Root>
      <DesktopNav displaymenu={menustate} toggleMobileNav={toggleMobileNav} />
      <MobileNav displaymenu={menustate} toggleMobileNav={toggleMobileNav} />
    </Styled.Root>
  );
};

export default Header;

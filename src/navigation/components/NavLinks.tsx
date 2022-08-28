import * as React from 'react';
import { HeaderProps } from '../Header';
import { NavLink } from './NavLink';
import { routeNames } from '../../App';

export const NavLinks: React.FC<HeaderProps> = ({
  isMobileLink,
  displaymenu,
  toggleMobileNav,
}) => {
  const closeNav = React.useCallback(() => {
    if (displaymenu) {
      toggleMobileNav();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [displaymenu, toggleMobileNav]);

  let tabIndex: number | undefined;
  if (isMobileLink) {
    tabIndex = -1;
  }

  return (
    <ul className="nav-links">
      {routeNames &&
        routeNames.map((routes: string) => {
          return (
            <li key={routes}>
              <NavLink
                closeNav={closeNav}
                tabIndex={tabIndex}
                navRoute={routes}
              />
            </li>
          );
        })}
    </ul>
  );
};

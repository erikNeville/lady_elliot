import * as React from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface NavLinkProps {
  closeNav: () => void;
  tabIndex?: number;
  navRoute: string;
}

export const NavLink = ({
  closeNav,
  tabIndex,
  navRoute,
}: NavLinkProps): React.ReactElement => {
  const formatToString = React.useMemo(() => {
    const route = navRoute.toLowerCase().split(' ');
    return '/' + route[0];
  }, [navRoute]);

  return (
    <Link
      component={RouterLink}
      to={formatToString}
      className="link"
      onClick={closeNav}
      tabIndex={tabIndex}
    >
      {navRoute}
    </Link>
  );
};

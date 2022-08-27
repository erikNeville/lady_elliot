import * as React from 'react';
import { createCustomContext } from './createCustomContext';

type MenuProviderProps = {
  children: React.ReactNode;
};

type MenuContextType = {
  menustate: boolean;
  setMenustate: (value: boolean) => void;
};

export const [useMenustate, CustomContextProvider] =
  createCustomContext<MenuContextType>();

export const MenuStateProvider = ({
  children,
}: MenuProviderProps): React.ReactElement => {
  const [menustate, setMenustate] = React.useState(false);

  React.useEffect(() => {
    // const currentMenustate = false;
    setMenustate(menustate);
  }, [menustate, setMenustate]);

  return (
    <CustomContextProvider value={{ menustate, setMenustate }}>
      {children}
    </CustomContextProvider>
  );
};

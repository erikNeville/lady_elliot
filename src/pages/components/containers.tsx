import * as React from 'react';
import {
  OPENED_CLOSED_MENU_DIFFERENCE,
  SCREEN_GUTTER,
  WIDE_SCREEN_GUTTER,
} from '../../common/ui/shared';
import { styled } from '@mui/system';
import { useMenustate } from '../../common/context/UIContext';

const MOBILE_TOP_PADDING_MENU_CLOSED = 130;
const MOBILE_TOP_PADDING_MENU_OPENED =
  MOBILE_TOP_PADDING_MENU_CLOSED + OPENED_CLOSED_MENU_DIFFERENCE;

interface RootContainerProps {
  paddingtop: number;
  menustate: boolean;
}

export const RootContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'menustate',
})(({ menustate, paddingtop }: RootContainerProps) => ({
  paddingTop: '100px',
  paddingLeft: WIDE_SCREEN_GUTTER,
  paddingRight: WIDE_SCREEN_GUTTER,
  paddingBottom: '20px',
  maxWidth: '1000px',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media screen and (max-width: 855px)': {
    transition: menustate
      ? 'padding-top 0.2s ease-in'
      : 'padding-top 0.2s ease-out',
    paddingTop: paddingtop + 'px',
    paddingLeft: SCREEN_GUTTER,
    paddingRight: SCREEN_GUTTER,
  },
}));

interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenDiv = styled('div')`
  height: 100vh;
`;

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
}) => {
  const { menustate, setMenustate } = useMenustate();
  const toggleMobileNav = React.useCallback(() => {
    if (menustate) {
      setMenustate(false);
    }
  }, [menustate, setMenustate]);
  const paddingtop = menustate
    ? MOBILE_TOP_PADDING_MENU_OPENED
    : MOBILE_TOP_PADDING_MENU_CLOSED;

  return (
    <ScreenDiv onClick={toggleMobileNav}>
      <RootContainer paddingtop={paddingtop} menustate={menustate}>
        {children}
      </RootContainer>
    </ScreenDiv>
  );
};

export const BodyContainer = styled('div')`
  padding-top: 8px;
  @media screen and (max-width: 768px) {
    padding-top: 9px;
  }
`;

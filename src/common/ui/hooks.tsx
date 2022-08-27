import * as React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled(Box)({
  position: 'fixed',
  bottom: 4,
  left: 4,
  height: '60px',
  width: '100%',
});

const ToTopBtn = styled(Button)({
  height: '60px',
  width: '100px',
});

export const withScrollToTop = <P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P> => {
  const WithScroll: React.FC<P> = (props) => {
    const handleScroll = () => {
      document.querySelector('body')?.scrollTo(0, 0);
      // window.scrollTo(0, 0);
    };
    return (
      <>
        <WrappedComponent {...(props as P)} />
        <Root>
          <ToTopBtn onClick={handleScroll}>To Top</ToTopBtn>
        </Root>
      </>
    );
  };
  return WithScroll;
};

type WindowDimensions = {
  screenWidth: number;
  screenHeight: number;
};

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
  return { screenWidth, screenHeight };
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions(),
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

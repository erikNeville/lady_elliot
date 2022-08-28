import * as React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const ToTopBtn = styled(Button)({
  position: 'fixed',
  bottom: 16,
  right: 16,
  padding: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,1)',
  },
});

export const withScrollToTop = <P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P> => {
  const WithScroll: React.FC<P> = (props) => {
    const handleScroll = () => {
      document.querySelector('body')?.scrollTo({ top: 0, behavior: 'smooth' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
      <>
        <WrappedComponent {...(props as P)} />
        <ToTopBtn onClick={handleScroll}>To Top</ToTopBtn>
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

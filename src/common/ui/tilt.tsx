import * as React from 'react';

const TILT_MAX_X = 35;
const TILT_MAX_Y = 35;
const AUTORESET_ON_LEAVE = true;

const withTilt = <P extends object>(
  Component: React.ComponentType<P>
): React.Component<P> => {
  class TiltComponent extends React.Component {
    wrapperEl = null;
    width = null;
    height = null;
    left = null;
    top = null;
    clientPosition = {
      x: 0,
      y: 0,
      xPercentage: 0,
      yPercentage: 0,
    };
    tiltAngleX = 0;
    tiltAngleY = 0;
    updateAnimationId = null;

    React.useEffect(() => {
      setSizeAndPosition();
      window.addEventListener('deviceorientation', onMove);
      return () => window.removeEventListener('deviceorientation', onMove);
    }, []);

    const setSizeAndPosition = () => {
      const rect = wrapperEl.getBoundingClientRect();
      width = wrapperEl.offsetWidth;
      height = wrapperEl.offsetHeight;
      left = rect.left;
      top = rect.top;
    };

    const onEnter = (event: any) => {
      wrapperEl.style.willChange = 'transform';
      setTransition();
    };

    const onMove = (event: any) => {
      if (updateAnimationId) {
        cancelAnimationFrame(updateAnimationId);
      }
      processInput(event);
      updateAnimationId(event.type);
      updateAnimationId = requestAnimationFrame(renderFrame);
    };

    const onLeave = (event: any) => {
      setTransition();
      const autoResetEvent = new CustomEvent('autoreset');
      onMove(autoResetEvent);
    };

    const processInput = (event: any) => {
      switch (event.type) {
        case 'mousemove':
          clientPosition.x = event.clientX;
          clientPosition.y = event.clientY;
          break;
        case 'touchmove':
          clientPosition.x = event.touches[0].pageX;
          clientPosition.y = event.touches[0].pageY;
          break;
        case 'deviceorientation':
          processInputDeviceOrientation(event);
          break;
        case 'autoreset':
          if (AUTORESET_ON_LEAVE) {
            tiltAngleX = 0;
            tiltAngleY = 0;
          }
          break;
      }
    };

    const processInputDeviceOrientation = (event: any) => {
      if (!event.gamma || !event.beta) {
        return;
      }

      const angleX = event.beta;
      const angleY = event.gamma;

      clientPosition.xPercentage = (angleX / TILT_MAX_X) * 100;
      clientPosition.yPercentage = (angleY / TILT_MAX_Y) * 100;
    };

    const update = (eventType: any) => {
      if (eventType === 'autoreset') {
        return;
      }

      if (eventType !== 'deviceorientation') {
        const { x, y } = clientPosition;

        clientPosition.xPercentage = ((y - top) / height) * 200 - 100;
        clientPosition.yPercentage = ((x - left) / width) * 200 - 100;
      }

      clientPosition.xPercentage = Math.min(
        Math.max(clientPosition.xPercentage, -100),
        100
      );
      clientPosition.yPercentage = Math.min(
        Math.max(clientPosition.yPercentage, -100),
        100
      );

      tiltAngleX = (clientPosition.xPercentage * TILT_MAX_X) / 100;
      tiltAngleY = -((clientPosition.yPercentage * TILT_MAX_Y) / 100);
    };

    const renderFrame = () => {
      wrapperEl.style.transform = `perspective(1000px) rotateX(${tiltAngleX}deg) rotateY(${tiltAngleY}deg) scale3d(1.2,1.2,1.2)`;
    };

    const setTransition = () => {
      const duration = 1800;
      wrapperEl.style.transition = `all ${duration}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
      transitionTimeout
    }
  };
};

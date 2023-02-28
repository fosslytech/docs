import { useEffect, useRef } from 'react';

const useBeforeunload = (shouldStop: boolean) => {
  const shouldStopRef = useRef(false);

  useEffect(() => {
    shouldStopRef.current = shouldStop;
  }, [shouldStop]);

  useEffect(() => {
    const eventListener = (event) => {
      if (!shouldStopRef.current) return;

      return (event.returnValue = 'You have unsaved changes');
    };

    window.addEventListener('beforeunload', eventListener);

    return () => {
      window.removeEventListener('beforeunload', eventListener);
    };
  }, []);
};

export default useBeforeunload;

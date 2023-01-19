import { useEffect, useState } from 'react';

const useArea = (): {
  width: number;
  height: number;
} => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    function calcArea() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', calcArea);

    return () => window.removeEventListener('resize', calcArea);
  }, []);

  return { width, height };
};

export default useArea;

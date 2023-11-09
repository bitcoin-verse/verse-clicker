import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [width, setWidth] = useState<number>(screen.width);

  useEffect(() => {
    const setScreenWidth = () => {
      setWidth(screen.width);
    };

    window.addEventListener("resize", setScreenWidth);

    return () => {
      window.removeEventListener("resize", setScreenWidth);
    };
  }, []);

  return width;
};

export default useScreenWidth;

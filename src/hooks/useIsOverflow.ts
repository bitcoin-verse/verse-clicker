import { RefObject, useLayoutEffect, useState } from "react";

export const useIsOverflow = (ref: RefObject<HTMLElement>) => {
  const [isOverflow, setIsOverflow] = useState<boolean>();

  useLayoutEffect(() => {
    const { current } = ref;
    if (!current) return;

    const hasOverflow = current.scrollWidth > current.clientWidth;

    setIsOverflow(hasOverflow);
  }, [ref]);

  return isOverflow;
};

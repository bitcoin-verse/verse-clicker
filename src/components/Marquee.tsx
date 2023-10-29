import React, { FC, PropsWithChildren, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { useIsOverflow } from "../hooks/useIsOverflow";

const slideOff = keyframes`
    0%  { transform: translate(0, 0); }
    40% { transform: translate(-150%, 0); }
    40.001% { transform: translate(110%, 0); }
  
    80%,100% { transform: translate(0, 0); }
`;

const MarqueeWrapper = styled.div<{ $shouldAnimate?: boolean }>`
  overflow: hidden;
  white-space: nowrap;

  & > div {
    will-change: transform;
    padding-right: 100%;
    ${({ $shouldAnimate }) =>
      $shouldAnimate &&
      css`
        animation: 20s linear 5s infinite ${slideOff};

        &:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          animation-iteration-count: 1;
          animation-duration: 0.01;
          width: auto;
          padding-left: 0;
        }
      `}
  }
`;

interface Props {
  shouldAnimate: boolean;
}

const Marquee: FC<PropsWithChildren<Props>> = ({ children, shouldAnimate }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isOverflow = useIsOverflow(ref);

  return (
    <MarqueeWrapper ref={ref} $shouldAnimate={isOverflow && shouldAnimate}>
      {children}
    </MarqueeWrapper>
  );
};

export default Marquee;

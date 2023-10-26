import React, { FC, PropsWithChildren, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { useIsOverflow } from "../hooks/useIsOverflow";

const marqueeAnimation = keyframes`
    0% { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
  `;

const MarqueeWrapper = styled.div<{ $shouldAnimate?: boolean }>`
  overflow: hidden;
  white-space: nowrap;

  & > div {
    will-change: transform;

    ${({ $shouldAnimate }) =>
      $shouldAnimate &&
      css`
        animation: ${marqueeAnimation} 10s linear infinite;
        animation-delay: 5s;

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

const Marquee: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isOverflow = useIsOverflow(ref);

  return (
    <MarqueeWrapper ref={ref} $shouldAnimate={isOverflow}>
      {children}
    </MarqueeWrapper>
  );
};

export default Marquee;

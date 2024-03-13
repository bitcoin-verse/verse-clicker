import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

import spinner from "../../assets/spinner.png";

const spin = keyframes`
  0% {
    transform: rotate(359deg);
  }
`;

// Modify SpinnerWrapper to accept props for dynamic width and height
const SpinnerWrapper = styled.div<{ width?: string; height?: string }>`
  height: ${(props) => props.height || "4rem"};
  width: ${(props) => props.width || "4rem"};
  animation: ${spin} 3s infinite linear;
  animation-direction: reverse;
`;

// Define props interface to include optional width and height
interface SpinnerProps {
  width?: string;
  height?: string;
}

const Spinner: FC<SpinnerProps> = ({ width, height }) => {
  return (
    <SpinnerWrapper width={width} height={height}>
      <img src={spinner} alt="Loading Spinner" height="100%" width="100%" />
    </SpinnerWrapper>
  );
};

export default Spinner;

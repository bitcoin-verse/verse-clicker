import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

import spinner from "../../assets/spinner.png";

const spin = keyframes`
  0% {
    transform: rotate(359deg);
  }
`;

const SpinnerWrapper = styled.div`
  height: 4rem;
  width: 4rem;
  animation: ${spin} 3s infinite linear;
  animation-direction: reverse;
`;

const Spinner: FC = () => {
  return (
    <SpinnerWrapper>
      <img src={spinner} alt="Loading Spinner" height="100%" width="100%" />
    </SpinnerWrapper>
  );
};

export default Spinner;

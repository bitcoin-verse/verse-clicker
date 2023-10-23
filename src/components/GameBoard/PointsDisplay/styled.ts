import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  top: 1rem;
  z-index: 1;
  text-shadow: 2px 2px 4px black;

  @media (min-width: 768px) {
    position: relative;
  }
`;

export const PointsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: monospace;
`;

export const Points = styled.h1`
  font-family: monospace;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;

  text-shadow: 0px 0.25rem 1.25rem #ffb800;
  & > svg {
    filter: drop-shadow(0px 0.25rem 1.25rem #c87a1e);
  }
`;

export const StatCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-family: monospace;
  font-weight: 600;
  font-size: 1rem;
`;

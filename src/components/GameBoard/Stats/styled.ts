import styled from "styled-components";
import { colors } from "../../colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-weight: 600;
  font-size: 0.75rem;

  background: #252d40;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 6.25rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);

  max-width: 24rem;

  @media (min-width: 768px) {
    max-width: 21rem;
  }
`;

export const TrophyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Divider = styled.div`
  border: 0.063rem solid ${colors.shade60};
  height: 100%;
`;

export const Subtitle = styled.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-family: monospace;
`;

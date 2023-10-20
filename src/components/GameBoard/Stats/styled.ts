import styled from "styled-components";
import { colors } from "../../colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 0.75rem;

  background: #252d40;
  width: 18.459rem;
  height: 3.188rem;
  padding: 0.5rem 1rem;
  border-radius: 6.25rem;
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
  font-size: 0.875rem;
`;

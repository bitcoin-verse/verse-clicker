import styled from "styled-components";
import { Button } from "../Button";
import { colors } from "../colors";

export const Moon = styled.img`
  height: 10rem;
  width: 10rem;
`;

export const DataWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Value = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

export const Description = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${colors.shade80};
`;

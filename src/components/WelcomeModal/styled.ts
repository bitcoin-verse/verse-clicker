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

  & > svg {
    color: ${colors.shade80};
  }
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

  & > span {
    color: ${colors.white};
  }
`;

export const BonusHeader = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #899bb5;
  text-align: right;
`;

export const BonusRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr) 1rem;
  align-items: center;
  justify-content: flex-end;

  gap: 0.5rem;
  box-sizing: border-box;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: left;

  & > div {
    text-align: right;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* & > :nth-child(1), */
  & > :nth-child(1n) {
    justify-content: flex-start;
    text-align: left;
  }

  & > a > svg {
    color: ${colors.white};
  }

  & > div > img,
  & > div > svg {
    margin-left: 0.25rem;
    height: 0.875rem;
    width: 0.875rem;
  }
`;

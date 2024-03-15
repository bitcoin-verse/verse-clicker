import styled from "styled-components";

import { colors } from "../colors";

export const LeaderboardWrapper = styled.div`
  margin: 0 auto auto auto;
  width: 98%;
  max-width: 40rem;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  background: #030c14;
  box-shadow: 0px 2px 60px 0px #2fa9ee33;
  border-radius: 1rem;
  padding: 1rem 0;
  z-index: 1000;
  @media (min-width: 768px) {
    width: 90%;
  }
`;

export const StyledLeaderboardContent = styled.div`
  margin: 0 2rem;
  @media (min-width: 768px) {
    max-height: 90vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.25rem;
      background-color: #000;
      border-radius: 0.5rem;
      right: -1.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #313e57;
      border-radius: 0.5rem;
    }
  }
`;

export const Description = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${colors.shade80};

  & > span {
    color: ${colors.white};
  }
`;

export const YouBadge = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  grid-area: none;

  top: -1.8rem;
  left: 7.25rem;
  padding: 0.85rem 1.5rem;
  flex: 0;
  height: 1.5rem;
  width: 1.5rem;
  z-index: 999;

  border-radius: 2rem;
  color: #c5cedb;
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);
`;

export const Header = styled.div`
  width: 100%;
  padding: 0 2rem 1rem 2rem;
  border-bottom: 1px solid #1a2231;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.625rem;
`;
export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1rem auto 9rem 1rem;
  margin: 1rem 2rem;

  font-size: 0.875rem;
  font-weight: 600;
  text-align: right;
  padding-right: 1.5rem;

  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4) {
    text-align: left;
  }

  & > div {
    color: #899bb5;
  }
`;

export const Button = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);

  border-radius: 2.25rem;
  height: 2.25rem;
  padding: 0.25rem;

  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  color: ${colors.white};
`;

export const ButtonContent = styled.div<{ $logo: string }>`
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);

  border-radius: 2.25rem;
  height: 2.25rem;
  padding: 0.25rem;

  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.625rem;

  &::before {
    content: "";

    background-image: url(${({ $logo }) => $logo});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    background: linear-gradient(180deg, #0ebef0 0%, #0085ff 100%);
  }
`;

export const StarWrapper = styled.div`
  & > svg {
    filter: drop-shadow(0px 2px 10px #ffb800);
    transform: translateZ(0);
  }
`;

export const Timer = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: #899bb5;
  text-align: center;
`;

export const Body = styled.div`
  position: relative;
  margin: 0.45rem 0;
  display: grid;
  width: 100%;

  font-size: 0.875rem;
  font-weight: 600;

  grid-template-columns: 0.5rem auto 5.5rem 5.5rem;
  align-items: center;
  gap: 0.75rem;

  & > ${YouBadge} {
    position: absolute;
    display: flex;
    justify-content: center;
  }

  & > :nth-child(3) {
    display: flex;
    gap: 0.25rem;
    justify-content: flex-start;
    align-items: center;
    font-family: monospace;
  }

  & > :nth-child(4) {
    display: flex;
    font-family: monospace;
    gap: 0.25rem;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
  }
`;

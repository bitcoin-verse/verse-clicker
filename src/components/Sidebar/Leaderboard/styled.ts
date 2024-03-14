import styled from "styled-components";

export const LeaderboardWrapper = styled.div`
  margin: auto;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const LeaderboardContent = styled.div`
  margin: 0 0.5rem;
  @media (min-width: 768px) {
    max-height: 22rem;
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

  border-radius: 30px;
  color: #c5cedb;
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 0rem auto 8.5rem 0rem;
  margin: 1rem 1.6rem;

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
  position: absolute;
  top: 4rem;
  left: 2rem;
`;

export const Body = styled.div`
  position: relative;
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

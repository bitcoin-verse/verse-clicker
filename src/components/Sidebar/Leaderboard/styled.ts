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

export const YouBadge = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  flex: 0;
  max-height: 1.5rem;
  max-width: 1.5rem;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  color: #c5cedb;
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);
`;

export const MoonImage = styled.img`
  height: 0.875rem;
  width: 0.875rem;

  filter: drop-shadow(0px 2px 10px #1167b6);
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1rem auto 6rem 6rem;

  font-size: 0.875rem;
  font-weight: 600;
  text-align: right;
  margin-bottom: 1rem;

  & > :nth-child(1),
  & > :nth-child(2) {
    text-align: left;
  }

  & > div {
    color: #899bb5;
  }
`;

export const Body = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 0.5rem auto minmax(2rem, 5rem) minmax(3rem, 5rem);

  font-size: 0.875rem;
  font-weight: 600;
  text-align: right;
  margin-bottom: 1rem;

  gap: 0.75rem;

  align-items: center;

  & > div {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    align-items: center;
    position: relative;
  }

  & > :nth-child(1),
  & > :nth-child(2) {
    text-align: left;
    justify-content: flex-start;
  }
`;

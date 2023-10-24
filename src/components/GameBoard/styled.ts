import styled from "styled-components";

export const StyledGameBoard = styled.section`
  position: relative;
  flex: 1;
  display: grid;

  align-items: center;

  width: 100%;
  max-width: 80rem;
  margin: auto;
  box-sizing: border-box;

  @media (min-width: 768px) {
    grid-template-columns: 60% 40%;
  }
`;

export const ShopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-start;
  justify-content: flex-start;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

export const TabContent = styled.div`
  padding: 1rem 0;
  gap: 1rem;
  width: 100%;
`;

export const MainSection = styled.div`
  margin-top: 1rem;
  align-self: start;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    padding-right: 1rem;
  }
`;

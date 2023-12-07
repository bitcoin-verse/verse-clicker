import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 1rem;
  top: 0;

  @media (min-width: 768px) {
    left: 1rem;
    right: initial;
    padding: 0.75rem;
  }
`;

export const CampaignButton = styled.button`
  background: none;
  height: 2rem;
  width: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 2rem;

  & > img {
    filter: drop-shadow(0 0 0.75rem #6a1919);
  }

  @media (min-width: 768px) {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

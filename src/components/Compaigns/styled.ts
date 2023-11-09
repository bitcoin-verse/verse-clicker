import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
`;

export const CampaignButton = styled.button`
  height: 2rem;
  width: 2rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 2rem;

  & > img {
    filter: drop-shadow(0 0 0.75rem #0085ff);
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  background: #0f518f;
  border-radius: 6.25rem;
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.625rem 1.5rem;
  display: flex;
  margin: 1.5rem auto;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

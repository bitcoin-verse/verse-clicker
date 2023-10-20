import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 1rem;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  align-items: center;
  max-width: 38rem;
  width: 100%;
  padding: 1.25rem;
`;

export const ConnectionWrapper = styled.div`
  background: linear-gradient(0deg, #0f1823, #0f1823),
    radial-gradient(
      260.66% 796.62% at 52.5% 47.5%,
      #273953 0%,
      rgba(0, 0, 0, 0) 100%
    );

  padding: 2rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 30rem;
`;

export const MoonImage = styled.img`
  max-width: 22rem;
  max-height: 22rem;
  width: 100%;
  bottom: 0;
  margin: auto auto 0;
`;

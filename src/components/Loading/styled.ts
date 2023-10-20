import styled from "styled-components";
import veresMoon from "../../assets/verse-moon.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  padding: 0 1rem;

  &::before {
    content: "";
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: url(${veresMoon});
    background-repeat: no-repeat;
    background-position: center calc(100% + 22rem);
    background: red;
  }
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

  margin: auto;
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
  margin: auto;
`;

export const MoonImage = styled.img`
  max-width: 22rem;
  max-height: 22rem;
  width: 100%;
  margin-bottom: -50%;
`;

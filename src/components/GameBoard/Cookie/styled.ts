import styled from "styled-components";
import verseMoon from "../../../assets/verse-moon.png";

export const CookieWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ClickButton = styled.button`
  position: relative;
  max-width: 16.25rem;
  margin: 2rem 0;
  aspect-ratio: 1/1;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url(${verseMoon});
  background-size: 99%;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;

  &:hover {
    background-size: 98%;
  }

  &:active {
    background-size: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    pointer-events: all;
  }

  @media (min-width: 768px) {
    margin: 3.75rem 0;
  }
`;

export const CookieClick = styled.img`
  user-select: none;
  width: 3rem;
  pointer-events: none;
`;

export const CpcClick = styled.div`
  pointer-events: none;
  position: absolute;
  user-select: none;
  display: flex;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 3rem;
  animation: click 1s ease-in-out;

  text-shadow: 0px 4px 20px 0px #c87a1e;

  @keyframes click {
    100% {
      opacity: 0;
      transform: translate(-50%, -250%);
    }
  }
`;

export const ButtonWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  text-align: center;
`;

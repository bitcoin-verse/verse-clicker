import styled from "styled-components";
import { Button } from "../../Button";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  padding-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 0.02175rem;

    left: -1.5rem;
    right: -1.5rem;
    bottom: 0;
    background: #252d40;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  font-size: 1.125rem;
`;

export const Avatar = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background: radial-gradient(
      52.08% 42.19% at 60.94% 71.88%,
      #d89370 0%,
      #6376ec 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
`;

export const NetworkImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

export const Connected = styled.div`
  color: #969e9e;
  align-self: flex-start;
  height: fit-content;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  display: flex;
  border-radius: 3rem;
  background: linear-gradient(0deg, #282a2a, #282a2a),
    linear-gradient(0deg, #383838, #383838);
  border: 1px solid #383838;
  gap: 0.5rem;
  align-items: center;

  &::before {
    content: "";

    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;

    background: linear-gradient(0deg, #00c48b, #00c48b),
      linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));

    border: 1px solid #ffffff4d;

    box-shadow: 0px 1px 7px 0px #00c48bcc;
  }
`;

export const ButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 1.5rem 0;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    height: 0.02175rem;

    left: -1.5rem;
    right: -1.5rem;
    top: 0;
    background: #252d40;
  }
`;

export const SettingsButton = styled.button`
  cursor: pointer;
  background: none;
  outline: none;
  border: none;

  font-weight: 600;
  font-size: 0.875rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #0085ff;

  &:disabled {
    color: grey;
  }
`;

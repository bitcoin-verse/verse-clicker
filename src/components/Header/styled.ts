import styled from "styled-components";
import { colors } from "../colors";
import { H3 } from "../H3";

export const StyledHeader = styled.header`
  display: grid;
  width: 100%;
  row-gap: 1rem;
  align-items: center;
  z-index: 1;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 1rem;
  grid-gap: 1rem;
  grid-template-columns: min-content max-content auto;
  grid-template-areas: "logo title connect";

  background: rgb(15, 24, 35);

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto 1fr;
    max-width: unset;
  }
`;

export const LogoWrapper = styled.a`
  display: flex;
  flex: 0;
  align-items: center;
  grid-area: logo;
  color: ${colors.shade80};
  text-decoration: none;
`;

export const Title = styled(H3)`
  grid-area: title;
  text-align: left;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const Logo = styled.img`
  height: 2rem;
  width: auto;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Icon = styled.img`
  height: 2rem;
  width: auto;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ConnectWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  align-items: center;

  gap: 0.5rem;
  grid-area: connect;
  z-index: 1;
`;

export const Button = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ButtonContent = styled.div<{ $logo: string }>`
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);

  border-radius: 2.25rem;
  height: 2.25rem;
  padding: 0.25rem;

  overflow: hidden;
  display: flex;
  align-items: center;

  &::after {
    content: "";

    background-image: url(${({ $logo }) => $logo});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    background: linear-gradient(180deg, #0ebef0 0%, #0085ff 100%);
  }
`;

export const AddressHolder = styled.div`
  display: none;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0em;
  text-align: left;
  margin: 1rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

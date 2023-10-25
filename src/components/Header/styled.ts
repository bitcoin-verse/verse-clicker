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
  padding: 1rem 1rem 0;
  grid-gap: 1rem;
  grid-template-columns: min-content max-content auto;
  grid-template-areas: "logo title connect";

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto 1fr;
  }
`;

export const LogoWrapper = styled.a`
  display: flex;
  flex: 0;
  align-items: center;
  grid-area: logo;
  color: ${colors.white};
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

import styled from "styled-components";
import { colors } from "../colors";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: flex-end;

  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem;
  flex-direction: column;
  flex: 0;
  z-index: 1;
  color: ${colors.white};
  background: ${colors.black};
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const LogoLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  gap: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;

  font-size: 0.75rem;
  font-weight: 400;
  color: #c5cedb;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.img`
  height: auto;
  object-fit: contain;
  width: 7.5rem;
`;

export const Copyright = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #586f91;
`;

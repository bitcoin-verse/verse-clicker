import styled from "styled-components";
import { colors } from "../colors";

export const Wrapper = styled.div`
  box-sizing: border-box;
  grid-area: banner;
  z-index: 100;
  width: 100%;
  background-color: ${colors.primaryBlue100};
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Label */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;

  & > div > a {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

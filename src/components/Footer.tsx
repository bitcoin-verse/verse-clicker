import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "./colors";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;

  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  flex: 0;
  z-index: 1;
  color: ${colors.white};
  background: ${colors.black};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <div>Copyright 2023</div>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;

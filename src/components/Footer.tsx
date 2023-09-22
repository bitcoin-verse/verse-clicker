import React, { FC } from "react";
import styled from "styled-components";
import Save from "./Save";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Footer: FC = () => {
  return (
    <>
      <Wrapper>
        <Save />
      </Wrapper>
      <StyledFooter>
        <div>Copyright 2023</div>
        <div>Made by: Micah, Paul, Ricky</div>
      </StyledFooter>
    </>
  );
};

export default Footer;

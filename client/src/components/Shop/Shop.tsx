import React, { FC } from "react";
import ShopList from "./ShopList";
import Upgrades from "./Upgrades";
import styled from "styled-components";
import { H4 } from "../H4";

const ShopContainer = styled.div`
  & > h4 {
    display: none;
  }
  @media (min-width: 768px) {
    & > h4 {
      display: block;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const Shop: FC = () => {
  return (
    <ShopContainer>
      <H4>Buildings and Upgrades</H4>
      <ContentWrapper>
        <ShopList />
        <Upgrades />
      </ContentWrapper>
    </ShopContainer>
  );
};

export default Shop;

import React, { FC } from "react";
import ShopList from "./ShopList";
import Upgrades from "./Upgrades";
import styled from "styled-components";
import { H4 } from "../H4";

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  grid-template-columns: 30% 70%;
  align-items: start;
  gap: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
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

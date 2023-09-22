import React, { FC } from "react";
import ShopList from "./ShopList";
import Upgrades from "./Upgrades";
import styled from "styled-components";

const ShopContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 50rem;
  margin: auto;
  overflow: hidden;
  grid-template-columns: 30% 70%;
  align-items: start;
`;

const Shop: FC = () => {
  return (
    <ShopContainer>
      <ShopList />
      <Upgrades />
    </ShopContainer>
  );
};

export default Shop;

import React, { FC } from "react";
import ShopList from "./ShopList";
import Upgrades from "./Upgrades";
import styled from "styled-components";

const ShopContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: fit-content;
  margin: auto;
  grid-template-columns: 1fr 2fr;
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

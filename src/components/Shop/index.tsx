import React, { FC } from "react";
import ShopList from "./ShopList";
import Upgrades from "./Upgrades";
import styled from "styled-components";

const ShopContainer = styled.div`
  display: flex;
  gap: 100px;
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

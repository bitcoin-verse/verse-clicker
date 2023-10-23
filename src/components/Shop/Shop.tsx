import React, { FC } from "react";
import ShopList from "./ShopList";
import styled from "styled-components";

const ShopContainer = styled.div`
  padding: 1rem 0;
`;

const Shop: FC = () => {
  return (
    <ShopContainer>
      <ShopList />
    </ShopContainer>
  );
};

export default Shop;

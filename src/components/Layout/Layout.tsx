import React, { FC, PropsWithChildren } from "react";
import { ContentsWrapper, GlobalStyle } from "./styled";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContentsWrapper>
      <GlobalStyle />
      {children}
    </ContentsWrapper>
  );
};

export default Layout;

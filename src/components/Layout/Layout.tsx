import React, { FC, PropsWithChildren } from "react";
import { ContentsWrapper, GlobalStyle } from "./styled";

interface Props {
  showMoon?: boolean;
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, showMoon }) => {
  return (
    <ContentsWrapper $showMoon={showMoon}>
      <GlobalStyle />
      {children}
    </ContentsWrapper>
  );
};

export default Layout;

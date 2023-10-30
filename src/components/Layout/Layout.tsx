import React, { FC, PropsWithChildren } from "react";
import { ContentsWrapper, GlobalStyle } from "./styled";
import { AudioProvider } from "../../context/AudioProvider";

interface Props {
  showMoon?: boolean;
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, showMoon }) => {
  return (
    <AudioProvider>
      <ContentsWrapper $showMoon={showMoon}>
        <GlobalStyle />
        {children}
      </ContentsWrapper>
    </AudioProvider>
  );
};

export default Layout;

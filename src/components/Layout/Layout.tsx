import React, { FC, PropsWithChildren } from "react";
import { ContentsWrapper, GlobalStyle } from "./styled";
import { AudioProvider } from "../../context/AudioProvider";
import { useTrackedState } from "../../context/store";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";

interface Props {
  showMoon?: boolean;
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, showMoon }) => {
  const { network } = useTrackedState();

  return (
    <ThemeProvider theme={themes[network]}>
      <AudioProvider>
        <ContentsWrapper $showMoon={showMoon}>
          <GlobalStyle />
          {children}
        </ContentsWrapper>
      </AudioProvider>
    </ThemeProvider>
  );
};

export default Layout;

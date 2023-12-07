import React, { FC, PropsWithChildren } from "react";
import { ContentsWrapper, GlobalStyle } from "./styled";
import { AudioProvider } from "../../context/AudioProvider";
import { useTrackedState } from "../../context/store";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { gameMode: network } = useTrackedState();

  return (
    <ThemeProvider theme={themes[network]}>
      <AudioProvider>
        <ContentsWrapper>
          <GlobalStyle />
          {children}
        </ContentsWrapper>
      </AudioProvider>
    </ThemeProvider>
  );
};

export default Layout;

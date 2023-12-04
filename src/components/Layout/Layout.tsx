import React, { FC, PropsWithChildren } from "react";
import { ContentsWrapper, GlobalStyle } from "./styled";
import { AudioProvider } from "../../context/AudioProvider";
import { useTrackedState } from "../../context/store";
import { NetworkName } from "../../context/reducers/network";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";

interface Props {
  showMoon?: boolean;
}

const getNetworkBackground = (network: NetworkName) => {
  switch (network) {
    case "Polygon":
      return "linear-gradient(0.26deg, #030C14 50%, #8F58E7 100%)";
    case "Goerli":
    case "Ethereum":
    default:
      return "linear-gradient(180deg, #020A10 0%, #10518D 100%)";
  }
};

const Layout: FC<PropsWithChildren<Props>> = ({ children, showMoon }) => {
  const { network } = useTrackedState();

  return (
    <ThemeProvider theme={themes[network]}>
      <AudioProvider>
        <ContentsWrapper
          $showMoon={showMoon}
          $background={getNetworkBackground(network)}
        >
          <GlobalStyle />
          {children}
        </ContentsWrapper>
      </AudioProvider>
    </ThemeProvider>
  );
};

export default Layout;

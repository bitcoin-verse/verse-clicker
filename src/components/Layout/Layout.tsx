import React, { FC, PropsWithChildren } from "react";
import { ContentsWrapper, GlobalStyle } from "./styled";
import { AudioProvider } from "../../context/AudioProvider";
import { useTrackedState } from "../../context/store";
import { NetworkName } from "../../context/reducers/network";

interface Props {
  showMoon?: boolean;
}

const getNetworkBackground = (network: NetworkName) => {
  switch (network) {
    case "Polygon":
      return "linear-gradient(0.26deg, #030C14 0.22%, #8F58E7 101.87%)";
    case "Goerli":
    case "Ethereum":
    default:
      return "#030c14;";
  }
};

const Layout: FC<PropsWithChildren<Props>> = ({ children, showMoon }) => {
  const { network } = useTrackedState();

  return (
    <AudioProvider>
      <ContentsWrapper
        $showMoon={showMoon}
        $background={getNetworkBackground(network)}
      >
        <GlobalStyle />
        {children}
      </ContentsWrapper>
    </AudioProvider>
  );
};

export default Layout;

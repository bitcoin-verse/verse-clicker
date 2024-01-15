import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import { AudioProvider } from "../../context/AudioProvider";
import { useTrackedState } from "../../context/store";
import useCampaignInfo from "../../hooks/useCampaignInfo";
import Banner from "../Banners/Banner";
import { themes } from "../themes";
import { ContentsWrapper, GlobalStyle } from "./styled";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { gameMode: network, showCampaignBanner = true } = useTrackedState();
  const { campaignPhase } = useCampaignInfo("LunarNewYear");

  return (
    <ThemeProvider theme={themes[network]}>
      <AudioProvider>
        <ContentsWrapper>
          <GlobalStyle />
          {showCampaignBanner && campaignPhase !== "AFTER" && (
            <Banner gameMode={network} />
          )}
          {children}
        </ContentsWrapper>
      </AudioProvider>
    </ThemeProvider>
  );
};

export default Layout;

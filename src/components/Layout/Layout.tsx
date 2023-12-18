import React, { FC, PropsWithChildren } from "react";
import { ContentsWrapper, GlobalStyle } from "./styled";
import { AudioProvider } from "../../context/AudioProvider";
import { useTrackedState } from "../../context/store";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";
import ClickmasBanner from "../Banners/ClickmasBanner";
import useCampaignInfo from "../../hooks/useCampaignInfo";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { gameMode: network, showCampaignBanner = true } = useTrackedState();
  const { campaignPhase } = useCampaignInfo("Christmas");

  return (
    <ThemeProvider theme={themes[network]}>
      <AudioProvider>
        <ContentsWrapper>
          <GlobalStyle />
          {showCampaignBanner && campaignPhase !== "AFTER" && (
            <ClickmasBanner />
          )}
          {children}
        </ContentsWrapper>
      </AudioProvider>
    </ThemeProvider>
  );
};

export default Layout;

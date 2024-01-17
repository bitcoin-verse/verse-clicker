import React, { FC } from "react";

import { CampaignInfo } from "../../hooks/useCampaignInfo";
import { H3 } from "../H3";
import { Label } from "../Label";
import LinkButton from "../LinkButton";
import { Text } from "../Text";
import { BeforeCampaignJson } from "./types";

interface Props {
  campaignInfo?: CampaignInfo;
  content: BeforeCampaignJson;
}

const Before: FC<Props> = ({ campaignInfo, content }) => {
  return (
    <>
      <H3>{content.title}</H3>
      <Label>{content.label1}</Label>
      <Label $color="secondary">{content.label2}</Label>
      {campaignInfo && (
        <>
          <Text>
            {content.start}
            {new Date(campaignInfo.startDate).toLocaleString()}
          </Text>
          <Text>
            {content.end}
            {new Date(campaignInfo.endDate).toLocaleString()}
          </Text>
        </>
      )}
      <LinkButton href={content.link} newTab>
        {content.learnMore}
      </LinkButton>
    </>
  );
};

export default Before;

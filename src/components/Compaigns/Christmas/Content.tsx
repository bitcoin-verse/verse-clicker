import React from "react";
import { useTrackedState } from "../../../context/store";
import useCampaignInfo, { CampaignPhase } from "../../../hooks/useCampaignInfo";
import { H3 } from "../../H3";
import { Label } from "../../Label";
import { LinkButton } from "../../LinkButton";

const getCampaignContent = (campaignPhase: CampaignPhase) => {
  switch (campaignPhase) {
    case "BEFORE":
      return {
        title: "🌟 Clickmas is Coming Soon! 🌟",
        body1: "$1000 up for grabs! 💸",
        body2:
          "Get ready for an epic holiday event! Clickmas, the ultimate clicking challenge, is almost here. Prepare to click, earn, and win big with VERSE!",
        button: "📖 Learn more",
        link: "",
      };
    case "DURING":
      return {
        title: "🎉 Clickmas is Here! Join the Fun! 🎉",
        body1: "$1000 Prize Pool 🤑",
        body2:
          "The wait is over! Dive into the world of Verse Clicker, earn points, and win amazing rewards in VERSE. Ready, set, click!",
        button: "🎮 Start Clicking",
        link: `${process.env.PUBLIC_URL}?campaign=Christmas`,
        button2: "📖 Learn more",
        link2: "",
      };
    case "AFTER":
      return {
        title: "🏆 Clickmas Has Concluded! 🏆",
        body2:
          "Thank you for participating in Clickmas! The event may be over, but the excitement continues. Check out the leaderboard to see where you stand. Prizes will be paid out in January.",
        button: "🏅 See Leaderboard",
        link: `${process.env.PUBLIC_URL}?campaign=Christmas`,
      };
  }
};
const Content = () => {
  const { campaignPhase } = useCampaignInfo("Christmas");
  const { gameMode } = useTrackedState();

  const { title, body1, body2, link, link2, button, button2 } =
    getCampaignContent(campaignPhase);

  return (
    <>
      <H3>{title}</H3>
      {body1 && <Label>{body1}</Label>}
      <Label $color="secondary">{body2}</Label>
      <LinkButton href={link}>{button}</LinkButton>
      {button2 && <LinkButton href={link2}>{button2}</LinkButton>}
    </>
  );
};

export default Content;

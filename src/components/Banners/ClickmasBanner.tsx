import React, { FunctionComponent } from "react";

import { useDispatch } from "../../context/store";

import Cross from "../Icons/Cross";
import { Wrapper } from "./styled";
import { Link } from "../Link";

const ClickmasBanner: FunctionComponent = () => {
  const dispatch = useDispatch();

  const link =
    "https://medium.com/@Bitcoin_Com/get-ready-for-clickmas-where-clicks-turn-to-rewards-1000-up-for-grabs-e87438a9772b";

  const hideBanner = () => {
    dispatch({
      type: "SET_SHOW_CAMPAIGN_BANNER",
      payload: false,
    });
  };

  return (
    <Wrapper>
      <div>
        🎅 Merry Clickmas! 🎅 Turn clicks into rewards — $1000 up for grabs!
        Contest period: Dec 22 - Jan 5 👉{" "}
        <Link href={link} target="_blank">
          Learn more
        </Link>
      </div>
      <Cross pointer size={12} onClick={hideBanner} />
    </Wrapper>
  );
};

export default ClickmasBanner;

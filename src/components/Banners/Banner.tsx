import React, { FunctionComponent } from "react";
import { GameMode } from "src/context/reducers/network";

import { useDispatch } from "../../context/store";
import Cross from "../Icons/Cross";
import { Link } from "../Link";
import bannerJson from "./banner.json";
import { Wrapper } from "./styled";

interface Props {
  gameMode: GameMode;
}

const Banner: FunctionComponent<Props> = ({ gameMode }) => {
  const dispatch = useDispatch();
  const campaign = bannerJson.find((banner) => banner.id === "LunarNewYear");

  const hideBanner = () => {
    dispatch({
      type: "SET_SHOW_CAMPAIGN_BANNER",
      payload: false,
    });
  };

  return (
    <Wrapper>
      <div>
        {campaign?.text}
        <Link href={campaign?.link} target="_blank">
          Learn more
        </Link>
      </div>
      <Cross pointer size={12} onClick={hideBanner} />
    </Wrapper>
  );
};

export default Banner;

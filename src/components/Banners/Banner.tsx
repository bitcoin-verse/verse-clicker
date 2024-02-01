import React, { FunctionComponent } from "react";
import { CURRENT_CAMPAIGN } from "src/constants";

import { useDispatch } from "../../context/store";
import Cross from "../Icons/Cross";
import { Link } from "../Link";
import bannerJson from "./banner.json";
import { Wrapper } from "./styled";

const Banner: FunctionComponent = () => {
  const dispatch = useDispatch();
  const campaign = bannerJson.find((banner) => banner.id === CURRENT_CAMPAIGN);

  const hideBanner = () => {
    dispatch({
      type: "SET_SETTINGS",
      payload: { campaignBanner: false },
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

import React from "react";
import { Content, Wrapper } from "./styled";
import Trophy from "../Icons/Trophy";
import Info from "../Icons/Info";
import Gear from "../Icons/Gear";
import Map from "../Icons/Map";

const Sidebar = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <Trophy />
        </div>
        <div>
          <Info />
        </div>
        <div>
          <Map />
        </div>
        <div>
          <Gear />
        </div>
      </Content>
    </Wrapper>
  );
};

export default Sidebar;

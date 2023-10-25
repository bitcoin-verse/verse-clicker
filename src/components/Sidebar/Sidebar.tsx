import React from "react";
import { Content, SidebarButton, Wrapper } from "./styled";
import Trophy from "../Icons/Trophy";
import Info from "../Icons/Info";
import Gear from "../Icons/Gear";
import Map from "../Icons/Map";

const Sidebar = () => {
  return (
    <Wrapper>
      <Content>
        <SidebarButton>
          <Trophy size="1rem" />
        </SidebarButton>
        <SidebarButton>
          <Info size="1rem" />
        </SidebarButton>
        <SidebarButton>
          <Map size="1rem" />
        </SidebarButton>
        <SidebarButton>
          <Gear size="1rem" />
        </SidebarButton>
      </Content>
    </Wrapper>
  );
};

export default Sidebar;

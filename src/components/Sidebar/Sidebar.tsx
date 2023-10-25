import React from "react";
import { SidebarButton, Wrapper } from "./styled";
import Trophy from "../Icons/Trophy";
import Info from "../Icons/Info";
import Gear from "../Icons/Gear";
import Map from "../Icons/Map";

const Sidebar = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Sidebar;

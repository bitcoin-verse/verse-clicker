import React from "react";
import { Content, Wrapper } from "./styled";
import Trophy from "../Icons/Trophy";
import Info from "../Icons/Info";

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
        <div>1</div>
        <div>1</div>
      </Content>
    </Wrapper>
  );
};

export default Sidebar;

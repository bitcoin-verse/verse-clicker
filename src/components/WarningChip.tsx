import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { useTrackedState } from "../context/store";
import { logAmplitudeEvent } from "../helpers/analytics";
import ChevronLeft from "./Icons/ChevronLeft";
import Info from "./Icons/Info";
import { colors } from "./colors";

const Wrapper = styled.a`
  background-color: ${colors.yellow25};
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 0.5rem;

  text-decoration: none;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & > svg {
    color: ${colors.yellow100};
  }
`;
interface Props {
  link: string;
}

const WarningChip: FC<PropsWithChildren<Props>> = ({ children, link }) => {
  const { isWallet } = useTrackedState();
  return (
    <Wrapper
      href={link}
      {...(isWallet && link.includes("verse.bitcoin.com")
        ? {}
        : {
            target: "_blank",
            rel: "noreferrer",
          })}
      onClick={() => {
        logAmplitudeEvent({
          name: "verse clicker cta tapped",
          cta: "buy",
          to: link,
        });
      }}
    >
      <Info />
      {children}
      <ChevronLeft flip />
    </Wrapper>
  );
};

export default WarningChip;

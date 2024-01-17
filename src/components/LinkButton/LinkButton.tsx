import React, { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";

import { StyledLinkButton } from "./styled";

interface Props extends ComponentPropsWithoutRef<"a"> {
  design?: "primary" | "secondary";
  newTab?: boolean;
}

const LinkButton: FC<PropsWithChildren<Props>> = ({
  children,
  design = "primary",
  newTab = false,
  ...rest
}) => {
  return (
    <StyledLinkButton
      $design={design}
      {...(newTab
        ? {
            target: "_blank",
            rel: "noreferrer",
          }
        : {})}
      {...rest}
    >
      {children}
    </StyledLinkButton>
  );
};

export default LinkButton;

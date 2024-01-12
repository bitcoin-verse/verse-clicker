import React, { FC } from "react";

import bcomLogo from "../../assets/bcom-logo.png";
import {
  Content,
  Copyright,
  Link,
  LinksWrapper,
  Logo,
  LogoLinkWrapper,
  Wrapper,
} from "./styled";

const links = [
  {
    label: "User Agreement",
    url: "https://www.bitcoin.com/legal/user-agreement/",
  },
  { label: "Cookie Policy", url: "https://www.bitcoin.com/legal/cookies/" },
  {
    label: "Need Help?",
    url: "https://support.bitcoin.com/en/collections/3413550-verse-dex",
  },
];

const Footer: FC = () => {
  return (
    <Wrapper>
      <Content>
        <LogoLinkWrapper>
          <a href="https://www.bitcoin.com" target="_blank" rel="noreferrer">
            <Logo src={bcomLogo} alt="Bitcoin.com" />
          </a>
          <LinksWrapper>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </Link>
            ))}
          </LinksWrapper>
        </LogoLinkWrapper>
        <Copyright>
          © 2023 Saint Bitts LLC Bitcoin.com. All rights reserved.
        </Copyright>
      </Content>
    </Wrapper>
  );
};

export default Footer;

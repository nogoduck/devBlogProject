import React from "react";
import {
  Container,
  BugSet,
  GitHubLink,
  LogoSection,
  Label,
  Gap,
  ContentContainer,
  Content,
} from "./styled";
import { AiOutlineBug } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

import Logo from "../../components/TopNav/LeftItem/Logo";

function Footer() {
  return (
    <Container>
      <LogoSection>
        <Logo style={{ top: 0, left: 0 }} />
        <BugSet>
          <Gap />
          <AiOutlineBug
            style={{
              color: "#d4d6d9",
              fontSize: "20px",
              transform: "rotate(140deg)",
              position: "absolute",
              top: "0px",
              right: "62px",
            }}
          />
          <AiOutlineBug
            style={{
              color: "#d4d6d9",
              fontSize: "24px",
              transform: "rotate(100deg)",
              position: "absolute",
              top: "22px",
              right: "30px",
            }}
          />
          <AiOutlineBug
            style={{
              color: "#d4d6d9",
              fontSize: "64px",
              transform: "rotate(120deg)",
              position: "absolute",
              top: "16px",
              right: "-44px",
            }}
          />
        </BugSet>
      </LogoSection>
      <hr />
      <br />
      <ContentContainer>
        <div>
          <Label>Email</Label>
          <br />
          <Content>nogoad22@gmail.com</Content>
        </div>
        <div>
          <Content>
            <GitHubLink>
              <a
                href="https://github.com/nogoduck"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                <Label>Github</Label>
                <BiLinkExternal
                  style={{
                    fontSize: "16px",
                    display: "inline-block",
                    color: "#000",
                    marginTop: "2px",
                  }}
                />
              </a>
            </GitHubLink>
          </Content>
        </div>
      </ContentContainer>
    </Container>
  );
}

export default Footer;

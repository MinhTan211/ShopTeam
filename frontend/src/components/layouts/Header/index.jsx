import React from "react";
import styled from "styled-components";
import { LIElement, ULElement } from "../Footer/style";
import Logo from "../Logo/index";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 7px;
`;

const LogoContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  background-color: blue;
`;

function Index() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <ContentContainer>
          <ULElement>
            <LIElement>Home</LIElement>
            <LIElement>Contact</LIElement>
            <LIElement>Tra</LIElement>
          </ULElement>
        </ContentContainer>
      </HeaderContainer>
    </>
  );
}

export default Index;

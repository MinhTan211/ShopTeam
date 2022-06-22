import React from "react";
import styled, { keyframes } from "styled-components";
import {
  BGContentShopTeam,
  DiamondContainerBottom,
  DiamondContainerLeft,
  DiamondContainerTop,
  LOGOBGContainer,
  ShopTeamContentContainer,
} from "./style";

const LogoContainer = styled.div`
  width: 125px;
  height: 100%;
  position: relative;
  &:hover ${DiamondContainerTop} {
    top: 30px;
    width: 6px;
    height: 6px;
    transition: top 2s, width 1s, height 1s;
  }
  &:hover ${DiamondContainerLeft} {
    left: 26px;
    width: 8px;
    height: 8px;
    transition: left 2s, width 1s, height 1s;
  }
  &:hover ${DiamondContainerBottom} {
    bottom: 30px;
    opacity: 0;
    transition: bottom 2s, opacity 2s;
  }
  &:hover ${LOGOBGContainer} {
    border-top-color: #fff;
    border-right-color: #fff;
    transition-delay: 0s;
    transform: rotate(90deg);
  }
  &:hover ${BGContentShopTeam} {
    background: none;
    transition-delay: 1s;
  }
  &:hover ${ShopTeamContentContainer} {
    background: rgb(12, 189, 189);
    background: linear-gradient(
      90deg,
      rgba(12, 189, 189, 1) 0%,
      rgba(11, 149, 149, 1) 50%,
      rgba(6, 82, 82, 1) 100%
    );
    font-weight: bold;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function Index() {
  return (
    <>
      <LogoContainer>
        <LOGOBGContainer>
          <DiamondContainerTop />
          <DiamondContainerLeft />
          <DiamondContainerBottom />
        </LOGOBGContainer>
        <BGContentShopTeam>
          <ShopTeamContentContainer>SHOP TEAM</ShopTeamContentContainer>
        </BGContentShopTeam>
      </LogoContainer>
    </>
  );
}

export default Index;

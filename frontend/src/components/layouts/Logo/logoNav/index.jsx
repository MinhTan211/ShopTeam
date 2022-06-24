import React from "react";
import {
  BGContentShopTeam,
  DiamondContainerBottom,
  DiamondContainerLeft,
  DiamondContainerTop,
  LOGOBGContainer,
  LogoContainer,
  ShopTeamContentContainer,
} from "./style";

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

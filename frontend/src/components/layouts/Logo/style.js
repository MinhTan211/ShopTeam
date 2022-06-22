import styled from "styled-components";

export const LOGOBGContainer = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #0cc9c9;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: border 1s, transform 1s;
  transition-delay: 1s;
`;

export const ContentContainer = styled.div`
  transform: rotate(-45deg);
  font-size: 20px;
  color: #0cc9c9;
`;

export const DiamondContainerTop = styled.div`
  width: 4px;
  height: 4px;
  background-color: #0cc9c9;
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 100%;
  transition: top 2s;
`;

export const DiamondContainerLeft = styled.div`
  width: 6px;
  height: 6px;
  background-color: #0cc9c9;
  position: absolute;
  bottom: 5px;
  left: 5px;
  border-radius: 100%;
  transition: left 2s;
`;

export const DiamondContainerBottom = styled.div`
  width: 8px;
  height: 8px;
  background-color: #0cc9c9;
  position: absolute;
  bottom: 5px;
  right: 5px;
  border-radius: 100%;
  transition: bottom 2s, opacity 2s;
`;

export const BGContentShopTeam = styled.div`
  background-color: #fff;
  position: absolute;
  border-radius: 20px;
  top: 13px;
  left: 20px;
  transition-delay: 1s;
`;

export const ShopTeamContentContainer = styled.div`
  font-size: 20px;
  color: #0cc9c9;
  background: rgb(6, 82, 82);
  background: linear-gradient(
    90deg,
    rgba(6, 82, 82, 1) 0%,
    rgba(11, 149, 149, 1) 50%,
    rgba(12, 201, 201, 1) 100%
  );
  font-family: "Courier New", Courier, monospace;
  word-spacing: -9px;
  font-weight: bold;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background 2s;
`;

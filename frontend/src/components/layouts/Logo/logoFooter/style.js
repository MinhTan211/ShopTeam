import styled from "styled-components";
const color = "#0cc9c9";

export const LOGOBGContainer = styled.div`
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: border 1s, transform 1s;
  transition-delay: 1s;
  border: 10px solid ${color};
`;

export const ContentContainer = styled.div`
  transform: rotate(-45deg);
  font-size: 20px;
  color: ${color};
`;

export const DiamondContainerTop = styled.div`
  width: 8px;
  height: 8px;
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 100%;
  transition: top 2s;

  background-color: ${color};
`;

export const DiamondContainerLeft = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  border-radius: 100%;
  transition: left 2s;

  background-color: ${color};
`;

export const DiamondContainerBottom = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  border-radius: 100%;
  transition: bottom 2s, opacity 2s;
  @media only screen and (min-width: 900px) {
    background-color: ${color};
  }
  @media only screen and (max-width: 900px) {
    background-color: #fff;
  }
`;

export const BGContentShopTeam = styled.div`
  position: absolute;
  border-radius: 20px;
  top: 26px;
  left: 40px;
  transition-delay: 1s;
  background-color: #323434;
`;

export const ShopTeamContentContainer = styled.div`
  font-size: 40px;
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

  font-family: "Courier New", Courier, monospace;
  word-spacing: -9px;
  font-weight: bold;
  transition: background 2s;
`;

export const LogoContainer = styled.div`
  width: 250px;
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
    transition-delay: 0s;
    transform: rotate(90deg);
    border-top-color: transparent;
    border-right-color: transparent;
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

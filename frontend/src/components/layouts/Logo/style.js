import styled from "styled-components";
const color = "#0cc9c9";

export const LOGOBGContainer = styled.div`
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: border 1s, transform 1s;
  transition-delay: 1s;
  @media only screen and (min-width: 900px) {
    border: 5px solid ${color};
  }
  @media only screen and (max-width: 900px) {
    border: 5px solid #fff;
  }
`;

export const ContentContainer = styled.div`
  transform: rotate(-45deg);
  font-size: 20px;
  color: ${color};
`;

export const DiamondContainerTop = styled.div`
  width: 4px;
  height: 4px;
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 100%;
  transition: top 2s;
  @media only screen and (min-width: 900px) {
    background-color: ${color};
  }
  @media only screen and (max-width: 900px) {
    background-color: #fff;
  }
`;

export const DiamondContainerLeft = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  border-radius: 100%;
  transition: left 2s;
  @media only screen and (min-width: 900px) {
    background-color: ${color};
  }
  @media only screen and (max-width: 900px) {
    background-color: #fff;
  }
`;

export const DiamondContainerBottom = styled.div`
  width: 8px;
  height: 8px;
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
  top: 13px;
  left: 20px;
  transition-delay: 1s;
  @media only screen and (min-width: 900px) {
    background-color: #fff;
  }
  @media only screen and (max-width: 900px) {
    background-color: ${color};
  }
`;

export const ShopTeamContentContainer = styled.div`
  font-size: 20px;
  @media only screen and (min-width: 900px) {
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
  @media only screen and (max-width: 900px) {
    background: #fff;
    font-weight: bold;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  font-family: "Courier New", Courier, monospace;
  word-spacing: -9px;
  font-weight: bold;
  transition: background 2s;
`;

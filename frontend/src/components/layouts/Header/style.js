import { Link } from "react-router-dom";
import styled from "styled-components";

const color = "#0cc9c9";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  /* Responsive*/
  @media only screen and (min-width: 1200px) {
    margin-left: 5%;
    margin-right: 5%;
  }
  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    margin-left: 3%;
    margin-right: 3%;
  }
  @media only screen and (max-width: 900px) {
    margin-left: 1%;
    margin-right: 1%;
  }
`;

export const LOGOContainer = styled.div`
  width: 125px;
  height: 100%;
  @media only screen and (max-width: 900px) {
    margin-left: 3%;
  }
`;

export const MenuBarContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 900px) {
    position: relative;
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
    padding-right: 10px;
  }
`;

export const ULElement = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const LIElement = styled.li`
  text-decoration: none;
  font-size: 16px;
  flex-grow: 1;
  @media only screen and (max-width: 900px) {
    padding: 10px 15px;
  }
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: "Fira Sans", sans-serif;
  color: ${(props) => (props.primary ? "#0cc9c9" : "black")};
  display: inline-block;
  &:hover {
    color: ${color};
  }

  &::after {
    content: "";
    width: 0px;
    height: 1px;
    display: block;
    background: ${color};
    transition: 300ms;
  }
  &:hover::after {
    width: 100%;
  }

  @media only screen and (max-width: 900px) {
    color: #fff;
    &:hover {
      color: #065252;
    }
    &::after {
      background: #065252;
    }
  }
`;

export const FaBarsConatiner = styled.div`
  @media only screen and (min-width: 900px) {
    display: none;
  }
  @media only screen and (max-width: 900px) {
    display: inline-block;
    color: #fff;
    margin-right: ${(props) => (props.fabar ? "0px" : "50px")};
    &::after {
      content: "";
      height: 1px;
      width: 0px;
      display: block;
      transition: 300ms;
      background-color: #065252;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover {
      color: #065252;
    }
  }
`;

export const MenuHidenContainer = styled.div`
  @media only screen and (min-width: 900px) {
    display: none;
  }
  @media only screen and (max-width: 900px) {
    display: block;
    position: absolute;
    background-color: ${color};
    width: 400px;
    height: 100%;
    box-shadow: 2px 0px 5px white;
    top: 0;
    box-sizing: border-box;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 1s, opacity 1s;
  }
`;

export const ContentMenuHiden = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LOGOMenuHidenContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const TitlePage = styled.span`
  font-size: 30px;
  color: #065252;
  margin-top: 45px;
  margin-left: 15px;
`;

export const ULMenuHidenContainer = styled.ul`
  margin: 0;
  margin-top: 5px;
  list-style-type: circle;
`;

export const OpacityContainer = styled.div`
  @media only screen and (min-width: 900px) {
    display: none;
  }
  @media only screen and (max-width: 900px) {
    display: block;
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    top: 0;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  padding: 17px 0px;
  box-shadow: 0 2px 5px 0 rgba(175, 175, 175, 0.3);
  background-color: #fff;
  @media only screen and (max-width: 900px) {
    background-color: ${color};
  }
`;

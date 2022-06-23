import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaBars,
  FaSearch,
  FaShoppingBasket,
  FaUserCircle,
} from "react-icons/fa";
import Logo from "../Logo/index";
import { useState } from "react";

const color = "#0cc9c9";

const NavContainer = styled.div`
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

const LOGOContainer = styled.div`
  width: 125px;
  height: 100%;
  @media only screen and (max-width: 900px) {
    margin-left: 3%;
  }
`;

const MenuBarContainer = styled.div`
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

const ULElement = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const LIElement = styled.li`
  text-decoration: none;
  font-size: 16px;
  flex-grow: 1;
  @media only screen and (max-width: 900px) {
    padding: 10px 15px;
  }
`;

const LinkContainer = styled(Link)`
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

const FaBarsConatiner = styled.div`
  @media only screen and (min-width: 900px) {
    display: none;
  }
  @media only screen and (max-width: 900px) {
    display: inline-block;
    color: ${color};
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

const MenuHidenContainer = styled.div`
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

const ContentMenuHiden = styled.div`
  display: flex;
  flex-direction: column;
`;

const LOGOMenuHidenContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const TitlePage = styled.span`
  font-size: 30px;
  color: #065252;
  margin-top: 45px;
`;

const ULMenuHidenContainer = styled.ul`
  margin: 0;
  margin-top: 5px;
  list-style-type: circle;
`;

const OpacityContainer = styled.div`
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
  height: 100%;
  padding: 17px 0px;
  box-shadow: 0 2px 5px 0 rgba(175, 175, 175, 0.3);
`;

export const Menubar = function () {
  const [checkedMenu, setCheckedMenu] = useState(false);

  function handlerOnclickForMenu() {
    setCheckedMenu(!checkedMenu);
  }

  function handlerStyleForMenu() {
    if (checkedMenu) {
      return {
        opacity: 1,
        transform: "translateX(0%)",
      };
    } else {
      return {
        opacity: 0,
        transform: "translateX(-100%)",
      };
    }
  }

  function handlerStyleForOpacityContainer() {
    if (checkedMenu) {
      return {
        opacity: 0.6,
        display: "block",
      };
    } else {
      return {
        opacity: 0,
        display: "none",
      };
    }
  }

  return (
    <>
      <NavContainer>
        <LOGOContainer>
          <Logo />
        </LOGOContainer>
        <MenuBarContainer>
          <ULElement>
            <LIElement>
              <LinkContainer primary="true" to="admin/user">
                Home
              </LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer to="">Shop</LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer to="">Blog</LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer to="">Contact</LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer to="">Seller Channel</LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer to="">
                <FaUserCircle />
              </LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer to="">
                <FaShoppingBasket />
              </LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer to="">
                <FaSearch />
              </LinkContainer>
            </LIElement>
          </ULElement>
          <FaBarsConatiner>
            <FaUserCircle />
          </FaBarsConatiner>
          <FaBarsConatiner>
            <FaShoppingBasket />
          </FaBarsConatiner>
          <FaBarsConatiner fabar onClick={() => handlerOnclickForMenu()}>
            <FaBars />
          </FaBarsConatiner>
        </MenuBarContainer>
      </NavContainer>
      <OpacityContainer
        style={handlerStyleForOpacityContainer()}
        onClick={() => handlerOnclickForMenu()}
      />
      <MenuHidenContainer style={handlerStyleForMenu()}>
        <ContentMenuHiden>
          <LOGOMenuHidenContainer>
            <Logo />
          </LOGOMenuHidenContainer>
          <TitlePage>PAGE</TitlePage>
          <ULMenuHidenContainer>
            <LIElement>
              <LinkContainer primary="true" to="">
                Home
              </LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer primary="true" to="">
                Shop
              </LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer primary="true" to="">
                Blog
              </LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer primary="true" to="">
                Contact
              </LinkContainer>
            </LIElement>
            <LIElement>
              <LinkContainer primary="true" to="">
                Seller Channel
              </LinkContainer>
            </LIElement>
          </ULMenuHidenContainer>
        </ContentMenuHiden>
      </MenuHidenContainer>
    </>
  );
};

import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingBasket,
  FaUserCircle,
} from "react-icons/fa";
import {
  ContentMenuHiden,
  FaBarsConatiner,
  HeaderContainer,
  LIElement,
  LinkContainer,
  LOGOContainer,
  LOGOMenuHidenContainer,
  MenuBarContainer,
  MenuHidenContainer,
  NavContainer,
  OpacityContainer,
  TitlePage,
  ULElement,
  ULMenuHidenContainer,
} from "../Header/style";
import Logo from "../Logo/logoNav/index";

function Index() {
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
      <HeaderContainer>
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
      </HeaderContainer>
    </>
  );
}

export default Index;

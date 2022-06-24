import React from "react";
import {
  BlockContentDiscription,
  BlockContentFooter,
  BlockContentOur,
  BlockLOGOFooter,
  BlockTitleOur,
  ButtonContact,
  ConatainerContentFooter,
  ContainerFooter,
  ContentFollower,
  ContentInputContact,
  ContentOurFooter,
  ImageFollower,
} from "./style";
import LOGO from "../Logo/logoFooter/index";

import {
  FaCcMastercard,
  FaCcVisa,
  FaInstagram,
  FaMailBulk,
  FaPhoneAlt,
  FaSearchLocation,
} from "react-icons/fa";

function Index() {
  return (
    <>
      <ContainerFooter>
        <ConatainerContentFooter>
          <BlockContentFooter>
            <BlockLOGOFooter>
              <LOGO />
            </BlockLOGOFooter>
            <BlockContentDiscription margin size="true">
              ShopeTeam - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn
              và miễn phí!
            </BlockContentDiscription>
            <BlockContentDiscription white>
              <FaMailBulk style={{ paddingRight: "20px" }} /> shopteam@gmail.com
            </BlockContentDiscription>
            <BlockContentDiscription white>
              <FaPhoneAlt style={{ paddingRight: "20px" }} />
              082 875 84 **
            </BlockContentDiscription>
            <BlockContentDiscription white>
              <FaSearchLocation style={{ paddingRight: "20px" }} /> 06 Tran Van
              On, Phu Hoa, Thu Dau Mot, Binh Duong
            </BlockContentDiscription>
          </BlockContentFooter>
          <BlockContentFooter marginTop>
            <BlockTitleOur>Subscribe to our Newsletter</BlockTitleOur>
            <ContentOurFooter linehigh indent>
              If you are looking for a website to buy and sell online, Shopee.vn
              is a great choice for you. The essence of Shopee is a social
              E-commerce platform - an e-commerce website platform that
              integrates social networks. This allows buyers and sellers to
              easily interact and exchange information about the shop's products
              and promotions.Thanks to that platform, buying and selling on
              Shopee becomes faster and simpler. You can chat directly with the
              seller to ask directly about the item to buy. If you want to buy
              genuine and reputable product lines, Shopee Mall is the ideal
              choice for you.
            </ContentOurFooter>
          </BlockContentFooter>
          <BlockContentFooter marginTop>
            <BlockTitleOur>ShopeTeam Co., Ltd</BlockTitleOur>
            <BlockContentDiscription align paddingTop>
              Address: Floor 4-5-6, Capital Place Building, No. 29 Lieu Giai
              Street, Ngoc Khanh Ward, Ba Dinh District, Hanoi City, Vietnam
            </BlockContentDiscription>
            <BlockContentDiscription align paddingTop>
              Responsible for Content Management: Nguyen Duc Tri - Contact
              phone: 024 73081221 (ext 4678)
            </BlockContentDiscription>
            <BlockContentDiscription align paddingTop>
              Enterprise code: 0106773786 issued by Hanoi Department of Planning
              and Investment for the first time on February 10, 2015
            </BlockContentDiscription>
          </BlockContentFooter>
          <BlockContentFooter marginTop>
            <BlockTitleOur>Contact Us</BlockTitleOur>
            <ContentOurFooter>
              <BlockContentDiscription center>
                Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho
              </BlockContentDiscription>
              <BlockContentDiscription center>
                <ContentInputContact
                  margin
                  placeholder="Your email address..."
                />
                <ButtonContact>Subscribe</ButtonContact>
              </BlockContentDiscription>
            </ContentOurFooter>
          </BlockContentFooter>
        </ConatainerContentFooter>
      </ContainerFooter>
    </>
  );
}

export default Index;

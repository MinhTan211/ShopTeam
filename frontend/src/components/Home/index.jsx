import React from "react";
import styled from "styled-components";
import Hearder from "../layouts/Header/index";
import Footer from "../layouts/Footer/index";

const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
`;

function Index() {
  return (
    <>
      <ContainerHome>
        <Hearder />
        <Footer />
      </ContainerHome>
    </>
  );
}

export default Index;

import React from "react";
import styled from "styled-components";
import Hearder from "../layouts/Header/index";
import Footer from "../layouts/Footer/index";
import { ContainerHeader } from "./style";

const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function Index() {
  return (
    <>
      <ContainerHome>
        <ContainerHeader>
          <Hearder />
        </ContainerHeader>

        <div>This section</div>
        <Footer />
      </ContainerHome>
    </>
  );
}

export default Index;

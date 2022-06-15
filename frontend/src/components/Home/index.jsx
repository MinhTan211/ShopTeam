import React from "react";
import styled from "styled-components";

const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function Home() {
  return <ContainerHome>This is HOme</ContainerHome>;
}

export default Home;

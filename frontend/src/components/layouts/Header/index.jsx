import React from "react";
import { HeaderContainer, Menubar } from "../Header/style";

function Index() {
  return (
    <>
      <HeaderContainer>
        {/** Responsive by service have sreen from  900px to > 1200px*/}
        <Menubar />
      </HeaderContainer>
    </>
  );
}

export default Index;

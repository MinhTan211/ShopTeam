import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: #323434;
  color: #fff;
`;

export const ConatainerContentFooter = styled.div`
  margin: 0px 8%;
  padding: 5% 0;
  display: flex;
  flex-wrap: wrap;
`;

export const BlockContentFooter = styled.div`
  flex-grow: 1;
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.marginTop ? "50px" : "")};
`;

export const BlockLOGOFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const BlockContentDiscription = styled.div`
  height: 40px;
  color: ${(props) => (props.white ? "white" : "#808181")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.center ? "center" : "")};
  font-size: ${(props) => (props.size ? "18px" : "16px")};
  flex-grow: 1;
  text-align: ${(props) => (props.align ? "center" : "")};
  padding-top: ${(props) => (props.paddingTop ? "10px" : "")};
  margin: ${(props) => (props.margin ? "50px 0px 20px 0px" : "0px")};
`;

export const BlockTitleOur = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;
export const BlockContentOur = styled.div`
  height: 50px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ContentOurFooter = styled.span`
  color: ${(props) => (props.white ? "white" : "#808181")};
  line-height: ${(props) => (props.linehigh ? "35px" : "")};
  text-indent: ${(props) => (props.indent ? "35px" : "")};
`;

export const ContentInputContact = styled.input`
  border: none;
  width: 300px;
  padding: 10px;
  outline: none;
  margin-top: ${(props) => (props.margin ? "20px" : "")};
  background-color: #d7d7d7;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ButtonContact = styled.button`
  width: 120px;
  margin-top: 20px;
  padding: 10px;
`;

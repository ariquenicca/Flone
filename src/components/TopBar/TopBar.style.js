import styled from "styled-components";

export const TopBarContainer = styled.div`
  background: pink;
  display: flex;
`;

export const TopBarSubContainer = styled.div`
  background: orange;
  border: black;
  flex: 1;
  margin-left: ${(props) => (props.textAlign == "left" ? "150px" : "0px")};
  margin-right: ${(props) => (props.textAlign == "right" ? "150px" : "0px")};
  text-align: ${(props) => props.textAlign};
`;

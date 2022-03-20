import styled from "styled-components";
export const ItemButton = styled.a`
  background-color: #a749ff;
  color: white;
  padding: 5px;
  flex: ${(props) => props.flex || 1};
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    background: black;
  }
`;

export const ItemButtonContainer = styled.div`
  display: ${(props) => (props.showButtons ? "flex" : "none")};
  position: absolute;
  bottom: 0;
  width: 100%;
`;

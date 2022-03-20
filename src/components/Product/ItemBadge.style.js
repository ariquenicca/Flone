import styled from "styled-components";
export const ItemBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${(props) => (props.isNew ? "#a749ff" : "#fa6bff")};
  padding: 1px 15px;
  border-radius: 5px;
  font-size: 13px;
  color: white;
  text-transform: capitalize;
`;

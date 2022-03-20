import styled from "styled-components";
import MyProductItem from "./ProductItem";
export const ProductItem = styled(MyProductItem)`
  width: 250px;
  text-align: center;
  position: relative;
  margin: 10px;
  & img {
    object-fit: cover;
    width: 250px;
    height: 300px;
  }
`;

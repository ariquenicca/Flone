import styled from "styled-components";

export const Input = styled.input`
  background: transparent;
  font-size: 13px;
  color: #333;
  border: none;
  border-bottom: 2px solid #ebebeb;
  padding: 10px 0;
  width: ${(props) => props.width || "100%"};
  text-align: ${(props) => props.textAlign || "left"};
  margin-bottom: 10px;
  margin-top: 10px;

  &:focus-visible {
    outline: none;
  }
`;

import styled from "styled-components";

export const FooterLink = styled.a`
  font-size: 14px;
  color: #5d5d5d;
  text-decoration: ${(props) => props.textDecoration || "none"};
  display: block;
  margin-top: 5px;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    color: #a749ff;
  }
`;

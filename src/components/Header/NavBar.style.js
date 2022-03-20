import styled from "styled-components";
import MyNavBar from "./NavBar";
export const NavBar = styled(MyNavBar)`
  text-align: center;

  & a {
    font-size: 15px;
    padding: 10px;
    font-weight: 600;
    color: #555252;
    text-decoration: none;
  }

  & a:hover {
    color: #a749ff;
  }

  & svg {
    vertical-align: middle;
  }
`;

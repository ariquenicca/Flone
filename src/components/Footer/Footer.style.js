import { PropaneSharp } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "./Footer";

export const StyledFooter = styled(Footer)`
  background-color: #f6f6f8;
  flex-direction: row;
  display: flex;
  padding: 50px 200px;
  flex-wrap: wrap;

  & h1 {
    color: #313131;
    margin-top: 20px;
  }

  & p {
    font-size: 14px;
  }
`;

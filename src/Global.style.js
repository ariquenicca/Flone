import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        font-family:"Poppins";

        & p, & h4 ,& h1{
            margin-top:5px;
            margin-bottom:15px;
        }
        & body{
            width: 100vw;
            height:100vh;
        }
    }
`;

import styled from "styled-components";
import MySlider from "./Slider";
export const Slider = styled(MySlider)`
    background-image: url("https://template.hasthemes.com/flone/flone/assets/img/slider/slider-22-1.jpg");
    height: 770px;
    background-position: center center;
    background-size: cover;
    & div {
        padding: 170px 100px;
    }
    & p {
        font-size: 24px;
    }

    & h1 {
        font-size: 72px;
        margin: 0px 0 37px;
        width: 50%;
        font-weight: 400;
    }
`;

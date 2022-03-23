import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { FashionSubContainer, FashionTextContainer } from "./Fashion.style";
function FashionWomen() {
    return (
        <FashionSubContainer>
            <img
                src="https://template.hasthemes.com/flone/flone/assets/img/banner/banner-51.png"
                alt=""
            />
            <FashionTextContainer left="50px" textAlign="left">
                <h3>Women Fashion</h3>
                <p>Choose Your Products Here</p>
                <br />
                <a href="">
                    <ArrowRightAltIcon font-size="small" />
                </a>
            </FashionTextContainer>
        </FashionSubContainer>
    );
}

export default FashionWomen;

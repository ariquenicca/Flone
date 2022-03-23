import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { FashionSubContainer, FashionTextContainer } from "./Fashion.style";
function FashionMen() {
    return (
        <FashionSubContainer>
            <img
                src="https://template.hasthemes.com/flone/flone/assets/img/banner/banner-50.png"
                alt=""
            />
            <FashionTextContainer right="50px" textAlign="right">
                <h3>Men Fashion Shop</h3>
                <p>Choose Your Products Here</p>
                <br />
                <a href="">
                    <ArrowRightAltIcon fontSize="small" />
                </a>
            </FashionTextContainer>
        </FashionSubContainer>
    );
}

export default FashionMen;

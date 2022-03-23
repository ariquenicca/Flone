import React from "react";
import FashionMen from "./FashionMen";
import FashionWomen from "./FashionWomen";
import { FashionContainer } from "./Fashion.style";

function Fashion() {
    return (
        <FashionContainer>
            <FashionMen></FashionMen>
            <FashionWomen></FashionWomen>
        </FashionContainer>
    );
}

export default Fashion;

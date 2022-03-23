import React, { useState } from "react";
import { Anchor, StyledArrivals } from "./Arrivals.style";

function Arrivals() {
    const [activeAnchor, setActiveAnchor] = useState(0);
    const handleClick = (e, value) => {
        e.preventDefault();
        setActiveAnchor(value);
    };
    return (
        <StyledArrivals>
            <h1>New Arrivals</h1>
            <div>
                <Anchor
                    href=""
                    onClick={(e) => handleClick(e, 0)}
                    isActive={activeAnchor === 0}
                >
                    New Arrivals
                </Anchor>
                <Anchor
                    href=""
                    onClick={(e) => handleClick(e, 1)}
                    isActive={activeAnchor === 1}
                >
                    Best Sellers
                </Anchor>
                <Anchor
                    href=""
                    onClick={(e) => handleClick(e, 2)}
                    isActive={activeAnchor === 2}
                >
                    Sale Items
                </Anchor>
            </div>
        </StyledArrivals>
    );
}

export default Arrivals;

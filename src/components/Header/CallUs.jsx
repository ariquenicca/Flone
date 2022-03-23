import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider, StyledCallUs } from "./Header.style";

function CallUs() {
    return (
        <StyledCallUs>
            <a href="">
                English <ExpandMoreIcon />
            </a>
            <Divider />
            <a href="">
                USD <ExpandMoreIcon />
            </a>
            <Divider />
            <p>Call Us 3965410</p>
        </StyledCallUs>
    );
}

export default CallUs;

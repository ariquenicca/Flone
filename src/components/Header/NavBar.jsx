import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledNavBar } from "./Header.style";
const NavBar = () => {
    return (
        <StyledNavBar>
            <a href="">
                Home <ExpandMoreIcon />
            </a>
            <a href="">
                Shop <ExpandMoreIcon />
            </a>
            <a href="">Collection</a>
            <a href="">
                Pages <ExpandMoreIcon />
            </a>
            <a href="">
                Blog <ExpandMoreIcon />
            </a>
            <a href="">About</a>
            <a href="">Contract</a>
        </StyledNavBar>
    );
};

export default NavBar;

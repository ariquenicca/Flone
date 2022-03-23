import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { StyledIconNavBar } from "./Header.style";

function IconNavBar() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [cartSize, setCartSize] = useState(0);
    useEffect(() => {
        let partialSize = 0;
        cartItems.map((item) => {
            partialSize += item.count;
        });
        setCartSize(partialSize);
    }, [cartItems]);
    return (
        <StyledIconNavBar>
            <a href="">
                <SearchIcon />
            </a>
            <a href="">
                <AccountCircleOutlinedIcon />
            </a>
            <a href="">
                <FavoriteBorderIcon />
            </a>
            <Link to="/cart">
                <Badge
                    badgeContent={cartSize && String(cartSize).padStart(2, "0")}
                    color="secondary"
                >
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </Link>
        </StyledIconNavBar>
    );
}

export default IconNavBar;

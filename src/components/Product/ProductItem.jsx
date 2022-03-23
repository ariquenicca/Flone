import { useState } from "react";
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Snackbar from "@mui/material/Snackbar";

import {
    StyledProductItem,
    ItemBadge,
    ItemButton,
    ItemButtonContainer,
    ItemImageContainer,
} from "./Product.style";

import { addToCart } from "../../redux/cart";
const ProductItem = ({ data }) => {
    const [showNotification, setShowNotification] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const dispatch = useDispatch();
    const { title, imageUrl, discountedPrice, originalPrice, stars, badge } =
        data;
    const handleClick = (e) => {
        dispatch(addToCart(data));
        setShowNotification(true);
    };
    const handleCloseNotification = () => {
        setShowNotification(false);
    };
    const handleMouseOver = (e) => {
        setShowButtons(true);
    };

    const handleMouseLeave = (e) => {
        setShowButtons(false);
    };
    return (
        <StyledProductItem
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <ItemImageContainer>
                <ItemBadge isNew={badge === "new"}>{badge}</ItemBadge>
                <img src={imageUrl} alt="" />
                <ItemButtonContainer showButtons={showButtons}>
                    <ItemButton>
                        <FavoriteBorderIcon fontSize="small" />
                    </ItemButton>
                    <ItemButton flex="10" onClick={handleClick}>
                        <ShoppingCartOutlinedIcon fontSize="small" />
                        <span> Add To Cart</span>
                    </ItemButton>
                    <ItemButton>
                        <VisibilityIcon fontSize="small" />
                    </ItemButton>
                </ItemButtonContainer>
            </ItemImageContainer>
            <h4>{title}</h4>
            <Rating
                name="half-rating-read"
                defaultValue={stars}
                precision={0.5}
                readOnly
            />
            <h5>
                $ {discountedPrice} - $ {originalPrice}
            </h5>

            <Snackbar
                open={showNotification}
                autoHideDuration={3000}
                onClose={handleCloseNotification}
                message="Added item to cart"
            />
        </StyledProductItem>
    );
};

export default ProductItem;

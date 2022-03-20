import { useState } from "react";
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { ItemBadge } from "./ItemBadge.style";
import { ItemButton, ItemButtonContainer } from "./ItemButton.style";
import { ItemImageContainer } from "./ItemImageContainer.style";

import { addToCart } from "../../redux/cart";
const ProductItem = ({ className, data }) => {
  const [showButtons, setShowButtons] = useState(false);
  const dispatch = useDispatch();
  const { title, imageUrl, discountedPrice, originalPrice, stars, badge } =
    data;
  const handleClick = (e) => {
    dispatch(addToCart(data));
  };
  const handleMouseOver = (e) => {
    setShowButtons(true);
  };

  const handleMouseLeave = (e) => {
    setShowButtons(false);
  };
  return (
    <div
      className={className}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <ItemImageContainer>
        <ItemBadge isNew={badge == "new"}>{badge}</ItemBadge>
        <img src={imageUrl} alt="" />
        <ItemButtonContainer showButtons={showButtons}>
          <ItemButton>
            <FavoriteBorderIcon />
          </ItemButton>
          <ItemButton flex="10" onClick={handleClick}>
            <AddShoppingCartIcon /> Add To Cart
          </ItemButton>
          <ItemButton>
            <VisibilityIcon />
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
    </div>
  );
};

export default ProductItem;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TopBarContainer, TopBarSubContainer } from "./TopBar.style";
const TopBar = () => {
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
    <TopBarContainer>
      <TopBarSubContainer textAlign="left">
        <p>Nicca</p>
      </TopBarSubContainer>

      <TopBarSubContainer textAlign="right">
        <p>{cartSize}</p>
      </TopBarSubContainer>
    </TopBarContainer>
  );
};

export default TopBar;

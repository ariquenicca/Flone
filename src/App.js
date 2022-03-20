import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "./data/data.json";
import { setCategories, setProducts } from "./redux/products";

import { ProductList } from "./components/Product/ProductList.style";

import { AppContainer } from "./components/AppContainer.style";
import { GlobalStyles } from "./Global.style";
import { Header } from "./components/Header/Header.style";
import { StyledFooter } from "./components/Footer/Footer.style";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Review from "./components/Review/Review";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategories(data.categories));
    dispatch(setProducts(data.products));
  }, [data]);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <AppContainer>
      <GlobalStyles />
      <TopBar />
      <Header />
      <ProductList />
      <Review />
      <NewsLetter />
      <StyledFooter />
    </AppContainer>
  );
};

export default App;

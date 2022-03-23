import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./data/data.json";
import { setCategories, setProducts } from "./redux/products";

import { AppContainer } from "./components/AppContainer.style";
import { GlobalStyles } from "./Global.style";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Home from "./Home";

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
        <Router>
            <AppContainer>
                <GlobalStyles />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>

                <Footer />
            </AppContainer>
        </Router>
    );
};

export default App;

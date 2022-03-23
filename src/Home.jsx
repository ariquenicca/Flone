import React from "react";

import ProductList from "./components/Product/ProductList";
import Category from "./components/Category/Category";
import { Slider } from "./components/Slider/Slider.style";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Review from "./components/Review/Review";
import HomeHeader from "./components/Header/HomeHeader";
import Fashion from "./components/Fashion/Fashion";
import Arrivals from "./components/Arrivals/Arrivals";
function Home() {
    return (
        <div>
            <HomeHeader />
            <Slider />
            <Category />
            <Fashion />
            <Arrivals />
            <ProductList />
            <Review />
            <NewsLetter />
        </div>
    );
}

export default Home;

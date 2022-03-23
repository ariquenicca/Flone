import { useSelector } from "react-redux";
import { StyledProductList } from "./Product.style";
import ProductItem from "./ProductItem";

const ProductList = () => {
    var { products } = useSelector((state) => state.product);
    return (
        <StyledProductList>
            {products &&
                products.map((product) => (
                    <ProductItem data={product} key={product.id} />
                ))}
        </StyledProductList>
    );
};

export default ProductList;

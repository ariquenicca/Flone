import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem.style";

const ProductList = ({ className }) => {
  var { products } = useSelector((state) => state.product);
  return (
    <div className={className}>
      {products &&
        products.map((product) => (
          <ProductItem data={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductList;

import { useSelector } from "react-redux";
import { StyledCategory } from "./Category.style";
import CategoryItem from "./CategoryItem";

function Category() {
    var categories = useSelector((state) => state.product.categories);
    return (
        <StyledCategory>
            {categories.map((category) => (
                <CategoryItem
                    title={category.category}
                    imageUrl={category.imageUrl}
                    count={3}
                    key={category.id}
                />
            ))}
        </StyledCategory>
    );
}

export default Category;

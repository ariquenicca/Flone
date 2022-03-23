import { Button } from "../Button.style";
import { StyledCategoryItem } from "./Category.style";
function CategoryItem({ title, imageUrl, count }) {
    return (
        <StyledCategoryItem>
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <p>{count} Products</p>
            <h4>{title}</h4>
            <Button
                size="small"
                backgroundColor="white"
                color="#333"
                withBorder
            >
                SHOP NOW
            </Button>
        </StyledCategoryItem>
    );
}

export default CategoryItem;

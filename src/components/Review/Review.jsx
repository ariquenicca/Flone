import { ReviewContainer } from "./ReviewContainer.style";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";

const Review = () => {
  return (
    <ReviewContainer>
      <img
        src="https://template.hasthemes.com/flone/flone/assets/img/testimonial/testi-1.png"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <AssistantDirectionIcon />
      <p>GRACE ALVARADO</p>
      <p>Customer</p>
    </ReviewContainer>
  );
};

export default Review;

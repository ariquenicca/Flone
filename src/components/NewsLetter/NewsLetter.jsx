import { Button } from "../Button.style";
import { Input } from "../Input.style";
import { NewsLetterContainer } from "./NewsLetter.style";

const NewsLetter = () => {
    return (
        <NewsLetterContainer>
            <h1>Join With Us!</h1>
            <p>Subscribe to our newsletter to receive news on update</p>
            <Input
                type="text"
                placeholder="Your email address"
                width="50%"
                textAlign="center"
            />
            <br />
            <br />
            <Button>SUBSCRIBE</Button>
        </NewsLetterContainer>
    );
};

export default NewsLetter;

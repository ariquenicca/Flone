import { Button } from "../Button.style";

function Slider({ className }) {
    return (
        <div className={className}>
            <div>
                <p>2020 Latest Collection</p>
                <h1>- 40% Offer All Hand & Made</h1>
                <Button withBorder backgroundColor="transparent" color="#333">
                    SHOP NOW
                </Button>
            </div>
        </div>
    );
}

export default Slider;

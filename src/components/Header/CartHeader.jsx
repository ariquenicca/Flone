import { Container } from "../Container.style";
import CallUs from "./CallUs";
import {
    StyledHeader,
    TopBarContainer,
    TopBarSubContainer,
    FlexHeader,
    CustomText,
} from "./Header.style";
import IconNavBar from "./IconNavBar";
import NavBar from "./NavBar";
const CartHeader = () => {
    return (
        <div>
            <Container noMargin>
                <TopBarContainer>
                    <TopBarSubContainer textAlign="left">
                        <CallUs />
                    </TopBarSubContainer>
                    <TopBarSubContainer textAlign="right">
                        <h5>
                            Free delivery on order over
                            <CustomText color="red"> $200</CustomText>
                        </h5>
                    </TopBarSubContainer>
                </TopBarContainer>
            </Container>
            <hr color="#eee" />
            <Container noMargin>
                <StyledHeader>
                    <FlexHeader>
                        <h1>Flone.</h1>
                        <NavBar />
                        <IconNavBar />
                    </FlexHeader>
                </StyledHeader>
            </Container>
        </div>
    );
};

export default CartHeader;

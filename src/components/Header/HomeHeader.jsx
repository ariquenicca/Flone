import { StyledHeader } from "./Header.style";
import NavBar from "./NavBar";
import { TopBarContainer, TopBarSubContainer } from "./Header.style";
import IconNavBar from "./IconNavBar";
import CallUs from "./CallUs";
import { Container } from "../Container.style";
const HomeHeader = () => {
    return (
        <div>
            <Container noMargin>
                <TopBarContainer>
                    <TopBarSubContainer textAlign="left">
                        <CallUs />
                    </TopBarSubContainer>
                    <TopBarSubContainer textAlign="right">
                        <IconNavBar />
                    </TopBarSubContainer>
                </TopBarContainer>
            </Container>
            <hr color="#eee" />
            <Container noMargin>
                <StyledHeader textAlign="center">
                    <h1>Flone.</h1>
                    <NavBar />
                </StyledHeader>
            </Container>
        </div>
    );
};

export default HomeHeader;

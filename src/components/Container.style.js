import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    margin: ${(props) => (props.noMargin ? "0 auto" : " 20px auto")};
`;

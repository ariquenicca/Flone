import styled from "styled-components";

export const StyledArrivals = styled.div`
    text-align: center;
    margin-top: 50px;
`;

export const Anchor = styled.a`
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    color: ${(props) => (props.isActive ? "#000" : "#888")};
    font-weight: 400;
`;

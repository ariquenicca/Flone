import styled from "styled-components";

export const FooterRoot = styled.div`
    background-color: #f6f6f8;
    flex-direction: row;
    display: flex;
    padding: 100px;
    flex-wrap: wrap;

    & h1 {
        color: #313131;
        margin-top: 20px;
    }

    & p {
        font-size: 14px;
    }
`;
export const FooterColumn = styled.div`
    flex: 1;
`;
export const FooterLink = styled.a`
    font-size: 14px;
    color: #5d5d5d;
    text-decoration: ${(props) => props.textDecoration || "none"};
    display: block;
    margin-top: 5px;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover {
        color: #a749ff;
    }
`;

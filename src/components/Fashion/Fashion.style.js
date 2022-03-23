import styled from "styled-components";

export const FashionContainer = styled.div`
    display: flex;
`;

export const FashionSubContainer = styled.div`
    flex: 1;
    height: 200px;
    overflow: hidden;
    position: relative;
    & img {
        height: 200px;
        width: 100%;
        object-fit: cover;
    }
    &:hover img {
        transform: scale(1.2);
    }
`;

export const FashionTextContainer = styled.div`
    text-align: ${(props) => props.textAlign || "left"};
    position: absolute;
    top: 30px;
    right: ${(props) => props.right || "unset"};
    left: ${(props) => props.left || "unset"};
    & a {
        cursor: pointer;
        text-decoration: none;
        border: 2px solid #c61a32;
        color: #c61a32;
        border-radius: 20px;
        padding: 5px;
    }
    & a:hover {
        color: #a749ff;
        border: 2px solid #a749ff;
    }
    & a svg {
        vertical-align: middle;
    }
`;

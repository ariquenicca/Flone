import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => props.backgroundColor || "#c61a32"};
    border: ${(props) =>
        props.withBorder ? "1px solid #333 !important" : "none"};
    color: ${(props) => props.color || "white"};
    padding: ${(props) => (props.size == "small" ? "10px 30px" : "15px 50px")};
    border-radius: 35px;
    border: unset;
    font-size: ${(props) => (props.size == "small" ? "13" : "15px")};

    &:hover {
        background-color: #a749ff;
        color: white;
        border: none !important;
    }
`;

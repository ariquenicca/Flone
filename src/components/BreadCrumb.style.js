import styled from "styled-components";

export const BreadCrumb = styled.div`
    flex: 1;
    background: #f7f7f7;
    color: #222;
    text-align: center;
    padding: 40px;
    font-weight: 500;
    font-size: 15px;
    & a:hover {
        color: #a749ff;
    }
    & a {
        cursor: pointer;
        text-decoration: none;
        color: #222;
    }
`;

import styled from "styled-components";

export const StyledHeader = styled.div`
    text-align: ${(props) => props.textAlign || "left"};
    padding: 20px 0;

    & h1 {
        font-weight: 600;
    }
`;

export const StyledNavBar = styled.div`
    text-align: center;

    & a {
        font-size: 15px;
        padding: 10px;
        font-weight: 500;
        color: #555252;
        text-decoration: none;
    }

    & a:hover {
        color: #a749ff;
    }

    & svg {
        vertical-align: middle;
    }
`;

export const TopBarContainer = styled.div`
    display: flex;
    /* border-bottom: 1px solid #ddd; */
`;
export const Divider = styled.span`
    height: 100%;
    border-right: 1px solid #ddd;
    margin: 0 10px;
`;
export const TopBarSubContainer = styled.div`
    flex: 1;
    text-align: ${(props) => props.textAlign};
    padding: 15px 0;
`;
export const FlexHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    * {
        flex: 1;
        vertical-align: middle;
    }

    *:nth-child(2) {
        flex: 3;
    }
`;

export const StyledIconNavBar = styled.div`
    text-align: right;
    & svg {
        color: #666;
        vertical-align: middle;
    }
    & a:hover svg {
        color: #a749ff;
    }
    & a {
        margin: 5px;
        text-decoration: none;
        color: #555252;
        font-size: 14px;
    }
    & a:hover {
        color: #a749ff;
    }
    & span.MuiBadge-badge {
        background-color: black;
    }
`;
export const StyledCallUs = styled.div`
    & p {
        margin: 0;
        padding: 0;
        margin: 0 10px;
        display: inline;
        color: #555252;
        font-size: 14px;
    }
    & a {
        margin: 5px;
        text-decoration: none;
        color: #555252;
        font-size: 14px;
        vertical-align: middle;
    }
    & a:hover {
        color: #a749ff;
    }
    & svg {
        color: #666;
        vertical-align: middle;
    }
`;
export const CustomText = styled.span`
    color: ${(props) => props.color || "#333"};
`;

import styled from "styled-components";
export const StyledProductList = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    padding: 50px 100px;
    justify-content: center;
`;
export const StyledProductItem = styled.div`
    width: 250px;
    text-align: center;
    position: relative;
    margin: 15px;
    & img {
        object-fit: cover;
        width: 250px;
        transform: scale(1);
        transition: transform 0.2s;
    }
    & span {
        z-index: 10;
    }
    &:hover img {
        transform: scale(1.1);
    }
    & h4 {
        margin-top: 20px;
    }
`;
export const ItemBadge = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: ${(props) => (props.isNew ? "#a749ff" : "#fa6bff")};
    padding: 1px 15px;
    border-radius: 5px;
    font-size: 13px;
    color: white;
    text-transform: capitalize;
`;

export const ItemButton = styled.a`
    background-color: #a749ff;
    color: white;
    padding: 6px 13px;
    flex: ${(props) => props.flex || 1};
    cursor: pointer;
    vertical-align: middle;
    font-size: 16px;
    &:hover {
        background: black;
    }
    & svg {
        vertical-align: middle;
        width: 18px;
        height: 18px;
    }
`;

export const ItemButtonContainer = styled.div`
    display: ${(props) => (props.showButtons ? "flex" : "none")};
    position: absolute;
    bottom: 0;
    width: 100%;
`;
export const ItemImageContainer = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
`;

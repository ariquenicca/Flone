import styled from "styled-components";
export const StyledCategory = styled.div`
    display: flex;
    padding: 100px;
    text-align: center;
`;

export const StyledCategoryItem = styled.div`
    flex: 1;
    & img {
        width: 250px;
        object-fit: cover;
        transform: scale(1);
        transition: transform 0.2s;
    }
    &:hover img {
        transform: scale(1.15);
    }

    & div {
        width: 250px;
        height: 250px;
        margin: auto;
        overflow: hidden;
        text-align: center;
    }
`;

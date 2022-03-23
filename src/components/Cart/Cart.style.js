import styled from "styled-components";
export const CartTable = styled.table`
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 650px;
    margin: auto;
    text-indent: initial;
    border-spacing: 2px;
    border: 1px solid #ebebeb;
    caption-side: bottom;
    width: 100%;

    & thead {
        display: table-header-group;
    }
    & thead tr {
        color: inherit;
        display: table-row;
        vertical-align: middle;
        outline: 0;
        background-color: #f9f9f9;
        border: 1px solid #ebebeb;
    }
    & thead tr th {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        display: table-cell;
        vertical-align: inherit;
        border-bottom: 1px solid rgba(224, 224, 224, 1);
        text-align: left;
        padding: 16px;
        color: rgba(0, 0, 0, 0.87);
    }

    & tbody {
        display: table-row-group;
    }
    & tbody tr {
        color: inherit;
        display: table-row;
        vertical-align: middle;
        outline: 0;
    }

    & tbody tr td {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        display: table-cell;
        vertical-align: inherit;
        border-bottom: 1px solid rgba(224, 224, 224, 1);
        text-align: left;
        padding: 16px;
        color: rgba(0, 0, 0, 0.87);
    }

    & tbody img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
export const ButtonFlex = styled.div`
    flex: 1;
    text-align: ${(props) => props.textAlign || "left"};

    & button {
        margin: 0 5px;
        cursor: pointer;
    }
`;

export const ActionAnchor = styled.a`
    color: #333;
    padding: 0 10px;
    &:hover {
        color: #a749ff;
    }
`;

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px;
`;

export const ItemDiv = styled.div`
    height: 80px;
    width: 400px;
    background-color: var(--white);
    border-radius: 8px;
    border: 1px solid var(--alternate-white);
    box-shadow: 2px 1px 2px 1px var(--regular-gray);
`;
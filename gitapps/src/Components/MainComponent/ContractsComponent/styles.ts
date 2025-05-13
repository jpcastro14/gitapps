import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 100%;
`;

export const ItemContainer = styled.div`
    margin: 20px;
`;

export const P = styled.p`
    border: 1px solid var(--regular-blue);
    margin: 0;
    width: 80%;
`;

export const ItemField = styled.div`
    background-color: aliceblue;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;
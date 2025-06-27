import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 100%;
    background-color: white;
`;

export const ItemContainer = styled.div`
    margin: 20px;
    background-color: orange;
`;

export const P = styled.div`
    border: 1px solid var(--regular-blue);
    margin: 0;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const ItemField = styled.div`
    background-color: aliceblue;
    color: black;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;
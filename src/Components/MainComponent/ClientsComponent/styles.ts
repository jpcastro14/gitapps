import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--regular-blue);
`;

export const ClientsCard = styled.div`
    display: grid;
    margin: 20px;
    width: auto;
    background-color: white;
    border-radius: 8px;
    color: black;
    grid-template-columns: 50% 50%;
    box-shadow: 1px 2px 1px 1px black;
    font-family: 'Assistant', sans-serif;
    font-weight: lighter;
`;

export const ClientInfoContainer = styled.div`
    border-radius: 8px 0 0 8px;
    display: grid;
    grid-column: 100%;
    justify-content: start;
    padding: 10px 30px;
    grid-template-rows: 50% 50%;
    span{
        font-size: 20px;
        font-weight: 600;
    }
    p{
        font-size: 15px;
        margin: 10px;
        background-color: var(--li);
    }
`;

export const ClientContactContainer = styled.div`
    display: grid;
    padding: 10px 10px;
    border-radius: 0 8px 8px 0;
    border-left: 3px solid var(--regular-gray);
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    grid-column-gap: 20px;
    grid-row-gap: 10px ;
    text-align: start;
    background-color: var(--regular-gray);
    p{
        margin: 0;
        font-weight: 500;
        font-family: "Assistant" sans-serif;
    }
    span{
        border: 1px solid var(--regular-blue);
        border-radius: 6px;
        padding: 6px;
        font-weight: 500;
    }
`;
import styled from "styled-components";
import { Card } from "@mui/material";

export const Container = styled.div`
    height: 80%;
    width: 100%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 100%;
    background-color: aliceblue;
    border-radius: 10px;
    display: grid;
    grid-template-rows: 15% 85%;
`;

export const TitleDiv = styled.div`
    background-color: var(--darker-blue);
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 20px;
    h2{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 300;
    }
`;

export const ContentArea = styled.div`
    background-color: aliceblue;
    border-radius: 0 0 4px 4px;
    color: black;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
    grid-template-rows: 0.5fr;
    padding: 20px;
    gap: 20px;

    
`;

export const CardTest = styled(Card)`
    background-color: black;
`
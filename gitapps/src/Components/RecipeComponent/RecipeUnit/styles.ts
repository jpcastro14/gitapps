import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    color: var(--form-black);
    padding-left: 8%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    p{
        white-space: pre-wrap;
        font-size:1.5rem;
    }

`;

export const IngredientsContainer = styled.div`
    width: 100%;
    display: flex;
    text-align: start;
    border-bottom: 1rem solid var(--lighter-red);
`;
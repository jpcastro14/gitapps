import styled from  "styled-components";

export const TodoContainer = styled.div`
    height: 80%;
    width: 100%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 100%;
    background-color: aliceblue;
    border-radius: 10px;
    display: grid;
    grid-template-rows: 15% 10% 70%;
`
export const TitleDiv = styled.div`
    background-color: var(--darker-blue);
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 20px;
    border-radius: 5px 5px 0 0 ;
    h2{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 300;
    }
`;

export const ContentArea = styled.div`
    background-color: aliceblue;
    border-radius: 0 0 4px 4px;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    display: flex;
`;

export const TaskArea = styled.div`
    display: grid;
    height: 40px;
    padding: 0 0 0 20px;
    grid-template-columns: 70% 30%;
    text-align:start;
    align-items: center;
    border: 1px solid #cecece;
    border-radius: 5px;
    div{
        display: grid;
        grid-template-columns: 40% 40%;
        gap:10%;
    }
`;

export const InputArea = styled.div`
    width: 100%;
    background-color: var(--blue);
    display: grid;
    grid-template-columns: 40% 20%;
    grid-template-rows: 100%;
    input{
        height: 50%;
        background-color: var(--white);
        border: none;
        border-radius: 5px;
        color: var(--blue);
        font-size: 20px;
        padding-left: 10px;
    }
    button{
        height: 50%;
        border-radius: 5px;
        border: none;
        background-color: var(--light-blue);
        font-size: 20px;
    }
    justify-content: center;
    align-items: center;
    gap: 20px;
`

import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 500px;
    border:1px solid var(--light-blue);
    border-radius: 10px;
    height: 700px;
    margin: 100px auto;
    display: grid;
    grid-template-rows: 40% 60% 20%;
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0 50px 0 50px;
    input{
        height: 40px;
        background-color: var(--darker-blue);
        border: 1px solid var(--light-blue);
        border-radius: 8px;
        padding: 0 0 0 20px;
        font-size: 16px;
    }    
    label{
        align-items: start;
    }
`;

export const LabelContainer = styled.div`
    display: flex;
    justify-content: start;
    padding: 0 0 0 20px;
    margin: 10px 0 10px 0;
    font-size: 20px;
`;

export const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left:20px;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    img{
        height: 140px;
        width: auto;
    }
    p{
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 6px;
        font-size: 30px;
        color: white;
        margin: 0;
    }
    input{
        width: 100%;
        height: 20px;
    }
    
`;


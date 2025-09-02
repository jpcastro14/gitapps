import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    color: var(--form-black);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    p{
        white-space: pre-wrap;
        font-size:1.5rem;
    }
    span{
        margin: 20px 0 0 0;
        align-self: center;
    }

`;

export const TopDecorativeBarEdit = styled.div`
    height: 100px;
    background-color: var(--form-red);
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right:20px;
  @media (max-width:1200px) {
    margin: 0;
  }
`;

export const ModalForm = styled.div`
border-radius: 8px;
    width: 80rem;
    background-color: white;
    margin: 5rem auto;
    padding: 2rem;
    color: var(--form-black);
    h2{
        font-weight: unset;
        font-weight: 500;
        font-size: 2rem;
        margin-top: 0;
    }
`;

export const IngredientsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-left: 10%;
    @media (max-width:1200px) {
     padding-left: 1rem;
     h1{
        font-size: 2.1rem;
     }
    }
`;

export const Divider = styled.hr`
    height: 15px;
    width: 100%;
    border: none;
    background-color: var(--lighter-red);
`;

export const PrepareStepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-left: 10%;
    @media (max-width:1200px) {
     padding:1rem;
    }
`;
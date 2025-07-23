import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f3f3;
  padding: 20px;
  width: 100%;
  div {
    color: red;
  }
  input {
    color: var(--form-black);
  }
  textarea {
    color: var(--form-black);
  }
`;

export const CheckItem = styled.div`
  background-color: red;
  width: 100%;
`;

export const TopFormNav = styled.div`
  width: 100%;
  color: var(--form-white);
  margin-bottom: 50px;
  display: flex;
  font-family: Poppins;
  font-size: 20px;
  p {
    margin: 0 5px 0 0;
    padding: 0;
    color: var(--form-black);
  }
`;

export const TopDecorativeBar = styled.div`
  margin: -20px -20px 20px -20px;
  height: 40px;
  background-color: var(--form-red);
`;

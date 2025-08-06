import styled from "styled-components";

export const OverContainer = styled.div`
  background-color: #f3f3f3;
  padding: 20px;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`;


export const SearchField = styled.div`
  color: black;
  width: 100%;
  display: grid;
  grid-template-columns:30% 5% 60%;
  align-items: center;
  gap: 20px;
  margin-top:20px;
  label{
    font-family: Poppins;
    font-size: 50px;
    font-weight: 700;
  }
  input{
    height: 30px;
    background-color: white;
    height: 50px;
    border-radius: 50px;
    border: none;
  }
`;

export const VeganButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 500px;
  background-color: aliceblue;
  border: none;
  background-color: white;
`;

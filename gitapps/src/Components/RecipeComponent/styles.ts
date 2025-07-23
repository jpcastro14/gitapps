import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  display: grid;
  grid-template-rows: 20% 70% 10%;
  grid-template-columns: 100%;
  min-width: 700px;
`;

export const TopNav = styled.div`
  height: 40px;
  display: flex;
  font-size: 25px;
  font-weight: 500;
  font-family: Poppins;
  align-items: stretch;
  padding: 50px 80px 0 80px;
  justify-content: space-between;
  p {
    margin: 0;
    padding: 0;
    color: var(--form-black);
  }
  span {
    color: var(--form-red);
  }
  button {
    height: 35px;
    border: none;
    font-weight: 500;
    border-radius: 6px;
    font-family: Poppins;
    color: var(--form-black);
    background-color: var(--form-yellow);
  }
`;

export const MidSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px 0 100px;
  margin-top: 150px;
  font-family: poppins;
  align-items: center;
  p {
    color: var(--form-black);
    font-size: 25px;
  }
  span {
    width: 400px;
    margin-top: 20px;
    color: var(--form-red);
  }
  input {
    width: 80%;
    background-color: aliceblue;
    border-radius: 50px;
    border: none;
    height: 40px;
    box-shadow: 0px 10px 19px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 10px 19px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 19px -7px rgba(0, 0, 0, 0.75);
    color: var(--form-black);
    padding: 0 20px 0 20px;
    max-width: 500px;
  }
`;

export const BottomSection = styled.div`
  background-color: var(--form-red);
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: poppins;
    font-size: 10px;
    font-weight: 200;
  }
`;

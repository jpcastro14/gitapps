import styled from "styled-components";

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: #f3f3f3;
  display: grid;
  min-width: 428px;
  grid-template-rows: 20% auto 10%;
  @media (max-width:1200px) {
    display: grid;
    grid-template-columns:100%;
    grid-template-rows:8% 50% 2% 32% auto;
  }
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
  @media (max-width:1200px) {
    display:grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    padding: 20px;
    justify-content: center;
    gap: 40px;
    p{
      padding-top: 30px;
      font-size: 40px;
    }
    button{
      margin: 30px;
      border:1px solid var(--form-yellow);
      background-color: navajowhite;
      filter: opacity(0.8);
    }

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
    max-width: 800px;
    background-color: aliceblue;
    border-radius: 50px;
    border: none;
    height: 40px;
    box-shadow: 0px 10px 19px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 10px 19px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 19px -7px rgba(0, 0, 0, 0.75);
    color: var(--form-black);
    padding: 0 20px 0 20px;
  }
  @media (max-width:1200px) {
    padding: 40px;
    margin-top: 70px;
    p{
      font-size: 35px;
      font-weight: 300;
    }
    input{
      width: 100%;
      
    }
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
  @media (max-width:1200px) {
    width: 100dvw;
  }
  `;

export const MostVisited = styled.div`
    color: black;
    display: flex;
    padding-left: 20px;
    font-family: Poppins;
    @media (min-width:1200px) {
      display: none;
    }
  `

export const Carousel = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px;
    overflow-x: scroll;
    @media (min-width:1200px) {
      display: none;
      height: 100%;
    }
  `;

export const CarouselItem = styled.div`
    height: 100%;
    min-width: 300px;
    border: 1px solid var(--form-blue);
    background-color: white;
    border-radius: 6px;
  `
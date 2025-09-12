import styled from "styled-components";


type ButtonProps = {
  $veganColor?: boolean;
  $vegan?: boolean;
}

export const OverContainer = styled.div`
  background-color: #f3f3f3;
  padding: 20px;
  width: 100dvw;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100dvh;
  @media (max-width:1200px) {
    width: 100%;
    padding: 0;
  }
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
    font-weight: 500;
  }
  input{
    height: 30px;
    background-color: white;
    height: 50px;
    border-radius: 50px;
    border: none;
    filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.35));
    color: black;
    padding-left: 20px;
    font-size: 20px;
  }

  @media (max-width:1200px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
    justify-content:stretch;
    padding:0 20px 0 20px;
    width: auto;
    label{
      font-size: 40px;
      font-weight: 500;
    }
    input{
      height: 40px;
      align-self: stretch;
    }
  }

`;

export const VeganButton = styled.button<ButtonProps>`
  height: 50px;
  width: 50px;
  border-radius: 500px;
  background-color:white;
  img{
    height: 30px;
    justify-self: center;
    align-items: center;
  }
  border: ${(props) => props.$veganColor ? " 2px solid  var(--regular-green)" : "none"};
  filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.35));
  @media(max-width:1200px){
    align-self: start;
  }
`;

export const RecipeCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 1400px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1200px){
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px){
    grid-template-columns: 1fr;
  }
`;

export const RecipeCard = styled.div<ButtonProps>`
  height: 450px;
  background-color: white;
  margin: 0 auto;
  margin-top: 50px;
  border-radius:20px;
  min-width: 330px;
  max-width:350px ;
  filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.35));
  color: black;
  padding: 10px;
  @media (max-width:1200px) {
    height: 450px;
    width: 90%;
    margin-top: 20px;
  }   

`

export const RecipeName = styled.p`
    font-family: Poppins;
    font-size: 20px;
`;

export const RecipeImage = styled.div`
    width: 100%;
    background-color: darkgray;
    border-radius: 10px;
    height:200px; 
`;

export const RecipePropsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeProps = styled.div`
  display: flex;
  font-size: 20px;
  padding: 10px;
  align-items: center;
  img{
    margin-right: 20px;
    height: 30px;
    border: 1px solid var(--regular-green);
    border-radius: 100px;
    padding: 6px;
  }
`;
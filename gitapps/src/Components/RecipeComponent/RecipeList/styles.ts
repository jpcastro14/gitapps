import styled from "styled-components";

export const OverContainer = styled.div`
  background-color: #f3f3f3;
  padding: 20px;
  width: 100%;
  max-width: 1440px;
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
    filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.35));
  }
`;

export const VeganButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 500px;
  background-color: aliceblue;
  border: none;
  background-color: white;
  filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.35));
`;

export const RecipeCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const RecipeCard = styled.div`
  height: 450px;
  width: 430px;
  background-color: white;
  margin: 0 auto;
  margin-top: 50px;
  border-radius:6px;
  filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.35));
  color: black;
  padding: 10px;
`

export const RecipeName = styled.p`
    font-family: Poppins;
    font-size: 20px;
`;

export const RecipeImage = styled.div`
    width: 100%;
    background-color: darkgray;
    border-radius: 4px;
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
    height: 40px;
    border: 3px solid var(--regular-red);
    border-radius: 8px;
    padding: 6px;
    
  }
`;
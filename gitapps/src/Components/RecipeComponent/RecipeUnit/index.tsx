import axios from "axios";
import { TopDecorativeBar } from "../RecipeForm/styles";
import { IRecipe } from "../types";
import { Container, IngredientsContainer } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeUnit() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<IRecipe>();

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get(`http://localhost:3000/recipes/${id}`)
        .then(({ data }) => setRecipe(data))
        .catch(({ error }) => console.log(error));
    };
    fetchdata();
  });

  const list = recipe?.data.ingredients.split(/[,][ ]/).join("\n");
  return (
    <>
      <TopDecorativeBar />
      <Container>
        <h1>{recipe?.data.name}</h1>
        <IngredientsContainer>
          <p>{list}</p>
        </IngredientsContainer>
      </Container>
    </>
  );
}

export default RecipeUnit;

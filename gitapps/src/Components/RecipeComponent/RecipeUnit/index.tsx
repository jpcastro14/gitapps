import axios from "axios";
import { TopDecorativeBar } from "../RecipeForm/styles";
import { IRecipe } from "../types";
import {
  Container,
  Divider,
  IngredientsContainer,
  PrepareStepsContainer,
} from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormLabel, Rating } from "@mui/material";

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
  }, []);

  const list = recipe?.data.ingredients.split(/[,][ ]/).join("\n");

  console.log(list);

  return (
    <>
      <TopDecorativeBar />
      <Container>
        <IngredientsContainer>
          <h1>{recipe?.data.name}</h1>
          <h2>Ingredientes:</h2>
          <p>{list}</p>
        </IngredientsContainer>
        <Divider />
        <PrepareStepsContainer>
          <h2>Como preparar:</h2>
          <p>{recipe?.data.prepareSteps}</p>
        </PrepareStepsContainer>
        <Rating name="size-large" size="large" defaultValue={3} />
      </Container>
    </>
  );
}

export default RecipeUnit;

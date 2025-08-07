import { useEffect, useState } from "react";
import {
  OverContainer,
  RecipeCard,
  RecipeCardContainer,
  RecipeImage,
  RecipeName,
  RecipeProps,
  RecipePropsDiv,
  SearchField,
  VeganButton,
} from "./styles";
import { TopDecorativeBar, TopFormNav } from "../RecipeForm/styles";
import axios from "axios";
import { FormLabel } from "@mui/material";
import clock from "../../../assets/clock.svg";
import person from "../../../assets/person.svg";

interface IRecipe {
  name: string;
  prepareTime: string;
  dificulty: string;
  isVegan: boolean;
  ingredients: string;
  prepareSteps: string;
}

function Recipelist() {
  const [recipes, setRecipes] = useState<IRecipe[]>();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/recipes/")
        .then((data) => setRecipes(data.data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  return (
    <OverContainer>
      <TopDecorativeBar />
      <SearchField>
        <FormLabel
          style={{ fontFamily: "Poppins", fontSize: "50px", color: "black" }}
        >
          Resultados
        </FormLabel>
        <VeganButton />
        <input type="text" />
      </SearchField>
      <RecipeCardContainer>
        {recipes?.map((recipe) => (
          <RecipeCard>
            <RecipeImage />
            <RecipeName>{recipe.name}</RecipeName>
            <RecipePropsDiv>
              <RecipeProps>
                <img src={person} />
                <span>{recipe.dificulty}</span>
              </RecipeProps>
              <RecipeProps>
                <img src={clock} />
                <span> Fica pronto em {recipe.prepareTime}</span>
              </RecipeProps>
            </RecipePropsDiv>
          </RecipeCard>
        ))}
      </RecipeCardContainer>
    </OverContainer>
  );
}

export default Recipelist;

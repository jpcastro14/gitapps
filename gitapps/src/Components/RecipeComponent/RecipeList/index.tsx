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
import { TopDecorativeBar } from "../RecipeForm/styles";
import axios from "axios";
import { FormLabel } from "@mui/material";
import clock from "../../../assets/clock.svg";
import person from "../../../assets/person.svg";
import { IRecipe } from "../types";

function Recipelist() {
  const [recipes, setRecipes] = useState<IRecipe[]>();
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>();
  const [vegancolor, setVeganColor] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/recipes")
        .then((data) => setRecipes(data.data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  function createFilter(event: React.ChangeEvent<HTMLInputElement>) {
    //let parameter = event.target.value;

    setFilteredRecipes(
      recipes?.filter((item) => item.name.startsWith(event.target.value))
    );

    console.log(filteredRecipes);
  }

  function veganFIlter(event: React.MouseEvent<HTMLButtonElement>) {
    setFilteredRecipes(recipes?.filter((item) => item.isVegan == true));
    setVeganColor(!vegancolor);
  }

  const noVegan = () => {
    setFilteredRecipes(recipes);
    setVeganColor(!vegancolor);
  };

  return (
    <OverContainer>
      <TopDecorativeBar />
      <SearchField>
        <FormLabel
          style={{ fontFamily: "Poppins", fontSize: "50px", color: "black" }}
        >
          Resultados
        </FormLabel>
        {vegancolor == false ? (
          <VeganButton $veganColor={vegancolor} onClick={veganFIlter} />
        ) : (
          <VeganButton $veganColor={vegancolor} onClick={noVegan} />
        )}

        <input type="text" onChange={createFilter} />
      </SearchField>
      <RecipeCardContainer>
        {filteredRecipes
          ? filteredRecipes?.map((recipe) => (
              <RecipeCard>
                <RecipeImage />
                <RecipeName>{recipe.name}</RecipeName>
                <RecipePropsDiv>
                  <RecipeProps>
                    <img src={person} />
                    <span>Serve até {recipe.servings} pessoas</span>
                  </RecipeProps>
                  <RecipeProps>
                    <img src={clock} />
                    <span> Fica pronto em {recipe.prepareTime} minutos</span>
                  </RecipeProps>
                </RecipePropsDiv>
              </RecipeCard>
            ))
          : recipes?.map((recipe) => (
              <RecipeCard>
                <RecipeImage />
                <RecipeName>{recipe.name}</RecipeName>
                <RecipePropsDiv>
                  <RecipeProps>
                    <img src={person} />
                    <span>Serve até {recipe.servings} pessoas</span>
                  </RecipeProps>
                  <RecipeProps>
                    <img src={clock} />
                    <span> Fica pronto em {recipe.prepareTime} minutos</span>
                  </RecipeProps>
                </RecipePropsDiv>
              </RecipeCard>
            ))}
      </RecipeCardContainer>
    </OverContainer>
  );
}

export default Recipelist;

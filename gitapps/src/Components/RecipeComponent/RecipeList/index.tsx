import { useEffect, useState } from "react";
import {
  OverContainer,
  RecipeCard,
  RecipeCardContainer,
  RecipeCode,
  RecipeImage,
  RecipeName,
  RecipeProps,
  RecipePropsDiv,
  SearchField,
  VeganButton,
} from "./styles";
import { TopDecorativeBar } from "../RecipeForm/styles";
import axios from "axios";
import clock from "../../../assets/clock.svg";
import person from "../../../assets/person.svg";
import { IRecipe } from "../types";
import leaf from "../../../assets/leaf.svg";

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
      recipes?.filter((item) => item.data.name.startsWith(event.target.value))
    );

    console.log(filteredRecipes);
  }

  function veganFIlter(): void {
    setVeganColor(!vegancolor);
    setFilteredRecipes(recipes?.filter((item) => item.data.isVegan == true));
  }

  function noVegan(): void {
    setVeganColor(!vegancolor);
    setFilteredRecipes(recipes);
  }

  return (
    <>
      <TopDecorativeBar />
      <OverContainer>
        <SearchField>
          <label>Resultados</label>

          {vegancolor == false ? (
            <VeganButton $veganColor={vegancolor} onClick={veganFIlter}>
              <img src={leaf} />
            </VeganButton>
          ) : (
            <VeganButton $veganColor={vegancolor} onClick={noVegan}>
              <img src={leaf} />
            </VeganButton>
          )}

          <input type="text" onChange={createFilter} />
        </SearchField>
        <RecipeCardContainer>
          {filteredRecipes
            ? filteredRecipes?.map((recipe) => (
                <RecipeCard $vegan={recipe.data.isVegan}>
                  <RecipeImage />
                  <RecipeName>{recipe.data.name}</RecipeName>
                  <RecipePropsDiv>
                    <RecipeProps>
                      <img src={person} />
                      <span>Serve até {recipe.data.servings} pessoas</span>
                    </RecipeProps>
                    <RecipeProps>
                      <img src={clock} />
                      <span>
                        {" "}
                        Fica pronto em {recipe.data.prepareTime} minutos
                      </span>
                    </RecipeProps>
                  </RecipePropsDiv>
                  <RecipeCode>{recipe.id}</RecipeCode>
                </RecipeCard>
              ))
            : recipes?.map((recipe) => (
                <RecipeCard>
                  <RecipeImage />
                  <RecipeName>{recipe.data.name}</RecipeName>
                  <RecipePropsDiv>
                    <RecipeProps>
                      <img src={person} />
                      <span>Serve até {recipe.data.servings} pessoas</span>
                    </RecipeProps>
                    <RecipeProps>
                      <img src={clock} />
                      <span>
                        {" "}
                        Fica pronto em {recipe.data.prepareTime} minutos
                      </span>
                    </RecipeProps>
                  </RecipePropsDiv>
                  <RecipeCode>{recipe.id}</RecipeCode>
                </RecipeCard>
              ))}
        </RecipeCardContainer>
      </OverContainer>
    </>
  );
}

export default Recipelist;

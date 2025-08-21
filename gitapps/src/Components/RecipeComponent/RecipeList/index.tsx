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
import { useNavigate } from "react-router-dom";

function Recipelist() {
  const [recipes, setRecipes] = useState<IRecipe[]>();
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>();
  const [vegancolor, setVeganColor] = useState(false);
  const navigate = useNavigate();

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

  function veganFIlter(): void {
    setVeganColor(!vegancolor);
    setFilteredRecipes(recipes?.filter((item) => item.isVegan == true));
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
                <RecipeCard
                  onClick={() => navigate(`/recipeunit/${recipe.id}`)}
                >
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
                  <RecipeCode>{recipe.id}</RecipeCode>
                </RecipeCard>
              ))
            : recipes?.map((recipe) => (
                <RecipeCard
                  onClick={() => navigate(`/recipeunit/${recipe.id}`)}
                >
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
                  <RecipeCode>{recipe.id}</RecipeCode>
                </RecipeCard>
              ))}
        </RecipeCardContainer>
      </OverContainer>
    </>
  );
}

export default Recipelist;

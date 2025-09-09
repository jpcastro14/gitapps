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
import clock from "../../../assets/clock.svg";
import person from "../../../assets/person.svg";
import { IRecipe } from "../types/types";
import leaf from "../../../assets/leaf.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Recipelist() {
  const [recipes, setRecipes] = useState<IRecipe[]>();
  const [filteredRecipes, setFilteredRecipes] = useState<
    IRecipe[] | undefined
  >();
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

  const createFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value == "") {
      setFilteredRecipes(undefined);
    } else {
      const formated = event.target.value.replace(
        /^./,
        event.target.value[0].toLocaleUpperCase()
      );

      setFilteredRecipes(
        recipes?.filter((item) => item.name.startsWith(formated))
      );
    }

    const formated = event.target.value.replace(
      /^./,
      event.target.value[0].toLocaleUpperCase()
    );

    setFilteredRecipes(
      recipes?.filter((item) => item.name.startsWith(formated))
    );
  };

  const veganFIlter = (): void => {
    vegancolor == false
      ? (setVeganColor(!vegancolor),
        setFilteredRecipes(recipes?.filter((item) => item.isVegan == true)))
      : setVeganColor(!vegancolor),
      setFilteredRecipes(undefined);
  };
  return (
    <>
      <TopDecorativeBar />
      <OverContainer>
        <SearchField>
          <label>Resultados</label>

          <VeganButton $veganColor={vegancolor} onClick={veganFIlter}>
            <img src={leaf} />
          </VeganButton>
          <input type="text" onChange={createFilter} />
        </SearchField>
        <RecipeCardContainer>
          {filteredRecipes
            ? filteredRecipes?.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
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
            : /* ------------------------------------------------- */
              recipes?.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
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
                      <span>Fica pronto em {recipe.prepareTime} minutos</span>
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

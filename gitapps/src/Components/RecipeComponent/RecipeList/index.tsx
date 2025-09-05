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
import { IRecipe } from "../types/types";
import leaf from "../../../assets/leaf.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../../../DataContext/RecipeContext";

function Recipelist() {
  const [recipes, setRecipes] = useState<IRecipe[]>();
  const [filteredRecipes, setFilteredRecipes] = useState<
    IRecipe[] | undefined
  >();
  const [vegancolor, setVeganColor] = useState(false);
  const [searchParam, setSearchParam] = useState<boolean>(false);
  const navigate = useNavigate();
  const data = useContext(RecipeContext);

  const createFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredRecipes(
      recipes?.filter((item) => item.data.name.startsWith(event.target.value))
    );
  };

  const ingredientsFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredRecipes(
      recipes?.filter((item) =>
        item.data.ingredients.includes(event.target.value)
      )
    );
  };

  const toggleParam = () => {
    setSearchParam(!searchParam);
    console.log(searchParam);
  };

  const veganFIlter = (): void => {
    vegancolor == false
      ? (setVeganColor(!vegancolor),
        setFilteredRecipes(
          recipes?.filter((item) => item.data.isVegan == true)
        ))
      : setVeganColor(!vegancolor),
      setFilteredRecipes(undefined);
  };
  return (
    <>
      <TopDecorativeBar />
      <OverContainer>
        <button onClick={toggleParam}>
          {searchParam == true
            ? "Buscando por ingrediente"
            : "Buscando por nome"}
        </button>
        <SearchField>
          <label>Resultados</label>

          <VeganButton $veganColor={vegancolor} onClick={veganFIlter}>
            <img src={leaf} />
          </VeganButton>
          {searchParam == true ? (
            <input type="text" onChange={ingredientsFilter} />
          ) : (
            <input type="text" onChange={createFilter} />
          )}
        </SearchField>
        <RecipeCardContainer>
          {filteredRecipes
            ? filteredRecipes?.map((recipe) => (
                <RecipeCard
                  onClick={() => navigate(`/recipeunit/${recipe.id}`)}
                >
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
            : data?.map((recipe) => (
                <RecipeCard
                  onClick={() => navigate(`/recipeunit/${recipe.id}`)}
                >
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

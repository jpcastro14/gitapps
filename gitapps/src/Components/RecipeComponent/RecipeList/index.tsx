import { useEffect, useState } from "react";
import { OverContainer, SearchField, VeganButton } from "./styles";
import { TopDecorativeBar, TopFormNav } from "../RecipeForm/styles";
import axios from "axios";
import { Button, FormLabel, Grid2, TextField, Container } from "@mui/material";

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
    </OverContainer>
  );
}

export default Recipelist;

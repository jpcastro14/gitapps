import { useEffect, useState } from "react";
import { Container } from "./styles";
import axios from "axios";

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
    <Container>
      {recipes?.map((item) => (
        <p style={{ color: "black" }}>{item.name}</p>
      ))}
    </Container>
  );
}

export default Recipelist;

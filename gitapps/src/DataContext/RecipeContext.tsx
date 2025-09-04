import { createContext, useState, useEffect, Children } from "react";

import axios from "axios";
import { IRecipe } from "../Components/RecipeComponent/types/types";

type RecipeProviderProps = {
  children: React.ReactNode;
};

export const RecipeContext = createContext<IRecipe[] | undefined>(undefined);

export const RecipeProvider = ({ children }: RecipeProviderProps) => {
  const [testRecipe, setTestRecipe] = useState<IRecipe[]>();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/recipes")
        .then((data) => setTestRecipe(data.data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  return (
    <RecipeContext.Provider value={testRecipe}>
      {children}
    </RecipeContext.Provider>
  );
};

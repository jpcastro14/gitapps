import { createContext, useState, useEffect, Children } from "react";

import axios from "axios";
import { IRecipe } from "../Components/RecipeComponent/types/types";

type RecipeProviderProps = {
  children: React.ReactNode;
};

export const RecipeContext = createContext<IRecipe[] | undefined>(undefined);

export const RecipeProvider = ({ children }: RecipeProviderProps) => {
  const [recipe, setRecipe] = useState<IRecipe[]>();

  return (
    <RecipeContext.Provider value={recipe}>{children}</RecipeContext.Provider>
  );
};

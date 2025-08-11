export interface IRecipe {
    id: number;
    data: {
        name: string;
        description: string;
        dificulty: number;
        isVegan: boolean;
        ingredients: string;
        servings: number;
        prepareTime: number;
        prepareSteps: string;
    }



}

export const localUrl = "http://localhost:3000/recipes"
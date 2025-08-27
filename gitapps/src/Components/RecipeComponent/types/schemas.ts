import { z } from "zod";

export const schema = z.object({
    recipe: z.string().min(1, { error: "O nome da receita é obrigatório" }),
    name: z.string().min(1, { error: "Digite aqui" })
})

export type Schema = z.infer<typeof schema>

export const recipeSchema = z.object({
    name: z.string().min(10, { error: "Digite o nome da receita, no mínimo 10 caracteres" }),
    description: z.string().min(1, { error: "Descreva o procedimento de preparo" }),
    dificulty: z.number().max(1, { error: "Informe o nível de dificuldade da receita" }),
    isVegan: z.boolean(),
    ingredients: z.string().min(1, { error: "Informe pelo menos um ingrediente" }),
    servings: z.number().min(1, { error: "Informe quantas pessoas a receita serve" }),
    prepareTime: z.number().nonnegative(),
    prepareSteps: z.string().min(1, { error: "Descreva o processo de preparo da receita" })
})

export type RecipeSchema = z.infer<typeof recipeSchema>
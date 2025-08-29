import { z } from "zod";

export const schema = z.object({
    recipe: z.string().min(1, { error: "O nome da receita é obrigatório" }),
    name: z.string().min(1, { error: "Digite aqui" })
})

export type Schema = z.infer<typeof schema>

export const recipeSchema = z.object({
    name: z.string().min(10, { error: "Digite o nome da receita, no mínimo 10 caracteres" }),
    dificulty: z.string().min(1, { error: "Informe o grau de dificuldade 1 - 5 " }).refine((value) => !Number.isNaN(parseInt(value, 10))),
    isVegan: z.boolean(),
    ingredients: z.string().min(10, { error: "Informe pelo menos um ingrediente - minimo 10 caracteres" }),
    servings: z.string().min(1, { error: "Informe quantas porções a receita rende" }).refine((value) => !Number.isNaN(parseInt(value, 10))),
    prepareTime: z.string().min(1, { error: "Informe o tempo de preparo em minutos" }).refine((value) => !Number.isNaN(parseInt(value, 10))),
    prepareSteps: z.string().min(1, { error: "Descreva o processo de preparo da receita" })
})

export type RecipeSchema = z.infer<typeof recipeSchema>

export const alertSchema = z.object({
    type: z.string(),
    message: z.string()
})

export type AlertSchema = z.infer<typeof recipeSchema>
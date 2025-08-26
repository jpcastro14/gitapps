import { z } from "zod";

export const schema = z.object({
    recipe: z.string().min(1, { error: "O nome da receita é obrigatório" }),
    name: z.string().min(1, { error: "Digite aqui" })
})

export type Schema = z.infer<typeof schema>

export const newRecipeSchema = z.object({
    name: z.string().min(10, { error: "Digite o nome da receita" }),
    desctiption: z.string().min(1, { error: "Descreva o procedimento de preparo" })
})
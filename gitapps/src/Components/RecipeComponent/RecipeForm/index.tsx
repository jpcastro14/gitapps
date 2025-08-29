import { Button, Checkbox, FormLabel, Grid2, TextField } from "@mui/material";
import { Container, TopDecorativeBar, TopFormNav } from "./styles";
import { useForm } from "react-hook-form";
import { recipeSchema, RecipeSchema } from "../types/schemas";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import AlertComponent from "../../AlertComponent";

function RecipeForm() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<RecipeSchema>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeSchema>({
    mode: "onSubmit",
    resolver: zodResolver(recipeSchema),
  });

  function logRecipe(data: RecipeSchema) {
    try {
      setRecipe(data);
      axios
        .post("http://localhost:3000/recipes/", {
          data,
        })
        .then((response) => {
          if (response.status === 201) {
            alert("Receita criada com sucesso redirecionando");

            setTimeout(() => {
              navigate("/recipelist");
            }, 3000);
          }
        })
        .catch((error) => alert(error));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <TopDecorativeBar />
      <AlertComponent message="Receita criada com sucesso!" open={true} />
      <Container>
        <TopFormNav>
          <p>Criar sua</p> <span> receita</span>
        </TopFormNav>
        <Grid2 container spacing={1} columns={{ xs: 1, sm: 1, md: 3 }}>
          <Grid2 size={{ xs: 1, sm: 1, md: 4 }} container>
            <FormLabel>Nome da receita</FormLabel>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              error={!!errors.name}
              helperText={errors.name?.message}
              {...register("name")}
            />
          </Grid2>
          {/* ------------------------------ */}

          <Grid2 size={{ xs: 1, sm: 1, md: 1 }} container>
            <FormLabel>Serve quantas pessoas</FormLabel>
            <TextField
              type="number"
              slotProps={{ htmlInput: { type: "number", min: 0, max: 5 } }}
              fullWidth
              size="small"
              error={!!errors.servings}
              placeholder={errors.servings?.message}
              {...register("servings")}
            />
          </Grid2>
          {/* ------------------------------ */}

          <Grid2 size={{ xs: 1, sm: 1, md: 1 }} container>
            <FormLabel>Tempo de preparo</FormLabel>
            <TextField
              type="number"
              slotProps={{ htmlInput: { type: "number", min: 0, max: 120 } }}
              fullWidth
              variant="outlined"
              size="small"
              error={!!errors.prepareTime}
              placeholder={errors.prepareTime?.message}
              {...register("prepareTime")}
            />
          </Grid2>

          <Grid2 size={{ xs: 1, md: 1 }} container>
            <FormLabel>Dificuldade</FormLabel>
            <TextField
              slotProps={{ htmlInput: { type: "number", min: 0, max: 5 } }}
              type="number"
              size="small"
              fullWidth
              error={!!errors.dificulty}
              placeholder={errors.dificulty?.message}
              {...register("dificulty")}
            />
          </Grid2>

          <Grid2 size={4} container>
            <FormLabel>Ingredientes</FormLabel>
            <TextField
              multiline
              type="text"
              fullWidth
              minRows={2}
              maxRows={4}
              size="medium"
              error={!!errors.ingredients}
              helperText={errors.ingredients?.message}
              {...register("ingredients")}
            />
          </Grid2>

          <Grid2 size={4} container>
            <FormLabel>Como preparar</FormLabel>
            <TextField
              multiline
              type="text"
              fullWidth
              minRows={2}
              maxRows={4}
              size="medium"
              error={!!errors.prepareSteps}
              helperText={errors.prepareSteps?.message}
              {...register("prepareSteps")}
            />
          </Grid2>
          <Grid2 size={{ sm: 1, md: 4, lg: 4 }} alignSelf={"center"}>
            <FormLabel>Receita vegana</FormLabel>
            <Checkbox size="small" {...register("isVegan")} />
          </Grid2>

          <Grid2 size={4} container>
            <Button
              style={{
                fontFamily: "poppins",
                backgroundColor: "var(--form-yellow)",
                color: "var(--form-black)",
              }}
              fullWidth
              color="primary"
              variant="contained"
              onClick={() => handleSubmit(logRecipe)()}
            >
              Criar
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}

export default RecipeForm;

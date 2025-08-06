import {
  Button,
  Checkbox,
  FormLabel,
  Grid2,
  Slider,
  TextField,
} from "@mui/material";
import { Container, TopDecorativeBar, TopFormNav } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface IRecipe {
  name: string;
  prepareTime: number;
  dificulty: number;
  isVegan: boolean;
  ingredients: string;
  servings: number;
  prepareSteps: string;
}

function RecipeForm() {
  const [newRecipe, setNewRecipe] = useState<IRecipe>({} as IRecipe);

  const { register, handleSubmit } = useForm<IRecipe>();

  const logRecipe = (d: IRecipe) => {
    setNewRecipe(d);

    console.log(newRecipe);
    console.log("teste");
  };

  return (
    <>
      <Container>
        <TopDecorativeBar>a</TopDecorativeBar>
        <TopFormNav>
          <p>Criar sua</p> <span> receita</span>
        </TopFormNav>
        <Grid2 container spacing={1} columns={{ xs: 1, sm: 1, md: 4 }}>
          <Grid2 size={{ xs: 1, sm: 1, md: 4 }} container>
            <FormLabel>Nome da receita</FormLabel>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              {...register("name", { required: true })}
            />
          </Grid2>
          {/* ------------------------------ */}

          <Grid2 size={{ xs: 1, sm: 1, md: 2 }} container>
            <FormLabel>Serve quantas pessoas</FormLabel>
            <TextField
              fullWidth
              size="small"
              type="number"
              {...register("servings", { required: false })}
            />
          </Grid2>
          {/* ------------------------------ */}

          <Grid2 size={{ xs: 1, sm: 1, md: 1 }} container>
            <FormLabel>Tempo de preparo</FormLabel>
            <TextField
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              {...register("prepareTime", { required: true })}
            />
          </Grid2>

          <Grid2 size={{ xs: 1, md: 1 }} container>
            <FormLabel>Dificuldade</FormLabel>
            <Slider
              min={0}
              max={5}
              step={1}
              valueLabelDisplay="on"
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
              {...register("prepareSteps")}
            />
          </Grid2>
          <Grid2 size={{ sm: 1, md: 4, lg: 4 }} alignSelf={"center"}>
            <FormLabel>Receita vegana</FormLabel>
            <Checkbox
              size="small"
              {...register("isVegan", { required: false })}
            />
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

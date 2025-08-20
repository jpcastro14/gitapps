import axios from "axios";
import { IRecipe } from "../types";
import {
  Container,
  Divider,
  IngredientsContainer,
  ModalForm,
  PrepareStepsContainer,
  TopDecorativeBarEdit,
} from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormLabel,
  Grid2,
  Modal,
  Rating,
  Slider,
  TextField,
} from "@mui/material";

import { useForm } from "react-hook-form";

function RecipeUnit() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<IRecipe>();
  const [ismodalOpen, setIsmodalOpen] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<IRecipe>();

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get(`http://localhost:3000/recipes/${id}`)
        .then(({ data }) => setRecipe(data))
        .catch(({ error }) => console.log(error));
    };
    fetchdata();
  }, []);

  const list = recipe?.data.ingredients.split(/[,][ ]/).join("\n");

  function handleClose(): void {
    setIsmodalOpen(!ismodalOpen);
  }

  return (
    <>
      <Modal open={ismodalOpen} onClose={handleClose}>
        <>
          <ModalForm>
            <h2>Editar receita</h2>
            <Grid2 container spacing={1} columns={{ xs: 1, sm: 1, md: 4 }}>
              <Grid2 size={{ xs: 1, sm: 1, md: 4 }} container>
                <FormLabel>Nome da receita</FormLabel>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={recipe?.data.name}
                  {...register("data.name", { required: true })}
                />
              </Grid2>
              {/* ------------------------------ */}

              <Grid2 size={{ xs: 1, sm: 1, md: 2 }} container>
                <FormLabel>Serve quantas pessoas</FormLabel>
                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  value={recipe?.data.servings}
                  {...register("data.servings", { required: false })}
                />
              </Grid2>
              {/* ------------------------------ */}

              <Grid2 size={{ xs: 1, sm: 1, md: 1 }} container>
                <FormLabel>Tempo de preparo</FormLabel>
                <TextField
                  type="number"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={recipe?.data.prepareTime}
                  {...register("data.prepareTime", { required: true })}
                />
              </Grid2>

              <Grid2 size={{ xs: 1, md: 1 }} container>
                <FormLabel>Dificuldade</FormLabel>
                <Slider
                  type="number"
                  min={0}
                  max={5}
                  step={1}
                  valueLabelDisplay="auto"
                  value={recipe?.data.dificulty}
                  {...register("data.dificulty")}
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
                  value={recipe?.data.ingredients}
                  {...register("data.ingredients")}
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
                  value={recipe?.data.prepareSteps}
                  {...register("data.prepareSteps")}
                />
              </Grid2>
              <Grid2 size={{ sm: 1, md: 4, lg: 4 }} alignSelf={"center"}>
                <FormLabel>Receita vegana</FormLabel>
                <Checkbox
                  size="small"
                  value={recipe?.data.isVegan}
                  {...register("data.isVegan", { required: false })}
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
                  onClick={() => console.log("")}
                >
                  Salvar
                </Button>
              </Grid2>
            </Grid2>
          </ModalForm>
        </>
      </Modal>

      <TopDecorativeBarEdit>
        <Button
          sx={{
            color: "var(--regular-white)",
            height: 40,
            width: "auto",
          }}
          variant="contained"
          size="small"
          color="warning"
          onClick={() => setIsmodalOpen(!ismodalOpen)}
        >
          Editar receita
        </Button>
      </TopDecorativeBarEdit>
      <Container>
        <IngredientsContainer>
          <h1>{recipe?.data.name}</h1>
          <h2>Ingredientes:</h2>
          <p>{list}</p>
        </IngredientsContainer>
        <Divider />
        <PrepareStepsContainer>
          <h2>Como preparar:</h2>
          <p>{recipe?.data.prepareSteps}</p>
        </PrepareStepsContainer>
      </Container>
    </>
  );
}

export default RecipeUnit;

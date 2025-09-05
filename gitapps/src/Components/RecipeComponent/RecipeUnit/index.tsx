import axios from "axios";
import { IRecipe } from "../types/types";
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
  const [newRecipe, setNewRecipe] = useState<IRecipe>();
  const [ismodalOpen, setIsmodalOpen] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IRecipe>();
  const list = recipe?.data.ingredients.split(/[,][ ]/).join("\n");

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get(`http://localhost:3000/recipes/${id}`)
        .then(({ data }) => setRecipe(data))
        .catch(({ error }) => console.log(error));
    };
    fetchdata();
  }, []);

  function handleClose(): void {
    setIsmodalOpen(!ismodalOpen);
  }

  function handleEdit(data: IRecipe): void {
    setNewRecipe(data);
    console.log(newRecipe);

    axios
      .put(`http://localhost:3000/recipes/${id}/`, data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Modal open={ismodalOpen} onClose={handleClose}>
        {/* ---------------------------------- Formulário de edição ---------------------------------- */}
        <ModalForm>
          <h2>Editar receita</h2>
          <Grid2 container spacing={1} columns={{ xs: 1, sm: 1, md: 4 }}>
            <Grid2 size={{ xs: 1, sm: 1, md: 4 }} container>
              <FormLabel>Nome da receita</FormLabel>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder={recipe?.data.name}
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
                placeholder={recipe?.data.servings.toString()}
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
                placeholder={recipe?.data.prepareTime.toString()}
                {...register("data.prepareTime", { required: true })}
              />
            </Grid2>

            <Grid2 size={{ xs: 1, md: 1, lg: 1 }} container>
              <FormLabel>Dificuldade</FormLabel>
              <TextField
                type="number"
                size="small"
                fullWidth
                value={recipe?.data.dificulty.toString()}
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
                placeholder={recipe?.data.ingredients}
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
                placeholder={recipe?.data.prepareSteps}
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
                onClick={() => handleSubmit(handleEdit)()}
              >
                Salvar
              </Button>
            </Grid2>
          </Grid2>
        </ModalForm>
      </Modal>
      {/* ---------------------------------- Formulário de edição ---------------------------------- */}

      {/* ---------------------------------- Display da receita ---------------------------------- */}
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
      {/* ---------------------------------- Display da receita ---------------------------------- */}
    </>
  );
}

export default RecipeUnit;

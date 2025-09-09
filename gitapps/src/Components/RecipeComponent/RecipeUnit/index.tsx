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
import AlertComponent from "../../AlertComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormLabel,
  Grid2,
  Modal,
  TextField,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { AlertProps } from "../../AlertComponent/types";
import { recipeSchema, RecipeSchema } from "../types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

function RecipeUnit() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<IRecipe>();
  const [ismodalOpen, setIsmodalOpen] = useState<boolean>(false);
  const [alertProps, setAlertProps] = useState<AlertProps>({
    children: "mensagem padrão ! ".toLocaleUpperCase(),
    open: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeSchema>({
    mode: "onSubmit",
    resolver: zodResolver(recipeSchema),
  });
  const list = recipe?.ingredients.split(/[,][ ]/).join("\n");

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

  function handleEdit(data: RecipeSchema): void {
    axios
      .put(`http://localhost:3000/recipes/${id}/`, data)
      .then((res) => {
        if (res.status === 200) {
          setAlertProps({
            children: "Receita Editada com sucesso!",
            open: true,
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <AlertComponent open={alertProps.open} children={alertProps.children} />
      <Modal open={ismodalOpen} onClose={handleClose}>
        {/* ---------------------------------- Formulário de edição ---------------------------------- */}
        <ModalForm>
          <h2>Editar receita</h2>
          <Grid2 container spacing={1} columns={{ xs: 1, sm: 1, md: 3 }}>
            <Grid2 size={{ xs: 1, sm: 1, md: 4 }} container>
              <FormLabel>Nome da receita</FormLabel>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                error={!!errors.name}
                helperText={errors.name?.message}
                placeholder={recipe?.name}
                {...register("name", { required: true })}
              />
            </Grid2>
            {/* ------------------------------ */}

            <Grid2 size={{ xs: 1, sm: 1, md: 1 }} container>
              <FormLabel>Serve quantas pessoas</FormLabel>
              <TextField
                fullWidth
                size="small"
                type="number"
                error={!!errors.servings}
                helperText={errors.servings?.message}
                placeholder={recipe?.servings.toString()}
                {...register("servings", { required: false })}
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
                error={!!errors.prepareTime}
                helperText={errors.prepareTime?.message}
                placeholder={recipe?.prepareTime.toString()}
                {...register("prepareTime", { required: true })}
              />
            </Grid2>

            <Grid2 size={{ xs: 1, md: 1, lg: 1 }} container>
              <FormLabel>Dificuldade</FormLabel>
              <TextField
                type="number"
                size="small"
                slotProps={{ htmlInput: { type: "number", min: 0, max: 5 } }}
                error={!!errors.dificulty}
                helperText={errors.dificulty?.message}
                fullWidth
                placeholder={recipe?.dificulty.toString()}
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
                error={!!errors.ingredients}
                helperText={errors.ingredients?.message}
                size="medium"
                placeholder={recipe?.ingredients}
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
                error={!!errors.prepareSteps}
                helperText={errors.prepareSteps?.message}
                size="medium"
                placeholder={recipe?.prepareSteps}
                {...register("prepareSteps")}
              />
            </Grid2>
            <Grid2 size={{ sm: 1, md: 4, lg: 4 }} alignSelf={"center"}>
              <FormLabel>Receita vegana</FormLabel>
              <Checkbox
                size="small"
                value={recipe?.isVegan}
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
          <h1>{recipe?.name}</h1>
          <h2>Ingredientes:</h2>
          <p>{list}</p>
        </IngredientsContainer>
        <Divider />
        <PrepareStepsContainer>
          <h2>Como preparar:</h2>
          <p>{recipe?.prepareSteps}</p>
        </PrepareStepsContainer>
      </Container>
      {/* ---------------------------------- Display da receita ---------------------------------- */}
    </>
  );
}

export default RecipeUnit;

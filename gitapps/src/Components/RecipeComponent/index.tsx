import {
  BottomSection,
  Carousel,
  CarouselItem,
  Container,
  ErrorMessage,
  MidSection,
  MostVisited,
  TopNav,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { schema, Schema } from "./types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

function RecipeApp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  function logtest(d: Schema) {
    console.log(d);
  }

  return (
    <Container>
      <TopNav>
        <p>
          {" "}
          Livrinho de <span>receitas</span>
        </p>
        <div>
          <button onClick={() => navigate("/recipeform")}>Criar Receita</button>
          <button onClick={() => navigate("/recipelist")}>
            Explorar Receitas
          </button>
        </div>
      </TopNav>

      <MidSection>
        <p>Encontrar receitas</p>
        <div>
          <input {...register("recipe")} />
          <button onClick={() => handleSubmit(logtest)()}>Pesquisar</button>
        </div>
        {errors.recipe?.message && (
          <ErrorMessage>{errors.recipe.message}</ErrorMessage>
        )}

        <span>
          Centenas de receitas, seja para convidar os amigos para um jantar, ou
          agilizar a semana com pratos práticos e econômicos.
        </span>
      </MidSection>

      <MostVisited>
        <span>Mais vistas</span>
      </MostVisited>

      <Carousel>
        <CarouselItem>a</CarouselItem>
        <CarouselItem>b</CarouselItem>
        <CarouselItem>c</CarouselItem>
        <CarouselItem>d</CarouselItem>
      </Carousel>

      <BottomSection>
        <p>Desenvolvido por João Castro</p>
      </BottomSection>
    </Container>
  );
}

export default RecipeApp;

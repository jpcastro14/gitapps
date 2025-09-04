import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { CardTest, Container, ContentArea, TitleDiv } from "./styles";
import { useNavigate } from "react-router-dom";

function MainComponent() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <TitleDiv>
          <h2>HUB DE APLICATIVOS NIVEL 1</h2>
        </TitleDiv>
        <ContentArea>
          <CardTest variant="elevation">
            <CardContent
              style={{
                textAlign: "start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  fontSize: 20,
                  fontWeight: 300,
                  marginBottom: 2,
                }}
              >
                Todo List
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: 20,
                }}
              >
                Um app de lista de tarefas, criado com ReactJs e Typescript,
                utilizado para controlar tarefas a fazer, concluidas e
                pendentes.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => navigate("/todo")}
                variant="outlined"
                fullWidth
              >
                Testar
              </Button>
            </CardActions>
          </CardTest>

          <CardTest variant="elevation">
            <CardContent
              style={{
                textAlign: "start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  fontSize: 20,
                  fontWeight: 300,
                  marginBottom: 2,
                }}
              >
                Livro de receitas
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: 20,
                }}
              >
                Um livro de receitas para fazer um jantar elaborado para os
                amigos, ou para agilizar a sua semana com pratos práticos
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => navigate("/recipe")}
                variant="outlined"
                fullWidth
              >
                Testar
              </Button>
            </CardActions>
          </CardTest>
        </ContentArea>
      </Container>
    </>
  );
}

export default MainComponent;

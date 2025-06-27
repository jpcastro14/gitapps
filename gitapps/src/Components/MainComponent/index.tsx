import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { CardTest, Container, ContentArea, TitleDiv } from "./styles";

function MainComponent() {
  return (
    <>
      <Container>
        <TitleDiv>
          <h2>HUB DE APLICATIVOS NIVEL 1</h2>
        </TitleDiv>
        <ContentArea>
          <CardTest variant="outlined">
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
              <Button variant="outlined" fullWidth>
                Testar
              </Button>
            </CardActions>
          </CardTest>

          <Card>b</Card>
          <Card>c</Card>
          <Card>d</Card>
          <Card>d</Card>
          <Card>d</Card>
          <Card>d</Card>
          <Card>d</Card>
        </ContentArea>
      </Container>
    </>
  );
}

export default MainComponent;

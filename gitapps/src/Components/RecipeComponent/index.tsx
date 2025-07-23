import { BottomSection, Container, MidSection, TopNav } from "./styles";
import { useNavigate } from "react-router-dom";

function RecipeApp() {

    const navigate = useNavigate()

    return (
        <Container>
            <TopNav>
                <p> Livrinho de <span>receitas</span></p>
                <button onClick={() => navigate("/recipeform")}>Criar Receita</button>
            </TopNav>
            <MidSection>
                <p>Encontrar receitas</p>
                <input type="text" />
                <span>Centenas de receitas, seja para convidar os amigos para um jantar, ou agilizar a semana com pratos práticos e econômicos.</span>
            </MidSection>
            <BottomSection>
                <p>
                    Desenvolvido por João Castro
                </p>
            </BottomSection>
        </Container>
    )
}

export default RecipeApp
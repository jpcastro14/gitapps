import { ContentDiv, LogoDiv, LogoutDiv, SideNavContainer } from "./styles";
import { useAuth } from "../../context/AuthProvider/useAuth";
import logo from "../../assets/LOGINLOGO.svg";

function MainComponent() {
  const auth = useAuth();

  return (
    <>
      <SideNavContainer>
        <LogoDiv onClick={auth.logout}>
          <img src={logo} />
          <h2>Software</h2>
        </LogoDiv>
        <ContentDiv>
          <button>Contratos</button>
          <button>Empresas</button>
          <button>Clientes</button>
          <button>Projetos</button>
          <button>Fórum</button>
        </ContentDiv>
        <LogoutDiv>
          <button onClick={auth.logout}>LogOut</button>
        </LogoutDiv>
      </SideNavContainer>
    </>
  );
}

export default MainComponent;

import {
  ContentDiv,
  LogoDiv,
  LogoutDiv,
  MainContentDiv,
  SideNavContainer,
} from "./styles";
import { useAuth } from "../../context/AuthProvider/useAuth";
import logo from "../../assets/LOGINLOGO.svg";
import { JSX, useState } from "react";
import { ContractsComponent } from "./ContractsComponent";
import { ClientsComponent } from "./ClientsComponent";

function MainComponent() {
  const auth = useAuth();

  const [showComponent, setShowComponent] =
    useState<JSX.Element>(ContractsComponent);

  return (
    <>
      <SideNavContainer>
        <LogoDiv onClick={auth.logout}>
          <img src={logo} />
          <h2>Software</h2>
        </LogoDiv>
        <ContentDiv>
          <button onClick={() => setShowComponent(ClientsComponent)}>
            Cliente
          </button>
          <button onClick={() => setShowComponent(ContractsComponent)}>
            Contratos
          </button>
          <button>Empresas</button>
          <button>Projetos</button>
          <button>Fórum</button>
        </ContentDiv>
        <LogoutDiv>
          <button onClick={auth.logout}>LogOut</button>
        </LogoutDiv>
      </SideNavContainer>
      <MainContentDiv>{showComponent}</MainContentDiv>
    </>
  );
}

export default MainComponent;

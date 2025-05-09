import {
  ContentDiv,
  LogoDiv,
  LogoutDiv,
  MainContentDiv,
  SideNavContainer,
} from "./styles";
import { useAuth } from "../../context/AuthProvider/useAuth";
import logo from "../../assets/LOGINLOGO.svg";
import { ReactElement, useContext, useState } from "react";
import { ContractsComponent } from "./ContractsComponent";
import { ClientsComponent } from "./ClientsComponent";
import { UserContext } from "../../DataContext/UserContext";

function MainComponent() {
  const [showComponent, setShowComponent] =
    useState<ReactElement>(ClientsComponent);

  const auth = useAuth();
  const user = useContext(UserContext);

  return (
    <>
      <SideNavContainer>
        <LogoDiv onClick={auth.logout}>
          <img src={logo} />
          <h2></h2>
        </LogoDiv>
        <ContentDiv>
          <button
            onClick={() => setShowComponent(<ClientsComponent />)}
          ></button>
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

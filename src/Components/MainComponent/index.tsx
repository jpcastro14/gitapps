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
import { ClientsComponent } from "./ClientsComponent";

function MainComponent() {
  const [showComponent, setShowComponent] = useState<ReactElement>();

  const auth = useAuth();

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

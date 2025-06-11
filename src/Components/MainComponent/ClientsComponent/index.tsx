import { useContext } from "react";
import {
  Container,
  ClientInfoContainer,
  ClientContactContainer,
  ClientsCard,
} from "./styles";
import { UserContext } from "../../../DataContext/UserContext";

export const ClientsComponent = () => {
  const user = useContext(UserContext);

  return (
    <Container>
      <ClientsCard>
        <ClientInfoContainer>
          <span>
            {user?.name} {user?.surname}
          </span>
          <p>{user?.project}</p>
        </ClientInfoContainer>
        <ClientContactContainer>
          <span>Email: carlosduarte@kpsoftware.com</span>
          <p>LinkeDin: linked.in/user/carlosedd</p>
          <p>Cel: ( 61 ) 9 9000 9000 </p>
          <p>Cel: ( 61 ) 8000 8000 </p>
        </ClientContactContainer>
      </ClientsCard>
    </Container>
  );
};

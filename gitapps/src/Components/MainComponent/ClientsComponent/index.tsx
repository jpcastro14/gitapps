import {
  Container,
  ClientInfoContainer,
  ClientContactContainer,
  ClientsCard,
} from "./styles";

export const ClientsComponent = () => {
  return (
    <Container>
      <ClientsCard>
        <ClientInfoContainer>
          <span>Carlos Almácegas Duarte </span>
          <p>KP Software - Carreira Policial</p>
        </ClientInfoContainer>
        <ClientContactContainer>
          <span>Email: carlosduarte@kpsoftware.com</span>
          <p>LinkeDin: linked.in/user/carlosedd</p>
          <p>Cel: ( 61 ) 9 9000 9000 </p>
          <p>Cel: ( 61 ) 8000 8000 </p>
        </ClientContactContainer>
      </ClientsCard>
      <ClientsCard>
        <ClientInfoContainer>
          <span>Carlos Almácegas Duarte </span>
          <p>KP Software - Carreira Policial</p>
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

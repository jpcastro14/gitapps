import { Container } from "./styles";

import { AlertProps } from "./types";

function AlertComponent({ children, open }: AlertProps) {
  return (
    <>
      <Container open={open}>
        <p>{children}</p>
      </Container>
    </>
  );
}

export default AlertComponent;

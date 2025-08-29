import { Container } from "./styles";

import { AlertProps } from "./types";

function AlertComponent({ message }: AlertProps) {
  return <Container>{message}</Container>;
}

export default AlertComponent;

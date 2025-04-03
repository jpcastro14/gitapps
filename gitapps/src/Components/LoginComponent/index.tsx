import {
  CheckBoxContainer,
  FormContainer,
  LabelContainer,
  LoginContainer,
  LogoContainer,
} from "./styles";
import LOGINLOGO from "../../assets/LOGINLOGO.svg";
//import { useForm } from "react-hook-form";

function Login() {
  //const { register, handleSubmit } = useForm();

  return (
    <LoginContainer>
      <LogoContainer>
        <img src={LOGINLOGO} />
        <p>software</p>
      </LogoContainer>
      <FormContainer id="FormContainer 001">
        <LabelContainer>
          <label htmlFor="user_id">Login</label>
        </LabelContainer>
        <input type="text" id="user_id" />
        <LabelContainer>
          <label htmlFor="user_password">Senha</label>
        </LabelContainer>
        <input type="password" />
        <CheckBoxContainer>
          <input type="checkbox" />
          Me manter conectado
        </CheckBoxContainer>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;

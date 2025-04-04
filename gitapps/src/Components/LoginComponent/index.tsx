import {
  CheckBoxContainer,
  FormContainer,
  LabelContainer,
  LoginContainer,
  LogoContainer,
  SubmitContainer,
} from "./styles";
import LOGINLOGO from "../../assets/LOGINLOGO.svg";
import { useForm } from "react-hook-form";
import { ILogin } from "../../context/AuthProvider/types";

function Login() {
  const { register, handleSubmit } = useForm();

  function handlePost(data: ILogin) {
    console.log(data);

  }


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
        <input type="text" id="user_id"  {...register("user", { required: true })} />
        <LabelContainer>
          <label htmlFor="user_password">Senha</label>
        </LabelContainer>
        <input type="password"  {...register("password", { required: true })} />
        <CheckBoxContainer>
          <input type="checkbox" />
          Me manter conectado
        </CheckBoxContainer>
      </FormContainer>
      <SubmitContainer>
        <button onClick={() => handleSubmit(handlePost)()} >Login</button>
      </SubmitContainer>
    </LoginContainer>
  );
}

export default Login;

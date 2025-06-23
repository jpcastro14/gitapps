import {
  CheckBoxContainer,
  FormAlert,
  FormContainer,
  LabelContainer,
  LoginContainer,
  LogoContainer,
  SubmitContainer,
} from "./styles";
import LOGINLOGO from "../../assets/LOGINLOGO.svg";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider/useAuth";

function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const auth = useAuth();

  async function handleLogin() {
    const values = getValues();
    console.log(values);

    try {
      await auth.authenticate(values.email, values.password);
    } catch (error) {
      alert("Usuário ou senha incorretos");
    }
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
        <input
          type="text"
          id="user_id"
          {...register("email", { required: true, minLength: 10 })}
        />

        {errors?.user?.type === "required" && (
          <FormAlert style={{ visibility: "visible" }}>
            Este campo precisa ser preenchido
          </FormAlert>
        )}

        {errors?.user?.type === "minLength" && (
          <FormAlert style={{ visibility: "visible" }}>
            Esse campo precisa ter 10 caracteres
          </FormAlert>
        )}

        <LabelContainer>
          <label htmlFor="user_password">Senha</label>
        </LabelContainer>
        <input type="password" {...register("password", { required: true })} />
        {/* <CheckBoxContainer>
          <input type="checkbox" />
          Me manter conectado
        </CheckBoxContainer> */}

        {errors?.password?.type === "required" && (
          <FormAlert style={{ visibility: "visible" }}>
            Este campo precisa ser preenchido
          </FormAlert>
        )}
      </FormContainer>
      <SubmitContainer>
        <button onClick={() => handleSubmit(handleLogin)()}>Login</button>
      </SubmitContainer>
    </LoginContainer>
  );
}

export default Login;

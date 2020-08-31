import { useSubmit } from "../hooks/useSubmit";
import { Input } from "@chakra-ui/core";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      email: "user@wolox.com.ar",
      password: "",
      remember: false
    }
  });

  const { onSubmit, loading, submitting } = useSubmit();

  return (
    <div>
      {loading && (<div>Cargando...</div>)}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            ref={register({ required: "Introduce un mail válido" })}
          />

          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            ref={register({
              required: "Introduce una contraseña válida",
              minLength: {
                value: 8,
                message: "La contraseña debe tener 8 caracteres"
              },
              validate: (value) => {
                return (
                  [/[0-9]/].every((pattern) => pattern.test(value))
                ) || "La contraseña debe incluir números";
              }
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <div>
          <label htmlFor="terms">Desea ser recordado?</label>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            ref={register}
          />
        </div>
        <Input type="submit" as="button" disable={submitting} value="Iniciar sesión" />
      </form>
    </div>
  );
};

export default Login;

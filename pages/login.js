import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useRouter } from "next/router";

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      email: "user@wolox.com.ar",
      password: "",
      remember: false
    }
  });
  const [submitting, setSubmitting] = useState(false);
  const { setValue, storedValue } = useLocalStorage("session", {});

  const router = useRouter();

  return (
    <div>
      <form onSubmit={handleSubmit(async (formData) => {
        setSubmitting(true);

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: formData.name,
            password: formData.password,
            remember: formData.remember
          })
        };

        const response = await fetch("http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login", options);

        const data = await response.json();

        if (formData.remember) {
          const { email } = formData;
          const { token } = data;

          const session = {
            email,
            token
          };
          setValue(session);

          // Here I want the user be redirected to /tecnologias
          router.push("/tecnologia");
        } else {
          setValue({});
        }

        console.log(storedValue);

        setSubmitting(false);
      })}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={register({ required: "Introduce un mail válido" })}
          />

          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
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
        <input type="submit" disabled={submitting} value="Iniciar sesión" />
      </form>
    </div>
  );
};

export default Login;

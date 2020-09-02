import {
  Input,
  FormLabel
} from "@chakra-ui/core";

const InputPass = ({ register, errors }) => {
  return (
    <>
      <FormLabel htmlFor="password">Password</FormLabel>
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
      {errors.password &&
        <div>{errors.password.message}</div>
      }
    </>
  );
};

export default InputPass;

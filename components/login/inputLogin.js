import {
  Input,
  FormLabel
} from "@chakra-ui/core";

const InputLogin = ({ register, errors }) => {
  return (
    <>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input
        type="email"
        name="email"
        id="email"
        ref={register({
          required: "Introduce un mail válido"
        })}
      />

      {errors.email &&
        <div>{errors.email.message}</div>
      }
    </>
  );
};

export default InputLogin;

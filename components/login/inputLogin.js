import {
  Input,
  FormLabel
} from "@chakra-ui/core";
import Notification from "../notifications/notification";

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
        <Notification text={errors.email.message} status="warning" />
      }
    </>
  );
};

export default InputLogin;

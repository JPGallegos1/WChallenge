import {
  Input
} from "@chakra-ui/core";

const SubmitForm = ({ submitting }) => {
  return (
    <>
      <Input
        type="submit"
        disable={submitting}
        value="Iniciar sesión"
        color="wolox.100"
        cursor="pointer"
        w="20rem"
      />
    </>
  );
};

export default SubmitForm;

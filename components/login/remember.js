import {
  FormLabel
} from "@chakra-ui/core";

const Remember = ({ register }) => {
  return (
    <>
      <FormLabel htmlFor="terms">Desea ser recordado?</FormLabel>
      <input
        type="checkbox"
        name="remember"
        id="remember"
        ref={register}
      />
    </>
  );
};

export default Remember;

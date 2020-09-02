import { Text } from "@chakra-ui/core";
const TechCounter = ({ techs }) => {
  return (
    <>
      {techs.length === 1
        ? <Text ml={5}>Total: {techs.length} tecnología</Text>
        : <Text ml={5}>Total: {techs.length} tecnologías</Text>
      }
    </>
  );
};

export default TechCounter;

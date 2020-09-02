import { Input } from "@chakra-ui/core";
const TechInput = ({ setSearchTech }) => {
  return (
    <>
      <Input
        type="text"
        name="tech"
        id="tech"
        onChange={e => setSearchTech(e.target.value)}
        w="20rem"
        placeholder="Buscar tecnología..."
        borderColor="gray.500"
      />
    </>
  );
};

export default TechInput;

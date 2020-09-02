import { SimpleGrid } from "@chakra-ui/core";
import TechItem from "./techitem";

const TechList = ({ techs }) => {
  return (
    <>
      <SimpleGrid
        as="ul"
        minChildWidth="300px"
        spacing="40px"
        justify="space-between"
        align="center"
        w="100%" pt="5rem"
      >
        {techs.map(tech => <TechItem key={tech.tech} tech={tech} />)}
      </SimpleGrid>
    </>
  );
};

export default TechList;

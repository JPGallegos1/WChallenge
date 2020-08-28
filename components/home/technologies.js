import { Box } from "@chakra-ui/core";
import Layout from "../layout/layout";
import Hero from "../hero";
import Title from "../title";

const Technologies = () => {
  return (
    <Box as="section">
      <Layout
        as="div"
        align="center"
        justify="space-between"
        backgroundColor="white"
        p="0 2rem 0 2rem"
        h="100vh"
      >
        <Title as="h2" fontSize="2rem" flex="0 0 35%">
          Estamos buscando para incorporar gente increíble para estas tecnologías
        </Title>
        <Hero
          src="assets/Ic_Tecnologys.svg"
          alt="Technologies"
          width="100%"
          height="17rem"
          padding="0 2rem 0 0"
        />
      </Layout>
    </Box>
  );
};

export default Technologies;

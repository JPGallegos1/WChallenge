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
        flexDirection={{ sm: "column", md: "row" }}
        backgroundColor="white"
        p="0 2rem 0 2rem"
        mb={{ sm: "5rem", md: "0" }}
        h={{ sm: "60vh", md: "80vh" }}
      >
        <Title
          as="h2"
          fontSize="2rem"
          flex={{ sm: "1", md: "0 0 35%" }}
          textAlign={{ sm: "center", md: "left" }}
        >
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

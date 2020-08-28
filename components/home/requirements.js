import { Box } from "@chakra-ui/core";
import Layout from "../layout/layout";
import Title from "../title";
import Hero from "../hero";

const requirements = [
  { label: "Estudiantes avanzados o recibidos de carreras del rubro", src: "assets/Ic_Bullet_1.svg" },
  { label: "Inglés intermedio/avanzado", src: "assets/Ic_Bullet_2.svg" },
  { label: "Conocimientos en metodologías ágiles (deseable)", src: "assets/Ic_Bullet_3.svg" }
];

requirements.map(requirement => { requirement.key = `nav-link-${requirement.label}-${requirement.src}`; });

const Requirements = () => {
  return (
    <Box as="section">
      <Layout
        as="div"
        align="center"
        justify="space-between"
        p="0 2rem 0 2rem"
        h="60vh"
      >
        <Title as="h1" fontSize="2.8rem" flex="0 0 35%">
          Requerimientos
        </Title>
        <Layout as="ul" justify="space-between" align="left" w="30rem" h="10rem" flexDirection="column">
          {requirements.map(({ key, label, src }) => (
            <Layout as="li" key={key} flexDirection="row">
              <Hero src={src} mb={4} mr={4} />

              <Box>
                {label}
              </Box>
            </Layout>
          ))}
        </Layout>
      </Layout>
    </Box>
  );
};

export default Requirements;

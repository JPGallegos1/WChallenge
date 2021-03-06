import { Box, SimpleGrid } from "@chakra-ui/core";
import Layout from "../layout/layout";
import Title from "../title";
import Hero from "../hero";

const benefits = [
  { label: "Flexibilidad horaria", src: "assets/Ic_Hour.svg", alt: "flexibilidad horaria" },
  { label: "Home Office", src: "assets/Ic_HomeOffice.svg", alt: "home office" },
  { label: "Capacitaciones y workshops", src: "assets/Ic_Workshops.svg", alt: "capacitaciones" },
  { label: "Snack, frutas y bebidas gratis", src: "assets/Ic_DrinkSnacks.svg", alt: "snacks y frutas" },
  { label: "Semana remota", src: "assets/Ic_laptop.svg", alt: "semana remota" },
  { label: "Trabajar en últimas tecnologías", src: "assets/Ic_brain.svg", alt: "últimas tecnologías" }
];

benefits.map(benefit => { benefit.key = `nav-link-${benefit.label}-${benefit.src}`; });

const Benefits = () => {
  return (
    <Box as="section" borderBottom="2px solid" borderColor="gray.200" w="90%" m="0 auto" pb="2rem">
      <Layout
        as="div"
        align="center"
        backgroundColor="white"
        p="0 2rem 0 2rem"
        flexDirection="column"
      >
        <Title
          as="h2"
          fontSize="2rem"
          flex="0 0 35%"
          pt="5rem"
          textAlign={{ sm: "center", md: "left" }}
          fontWeight="medium"
        >
          Entre los beneficios que ofrecemos se encuentran 😉
        </Title>
        <SimpleGrid as="ul" minChildWidth="90px" spacing="40px" justify="space-between" align="center" w="100%" pt="5rem">
          {benefits.map(({ key, label, src, alt }) => (
            <Layout as="li" key={key} justify="space-between" align="center" flexDirection="column">
              <Hero src={src} alt={alt} mb={4} />

              <Box textAlign="center">
                {label}
              </Box>
            </Layout>
          ))}
        </SimpleGrid>

      </Layout>
    </Box>
  );
};

export default Benefits;

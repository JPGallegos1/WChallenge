import { Box } from "@chakra-ui/core";
import Layout from "../layout/layout";
import Hero from "../hero";
import Title from "../title";

const Welcome = () => {
  return (
    <Box
      as="section"
      borderBottom={{ sm: "1px solid", md: "none" }}
      borderColor={{ sm: "gray.200" }}>
      <Layout
        as="div"
        align="center"
        justify="space-between"
        wrap="wrap"
        p="0 2rem 0 2rem"
        backgroundImage={{ sm: "unset", md: "url('assets/Backgrounds/Bg_Header.png')" }}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center center"
        h={{ sm: "60vh", md: "90vh" }}
      >
        <Title
          as="h1"
          fontSize="2.8rem"
          flex={{ sm: 1, md: "0 0 35%" }}
          textAlign={{ sm: "center", md: "left" }}>
          Bienvenido a tu Entrevista Técnica en Wolox
        </Title>
        <Hero
          src="assets/ImgHero/Ic_ilustra_Hero.png"
          alt="Wolox logo"
          width="100%"
          height="20rem"
          padding="0 5rem 0 0"
          display={{ sm: "none", md: "block" }}
        />
      </Layout>
    </Box>
  );
};

export default Welcome;

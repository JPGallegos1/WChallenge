import Layout from "../layout/layout";
import Hero from "./hero";
import Title from "../title";

const HomePage = () => {
  return (
    <Layout
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      p="1.5rem"
      backgroundImage="url('assets/Backgrounds/Bg_Header.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center center"
      h="100vh"
    >
      <Title as="h1" fontSize="2.8rem" flex="0 0 35%">
        Bienvenido a tu Entrevista Técnica en Wolox
      </Title>
      <Hero />
    </Layout>
  );
};

export default HomePage;

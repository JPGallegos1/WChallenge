import Layout from "../layout";
import Title from "../../title";
import Hero from "../../hero";
import { PseudoBox } from "@chakra-ui/core";
import FooterButton from "./footerButton";

const Header = () => {
  return (
    <Layout
      as="footer"
      flexDirection="column"
      align="center"
      justify="space-between"
      p="1.5rem 2rem 0 2rem"
      backgroundImage="url('assets/Backgrounds/Bg_Footer.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center center"
      h="80vh"
    >
      <Layout
        as="div"
        flexDirection="column"
        justify="space-around"
        flex="0 0 50%"
        align="center"
      >
        <Title
          as="h2"
          fontSize={{ sm: "2.3rem", md: "3.3rem" }}
          textAlign={{ sm: "center" }}
          mb={{ sm: "1rem", md: "0" }}
        >
          ¡Gracias por <PseudoBox as="span" color="wolox.100">completar el ejercicio!</PseudoBox>
        </Title>

        <Title
          as="h2"
          fontSize={{ sm: "1.6rem", md: "2.3rem" }}
          textAlign={{ sm: "center" }}
          mb={{ sm: "1rem", md: "0" }}
          fontWeight="medium"
        >
          Te invitamos a ver más información:
        </Title>

        <FooterButton
          href="https://www.wolox.com.ar/"
          text="Conocer más"
          w="12rem"
          bg="blue.300"
          color="white"
          bg_hover="white"
          color_hover="blue.300"
        />
      </Layout>

      <Hero src="assets/Ic_Wolox_Footer.svg" alt="Wolox" h="2rem" mb={6} />
    </Layout>
  );
};

export default Header;

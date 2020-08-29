import { Box, Link } from "@chakra-ui/core";
import Layout from "../layout/layout";
import Title from "../title";

const Woloxers = () => {
  return (
    <Box as="section">
      <Layout
        as="div"
        align="center"
        justify="space-between"
        backgroundColor="gray.200"
        p={{ sm: "0", md: "0 2rem 0 0" }}
        h="70vh"
        flexDirection={{ sm: "column", md: "row" }}
      >
        <Layout
          as="div"
          flexDirection="column"
          justifyContent="center"
          align="center"
          color="white"
          backgroundImage="url('assets/img_woloxer.png')"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          h="100%"
          w="100%">
          <Title as="h2" fontSize="2rem">
            350 + Woloxers
          </Title>

          <Layout flexDirection="row" align="center" justify="center">
            <Box>Icono</Box>
            <Box>@Wolox</Box>
          </Layout>
          <Link href="https://twitter.com/wolox" isExternal>Síguenos</Link>

        </Layout>

        <Box alignItems="center" justify="center" flex="0 0 35%">
          <Title as="h2" fontSize="2rem" textAlign="center" m={{ sm: "3rem", md: "0" }} >
            Trabajamos para convertir ideas en productos
          </Title>
        </Box>
      </Layout>
    </Box>
  );
};

export default Woloxers;

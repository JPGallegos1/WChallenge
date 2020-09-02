import { Box, PseudoBox, Image } from "@chakra-ui/core";
import Layout from "../../layout/layout";
import Title from "../../title";
import WoloxButton from "./woloxButton";

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
          <Title as="h2" fontSize="2.5rem" color="wolox.100">
            <PseudoBox as="span" color="wolox.200">350 +</PseudoBox> Woloxers
          </Title>

          <Layout flexDirection="row" align="center" justify="center">
            <Image src="assets/tw.png" alt="twitter" h="2rem" mr={2} />
            <Box>@Wolox</Box>
          </Layout>
          <WoloxButton />

        </Layout>

        <Box alignItems="center" justify="center" flex="0 0 35%">
          <Title as="h2" fontWeight="medium" fontSize="2rem" textAlign="center" m={{ sm: "3rem", md: "0" }} >
            Trabajamos para <PseudoBox as="span" color="wolox.100" fontWeight="bold">convertir</PseudoBox>
            <PseudoBox as="span" color="wolox.200" fontWeight="bold"> ideas</PseudoBox> en productos
          </Title>
        </Box>
      </Layout>
    </Box>
  );
};

export default Woloxers;

import { Link, Box, PseudoBox, ListItem } from "@chakra-ui/core";
const FooterButton = () => (
  <>
    <ListItem as="li" listStyleType="none">
      <Box
        as="button"
        bg="blue.300"
        color="white"
        transition="all .3s ease"
        borderRadius="10rem"
      >
        <PseudoBox
          _hover={{ bg: "white", color: "blue.300" }}
          border="1px solid"
          borderColor="white"
          p={2}
          w="12rem"
          borderRadius="10rem"
        >
          <Link href="https://www.wolox.com.ar/" isExternal>Conocer más</Link>
        </PseudoBox>
      </Box>
    </ListItem>
  </>
);

export default FooterButton;

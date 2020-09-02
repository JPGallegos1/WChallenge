import NextLink from "next/link";
import { Link, Box, PseudoBox, ListItem } from "@chakra-ui/core";

const NavButton = () => (
  <>
    <ListItem as="li" listStyleType="none">
      <Box
        as="button"
        bg="transparent"
        color="blue.300"
        transition="all .3s ease"
      >
        <NextLink href="/login">
          <PseudoBox
            _hover={{ bg: "blue.200", color: "white" }}
            border="1px solid"
            borderColor="blue.300"
            p={2}
            w="8rem"
            borderRadius="10rem"
          >
            <Link>Login</Link>
          </PseudoBox>
        </NextLink>
      </Box>
    </ListItem>
  </>
);

export default NavButton;

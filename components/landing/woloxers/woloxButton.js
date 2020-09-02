import { Link, Box, ListItem } from "@chakra-ui/core";
const WoloxButton = () => (
  <>
    <ListItem as="li" listStyleType="none">
      <Box
        as="button"
        bg="transparent"
        color="white"
        borderRadius="10rem"
        border="1px solid #63b3ed"
        p={2}
        w="12rem"
      >
        <Link href="https://www.wolox.com.ar/" isExternal>Síguenos</Link>
      </Box>
    </ListItem>
  </>
);

export default WoloxButton;

import NextLink from "next/link";
import { Link, PseudoBox } from "@chakra-ui/core";

const LoginButton = () => {
  return (
    <>
      <NextLink href="/login">
        <Link>
          <PseudoBox as="button" bg="transparent" color="blue.300" p={2} w="8rem" borderRadius="10rem" border="1px solid" borderColor="blue.300" _hover={{ bg: "blue.200", color: "white" }} transition="all .3s ease">
            Login
          </PseudoBox>
        </Link>
      </NextLink>
    </>
  );
};

export default LoginButton;

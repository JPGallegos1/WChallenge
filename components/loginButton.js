import NextLink from "next/link";
import { Link, PseudoBox } from "@chakra-ui/core";

const LoginButton = () => {
  return (
    <>
      <NextLink href="/login">
        <Link as="button">
          <PseudoBox
            bg="transparent"
            color="blue.300"
            p={{ sm: "0", md: 2 }}
            w={{ sm: "100%", md: "8rem" }}
            borderRadius={{ sm: "none", md: "10rem" }}
            border={{ sm: "none", md: "1px solid" }}
            borderColor={{ sm: "transparent", md: "blue.300" }}
            _hover={{ bg: "blue.200", color: "black" }}
            transition="all .3s ease">
            Login
          </PseudoBox>
        </Link>
      </NextLink>
    </>
  );
};

export default LoginButton;

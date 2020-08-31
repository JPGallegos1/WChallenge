import NextLink from "next/link";
import Layout from "./layout";
import LoginButton from "../loginButton";
import { Link } from "@chakra-ui/core";

const Nav = () => {
  // const { user: { remember, email } } = useLocalStorage("session");

  return (
    <Layout as="nav" flexDirection={{ sm: "column", md: "row" }} align="center">
      <Layout
        as="ul"
        justify="space-between"
        align="center"
        w={{ sm: "20rem", md: "30rem" }}
      >
        <NextLink href="/">
          <Link>Inicio</Link>
        </NextLink>

        <NextLink href="/beneficios">
          <Link>Beneficios</Link>
        </NextLink>

        <NextLink href="/requerimientos">
          <Link>Requerimientos</Link>
        </NextLink>

      </Layout>
      <LoginButton />
    </Layout >
  );
};

export default Nav;

import NextLink from "next/link";
import Layout from "../layout";
import { Link, ListItem } from "@chakra-ui/core";

const NavItem = () => (
  <>
    <Layout
      flexDirection={{ sm: "row" }}
      w={{ sm: "18rem", md: "30rem" }}
      justify="space-between"
      fontSize={{ sm: ".8rem", md: "1rem" }}
      p={{ sm: "1rem 0", md: "0" }}
    >

      <ListItem listStyleType="none">
        <NextLink href="/">
          <Link >Inicio</Link>
        </NextLink>
      </ListItem>

      <ListItem listStyleType="none">
        <NextLink href="/tecnologias">
          <Link >Tecnologias</Link>
        </NextLink>
      </ListItem>

      <ListItem listStyleType="none">
        <NextLink href="/beneficios">
          <Link >Beneficios</Link>
        </NextLink>
      </ListItem>

      <ListItem listStyleType="none">
        <NextLink href="/requerimientos">
          <Link mr={3} >Requerimientos</Link>
        </NextLink>
      </ListItem>
    </Layout>
  </>
);

export default NavItem;

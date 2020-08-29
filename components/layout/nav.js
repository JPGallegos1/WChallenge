import NextLink from "next/link";
import Layout from "./layout";
import LoginButton from "../loginButton";
import { Link } from "@chakra-ui/core";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Tecnologia", href: "/tecnologia" },
  { label: "Beneficios", href: "/beneficios" },
  { label: "Requerimientos", href: "/requerimientos" }
];

links.map(link => { link.key = `nav-link-${link.label}-${link.href}`; });

const Nav = () => (
  <Layout as="nav" flexDirection={{ sm: "column", md: "row" }} align="center">
    <Layout
      as="ul"
      justify="space-between"
      align="center"
      w={{ sm: "20rem", md: "30rem" }}
    >
      {links.map(({ key, label, href }) => (
        <NextLink key={key} href={href}>
          <Link>
            {label}
          </Link>
        </NextLink>
      ))}

    </Layout>
    <LoginButton />
  </Layout >
);

export default Nav;

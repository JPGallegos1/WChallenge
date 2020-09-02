import Layout from "../layout";
import NavItem from "./navItem";
import NavButton from "./navButton";

const Nav = () => {
  // const { user: { remember, email } } = useLocalStorage("session");

  return (
    <Layout as="nav" align="center">
      <Layout
        as="ul"
        justify="space-between"
        align="center"
        w={{ sm: "30rem" }}
        flexDirection={{ sm: "column", md: "row" }}
      >

        <NavItem />

        <NavButton />

      </Layout>
    </Layout >
  );
};

export default Nav;

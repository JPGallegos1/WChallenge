import Layout from "./layout";
import Logo from "./logo";
import Nav from "./nav";

const Header = () => {
  return (
    <Layout
      as="header"
      align="center"
      justify={{ sm: "space-around", md: "space-between" }}
      p={{ sm: "1.5rem 0 1.5rem 0", md: "1.5rem 2rem 0 2rem" }}
      mt={{ sm: "4rem", md: 0 }}
      backgroundImage={{ sm: "unset", md: "url('assets/Backgrounds/Bg_Header.png')" }}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center center"
      h={{ sm: "6rem", md: "10rem" }}
      flexDirection={{ sm: "column", md: "row" }}
    >
      <Logo />
      <Nav />
    </Layout>
  );
};

export default Header;

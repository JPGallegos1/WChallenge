import Layout from "./layout";
import Logo from "./logo";
import Nav from "./nav";

const Header = () => {
  return (
    <Layout
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      p="1.5rem"
      backgroundImage="url('assets/Backgrounds/Bg_Header.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center center"
      h={40}
    >
      <Logo />
      <Nav />
    </Layout>
  );
};

export default Header;
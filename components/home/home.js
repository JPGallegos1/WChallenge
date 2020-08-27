import Layout from "../layout/layout";
import Welcome from "./welcome";
import Technologies from "./Technologies";
const HomePage = () => {
  return (
    <Layout as="main" flexDirection="column">
      <Welcome />
      <Technologies />
      <Welcome />
      <Welcome />
    </Layout>
  );
};

export default HomePage;

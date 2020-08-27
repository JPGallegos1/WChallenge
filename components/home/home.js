import Layout from "../layout/layout";
import Welcome from "./welcome";

const HomePage = () => {
  return (
    <Layout as="main" flexDirection="column">
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
    </Layout>
  );
};

export default HomePage;

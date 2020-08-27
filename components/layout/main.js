import Layout from "./layout";
import Welcome from "../home/welcome";
import Technologies from "../home/Technologies";
import Woloxers from "../home/Woloxers";
const Main = () => {
  return (
    <Layout as="main" flexDirection="column">
      <Welcome />
      <Technologies />
      <Woloxers />
      <Welcome />
    </Layout>
  );
};

export default Main;

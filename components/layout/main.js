import Layout from "./layout";
const Main = ({ children }) => {
  return (
    <Layout as="main" flexDirection="column">
      {children}
    </Layout>
  );
};

export default Main;

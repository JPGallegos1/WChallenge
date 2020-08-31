import { useTechsContext } from "../context/techsContext/techsContext";
import Layout from "../components/layout/layout";
import Title from "../components/title";
import TechItem from "../components/techitem";
import { SimpleGrid, Input } from "@chakra-ui/core";
import SkeletonItem from "../components/skeleton";

const Tecnologias = () => {
  const { techs, loading, setSearchTech, setSortTech } = useTechsContext();

  return (
    <Layout as="section" flexDirection={{ sm: "column" }}>
      {loading && <SkeletonItem />}

      <Title>¡Bienvenide a la lista de tecnologías!</Title>
      <Layout>
        <Input
          type="text"
          name="tech"
          id="tech"
          onChange={e => setSearchTech(e.target.value)}
          w="20rem"
          placeholder="Buscar tecnología..."
          borderColor="gray.500"
          margin="0 auto"
        />
        <select onChange={e => setSortTech(e.target.value)}>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
      </Layout>
      <SimpleGrid as="ul" minChildWidth="300px" spacing="40px" justify="space-between" align="center" w="100%" pt="5rem">
        {techs.map(tech => <TechItem key={tech.tech} tech={tech} />)}
      </SimpleGrid>
      <p>{techs.length}</p>
    </Layout>
  );
};

export default Tecnologias;

import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { API, TECHS_ENDPOINT } from "../constants";
import Layout from "../components/layout/layout";
import Title from "../components/title";
import Item from "../components/item";
import { SimpleGrid, Skeleton, Input } from "@chakra-ui/core";

export const URL = `${API}/${TECHS_ENDPOINT}`;

const Tecnologias = () => {
  const [searchTech, setSearchTech] = useState("");
  const [sortTech, setSortTech] = useState("");
  const { getData, loading, response } = useFetch(URL);

  useEffect(() => {
    getData();
  }, []);

  const filterTechs = response.filter(tech => {
    return (
      tech.tech.toLowerCase().includes(searchTech.toLowerCase()) ||
      tech.type.toLowerCase().includes(searchTech.toLowerCase())
    );
  });

  const techs = [...filterTechs].sort((a, b) => {
    return (
      (sortTech === "ASC" && a.tech.localeCompare(b.tech)) ||
      (sortTech === "DESC" && b.tech.localeCompare(a.tech))
    );
  });

  return (
    <Layout as="section" flexDirection={{ sm: "column" }}>
      {loading && <div>
        <Skeleton height="20px" my="10px" colorStart="cyan" colorEnd="green" />
        <Skeleton height="20px" my="10px" colorStart="cyan" colorEnd="green" />
        <Skeleton height="20px" my="10px" colorStart="cyan" colorEnd="green" />
      </div>}

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
        {techs.map(tech => <Item key={tech.tech} tech={tech} />)}
      </SimpleGrid>
      <p>{techs.length}</p>
    </Layout>
  );
};

export default Tecnologias;

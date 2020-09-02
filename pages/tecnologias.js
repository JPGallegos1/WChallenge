import { useTechsContext } from "../context/techsContext/techsContext";
import Layout from "../components/layout/layout";
import SkeletonItem from "../components/skeleton";
import TechTitle from "../components/technologies/techTitle";
import TechInput from "../components/technologies/techInput";
import TechSelect from "../components/technologies/techSelect";
import TechList from "../components/technologies/techList";
import TechCounter from "../components/technologies/techCounter";

const Tecnologias = () => {
  const { techs, loading, setSearchTech, setSortTech } = useTechsContext();

  return (
    <Layout as="section" flexDirection={{ sm: "column" }}>
      {loading && <SkeletonItem />}

      <TechTitle />
      <Layout m="0 auto">
        <TechInput setSearchTech={setSearchTech} />

        <TechSelect setSortTech={setSortTech} />
      </Layout>

      <TechList techs={techs} />

      <TechCounter techs={techs} />
    </Layout>
  );
};

export default Tecnologias;

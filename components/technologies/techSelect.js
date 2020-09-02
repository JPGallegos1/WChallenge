import { Select } from "@chakra-ui/core";

const TechSelect = ({ setSortTech }) => {
  return (
    <>
      <Select
        ml={1}
        flex="0 0 25%"
        onChange={e => setSortTech(e.target.value)}
      >
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </Select>
    </>
  );
};

export default TechSelect;

import { ListItem, useDisclosure } from "@chakra-ui/core";
import CardTech from "./card/card";

const TechItem = ({ tech }) => {
  console.log("desde item", tech);
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <ListItem display="flex" flexDirection={{ sm: "column", md: "row" }}>
      <CardTech onOpen={onOpen} onClose={onClose} isOpen={isOpen} tech={tech} />
    </ListItem>
  );
};

export default TechItem;

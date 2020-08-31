import { Box, Link } from "@chakra-ui/core";
import ModalTech from "./modal";
import CardContent from "./cardContent";

const CardTech = ({ tech, isOpen, onClose, onOpen }) => {
  return (
    <>
      <Box borderWidth="1px" rounded="lg" overflow="hidden" borderColor="gray.300" p={6} m="0 1rem">
        <CardContent tech={tech} />
        <Link onClick={onOpen}>Ver más información</Link>
        <ModalTech onClose={onClose} isOpen={isOpen} tech={tech} />
      </Box>
    </>
  );
};

export default CardTech;

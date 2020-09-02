import { Box } from "@chakra-ui/core";
import Notification from "../notifications/notification";
const TechCounter = ({ techs }) => {
  return (
    <>
      {techs.length === 1
        ? <Box ml={5}>
          <Notification text={`Hay solo ${techs.length} tecnología`} status="error" />
        </Box>
        : <Box ml={5}>
          <Notification text={`Hay un total de ${techs.length} tecnologías`} status="success" />
        </Box>
      }
    </>
  );
};

export default TechCounter;

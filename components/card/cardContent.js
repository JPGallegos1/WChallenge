import { Box } from "@chakra-ui/core";
import CardBadge from "./cardBadge";
import CardDescription from "./cardDescription";
import CardFooter from "./cardFooter";
import CardLogo from "./CardLogo";

const CardContent = ({ tech }) => {
  return (
    <>
      <CardLogo tech={tech} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <CardBadge tech={tech} />

          <CardDescription tech={tech} />
        </Box>
      </Box>

      <CardFooter tech={tech} />
    </>
  );
};

export default CardContent;

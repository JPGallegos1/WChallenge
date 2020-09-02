import { Badge } from "@chakra-ui/core";

const CardBadge = ({ tech }) => {
  return (
    <>
      <Badge rounded="full" px="2" variantColor="teal">
        {tech.language}
      </Badge>
    </>
  );
};

export default CardBadge;

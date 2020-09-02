import { Box } from "@chakra-ui/core";

const CardFooter = ({ tech }) => {
  return (
    <>
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {tech.type} &bull; {tech.author}

      </Box>
    </>
  );
};

export default CardFooter;

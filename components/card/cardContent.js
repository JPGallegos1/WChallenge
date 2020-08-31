import { Image, Box, Badge } from "@chakra-ui/core";

const CardContent = ({ tech }) => {
  return (
    <>
      <Box w="20rem" >
        <Image src={tech.logo} alt={tech.tech} h="8rem" p={6} m="0 auto" />
      </Box>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            {tech.language}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {tech.tech}&bull;{tech.year}
          </Box>
        </Box>
      </Box>

      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {tech.type}

      </Box>
    </>
  );
};

export default CardContent;

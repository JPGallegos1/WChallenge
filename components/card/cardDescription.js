import { Box } from "@chakra-ui/core";

const CardDescription = ({ tech }) => {
  return (
    <>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
      >
        {tech.tech}&bull;{tech.year}&bull;{tech.license}
      </Box>
    </>
  );
};

export default CardDescription;

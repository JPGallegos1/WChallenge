import { Image, Box } from "@chakra-ui/core";

const CardLogo = ({ tech }) => {
  return (
    <>
      <Box w="20rem" >
        <Image src={tech.logo} alt={tech.tech} h="8rem" p={6} m="0 auto" />
      </Box>
    </>
  );
};

export default CardLogo;

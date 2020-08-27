import { Image, Box } from "@chakra-ui/core";

const Hero = ({ src, alt, width, height, padding, flex }) => (
  <>
    <Box>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        padding={padding}
        flex={flex}
      />
    </Box>
  </>
);

export default Hero;

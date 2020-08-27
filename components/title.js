import { Heading } from "@chakra-ui/core";

const Title = ({ children, as, color, fontSize, fontFamily, flex, fontWeight }) => (
  <>
    <Heading
      as={as}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      flex={flex}>
      {children}
    </Heading>
  </>
);

export default Title;

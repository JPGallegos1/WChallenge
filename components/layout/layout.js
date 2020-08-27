import { Flex } from "@chakra-ui/core";

const Layout = ({ children, as, align, justify, p, m, h, w, flex, backgroundImage, backgroundRepeat, backgroundSize, backgroundPosition, flexDirection }) => {
  return (
    <Flex
      as={as}
      flex={flex}
      align={align}
      justify={justify}
      flexDirection={flexDirection}
      height={h}
      width={w}
      margin={m}
      padding={p}
      backgroundImage={backgroundImage}
      backgroundRepeat={backgroundRepeat}
      backgroundSize={backgroundSize}
      backgroundPosition={backgroundPosition}
    >
      {children}
    </Flex>
  );
};

export default Layout;

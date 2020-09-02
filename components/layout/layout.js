import { Flex } from "@chakra-ui/core";

const Layout = ({ children, ...props }) => {
  return (
    <Flex {...props}>
      {children}
    </Flex>
  );
};

export default Layout;

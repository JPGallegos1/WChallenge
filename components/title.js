import { Heading } from "@chakra-ui/core";

const Title = ({ children, ...props }) => (
  <>
    <Heading {...props}>
      {children}
    </Heading>
  </>
);

export default Title;

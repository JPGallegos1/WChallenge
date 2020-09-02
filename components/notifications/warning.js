import { Text } from "@chakra-ui/core";

const Warning = ({ text }) => {
  return (
    <>
      <Text color="yellow.700">{text}</Text>
    </>
  );
};

export default Warning;

import Welcome from "../home/welcome";
import Technologies from "../home/Technologies";
import Woloxers from "../home/Woloxers";
import Benefits from "../home/Benefits";
import Requirements from "../home/Requirements";
import { Divider } from "@chakra-ui/core";
const HomePage = () => {
  return (
    <>
      <Welcome />
      <Technologies />
      <Woloxers />
      <Benefits />
      <Divider border="3px solid" borderColor="gray.200" w="90%" m="0 auto" />
      <Requirements />
    </>
  );
};

export default HomePage;

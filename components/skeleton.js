import { Skeleton } from "@chakra-ui/core";

const SkeletonItem = () => (
  <>
    <Skeleton height="20px" m="10px auto 0 auto" colorStart="cyan" colorEnd="green" w="80%" />
    <Skeleton height="20px" m="10px auto 0 auto" colorStart="cyan" colorEnd="green" w="80%" />
    <Skeleton height="20px" m="10px auto 0 auto" colorStart="cyan" colorEnd="green" w="80%" />
  </>
);

export default SkeletonItem;

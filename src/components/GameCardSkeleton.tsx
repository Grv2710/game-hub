import { Skeleton, SkeletonText, Card, CardBody } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card borderRadius={15} overflow="hidden">
      <Skeleton h={[100, 200]} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;

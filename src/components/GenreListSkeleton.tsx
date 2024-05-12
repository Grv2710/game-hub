import { HStack, Heading, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <HStack paddingY={2}>
      <Skeleton
        height={{ lg: "7vh", xl: "40px" }}
        width={{ lg: "7vh", xl: "40px" }}
      />
      <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" width="100%" />
    </HStack>
  );
};

export default GenreListSkeleton;

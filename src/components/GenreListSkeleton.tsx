import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <HStack alignItems="center" paddingY="5px">
      <Skeleton height="32px" width="32px" />
      <SkeletonText
        noOfLines={1}
        spacing="4"
        skeletonHeight="3"
        width="135px"
      />
    </HStack>
  );
};

export default GenreListSkeleton;

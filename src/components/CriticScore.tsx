import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  return (
    <Badge
      colorScheme={score > 90 ? "green" : score > 85 ? "yellow" : "red"}
      fontSize="14px"
      paddingY={1}
      paddingX={2}
      borderRadius={4}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

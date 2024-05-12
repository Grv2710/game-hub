import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames, { Platform } from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
  selectedSort: string;
  selectedSearch: string;
}
const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedSort,
  selectedSearch,
}: Props) => {
  const { data, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedSort,
    selectedSearch
  );
  const GameSkeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error}</Text>;
  return (
    <>
      <SimpleGrid
        paddingY={3}
        spacing={4}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      >
        {isLoading &&
          GameSkeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!isLoading &&
          data.map((game) => <GameCard game={game} key={game.id} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

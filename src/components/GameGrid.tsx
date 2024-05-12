import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames, { Platform } from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";

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
  const { data, error } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedSort,
    selectedSearch
  );
  return (
    <>
      <SimpleGrid
        paddingY={3}
        spacing={4}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      >
        {data.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

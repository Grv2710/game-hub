import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedSearch, setSelectedSearch] = useState("");

  return (
    <Grid
      paddingX={2}
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText: string) => setSelectedSearch(searchText)}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingRight={2}>
          <Heading as="h1" fontSize="3xl" paddingY={3}>
            Genre
          </Heading>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelector
            onSelectSort={(order: string) => setSelectedSort(order)}
            selectedSort={selectedSort}
          />
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedSort={selectedSort}
          selectedSearch={selectedSearch}
        />
      </GridItem>
    </Grid>
  );
};

export default App;

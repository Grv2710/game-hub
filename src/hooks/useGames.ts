import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

const useGames = (
  selectedGenre: Genres | null,
  selectedPlatform: Platform | null,
  selectedSort: string,
  selectedSearch: string
) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSort,
        search: selectedSearch,
      },
    },
    [selectedGenre, selectedPlatform, selectedSort, selectedSearch]
  );

export default useGames;

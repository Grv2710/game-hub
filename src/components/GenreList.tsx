import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import imageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const GenreSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  if (isLoading)
    return (
      <>
        {GenreSkeleton.map((skeleton) => (
          <GenreListSkeleton key={skeleton} />
        ))}
      </>
    );
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY={1} key={genre.id}>
          <HStack>
            <Image
              borderRadius={8}
              src={imageUrl(genre.image_background)}
              boxSize="40px"
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              textAlign="left"
              whiteSpace="wrap"
              variant="link"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

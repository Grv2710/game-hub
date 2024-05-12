import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({
  onSearch,
}: {
  onSearch: (searchText: string) => void;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Stack width="100%">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement>
            <FaSearch />
          </InputLeftElement>
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search games"
            variant="filled"
          />
        </InputGroup>
      </form>
    </Stack>
  );
};

export default SearchInput;

import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = ({ onSearch }: { onSearch: (searchText: string) => void }) => {
  return (
    <HStack>
      <Box minWidth="100px">
        <Image src={logo} boxSize={55} />
      </Box>
      <SearchInput onSearch={(searchText: string) => onSearch(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

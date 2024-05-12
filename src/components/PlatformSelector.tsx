import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}) => {
  const { data } = usePlatforms();
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
          >
            {selectedPlatform ? selectedPlatform.name : "Platform"}
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default PlatformSelector;

import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      display="flex"
      alignItems="center"
      textTransform="capitalize"
      isChecked={colorMode === "dark"}
      colorScheme="green"
      onChange={toggleColorMode}
      whiteSpace="nowrap"
    >
      {colorMode} mode
    </Switch>
  );
};

export default ColorModeSwitch;

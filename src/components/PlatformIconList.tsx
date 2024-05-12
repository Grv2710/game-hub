import {
  FaLinux,
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { IoIosPhonePortrait, IoLogoAndroid } from "react-icons/io";
import { SiNintendogamecube } from "react-icons/si";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

const PlatformIconList = ({ platforms }: { platforms: Platform[] }) => {
  const IconMap: { [key: string]: IconType } = {
    linux: FaLinux,
    pc: FaWindows,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: IoIosPhonePortrait,
    android: IoLogoAndroid,
    nintendo: SiNintendogamecube,
  };

  return (
    <HStack spacing={2} paddingY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={IconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;

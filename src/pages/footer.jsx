import { HStack, IconButton, Link, useColorMode } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const data = [
  {
    name: "Github",
    href: "https://github.com/nabilaba",
    icon: FaGithub,
  },
];

export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      {data?.map((item) => (
        <Link href={item.href} key={item.name} isExternal>
          <IconButton aria-label={item.name} icon={<item.icon />} rounded="full" />
        </Link>
      ))}
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        rounded="full"
      />
    </HStack>
  );
}

import {
  Code,
  HStack,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const importGlob = import.meta.glob(
  ["../pages/**/index.jsx", "../pages/**/404.jsx"],
  {
    eager: true,
  }
);
const routes = Object.keys(importGlob).map((path) => {
  const name = path.match(/\.\/(.*)\.jsx$/i)[1];
  const component = importGlob[path].default;

  return {
    name: name.replace("/index", ""),
    path: name === "index" ? "/" : `/${name.replace("index", "")}`,
    component,
  };
});

export default function Home() {
  return (
    <Stack align="center" p="14" minH="100vh">
      <Stack maxW="lg" textAlign="center" align="center" spacing="4">
        <Image src="/favicon.svg" alt="logo" boxSize="100px" />
        <Text>Nabil Vite ReactJs</Text>
        <Text>
          Includes: <Code>Chakra UI</Code>, <Code>Chakra UI Icons</Code>,{" "}
          <Code>Framer Motion</Code>, <Code>axios</Code>,{" "}
          <Code>React Helmet Async</Code>, <Code>React Icons</Code>,{" "}
          <Code>React Router DOM</Code>, <Code>Sweetalert</Code>
        </Text>
        <HStack divider={<StackDivider />}>
          {routes.map(({ name, path }, index) => (
            <Link key={index} to={path}>
              {name}
            </Link>
          ))}
        </HStack>
        <Footer />
        <Text fontStyle="italic">Last updated on 21 Sep 2023.</Text>
      </Stack>
    </Stack>
  );
}

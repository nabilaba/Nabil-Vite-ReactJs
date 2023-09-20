import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Stack align="center" textAlign="center" p="14" minH="100vh">
      <Text fontSize="3xl">Example of Dashboard Page</Text>
      <Link to="/">Go Home</Link>
    </Stack>
  );
}

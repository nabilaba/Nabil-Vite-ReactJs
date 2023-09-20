import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Stack align="center" textAlign="center" p="14" minH="100vh">
      <Text fontSize="3xl">Example Custom 404 Page in Dashboard Page</Text>
      <Link to="/">Go Home</Link>
    </Stack>
  );
}

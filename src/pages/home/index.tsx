// ui
import { Box, Stack, StackDivider } from "@chakra-ui/react";

// forms
import {
  GetUserNftsForm,
  TransferKoiiTokensForm,
  TransferNftForm,
} from "components/forms";

/**
 * Remove unused imports and variables
 */
export function Home() {
  return (
    <Box py="4" px="4" minH="90vh" color="blue.500" bg="white">
      {/* Container */}
      <Stack
        maxW="container.lg"
        mx="auto"
        py="8"
        spacing="8"
        divider={<StackDivider borderColor="gray.200" />}
      >
        {/**
         * Separating the form components, just-in-case you need to use the form somewhere else.
         */}
        <TransferKoiiTokensForm />

        <TransferNftForm />

        <GetUserNftsForm />
      </Stack>
    </Box>
  );
}

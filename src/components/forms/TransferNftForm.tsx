// ui
import {
  Input,
  Button,
  Stack,
  Heading,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
// form
import { useForm } from "react-hook-form";

interface FormFields {
  address: string;
  nft_id: string;
}

export function TransferNftForm() {
  /**
   * Added validations to forms.
   */
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({});

  const onSubmit = handleSubmit((values) => {
    console.log(`Form done submitted with ${values}`);
    /* What do you want to do here? */
  });

  return (
    <Stack
      color="black"
      align="flex-start"
      textAlign="left"
      as="form"
      onSubmit={onSubmit}
    >
      <Heading size="md">Transfer NFT</Heading>

      <FormControl
        as={Stack}
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        spacing="0"
        isInvalid={!!errors.address}
      >
        <FormLabel flexBasis="20%">Wallet Address</FormLabel>
        <Input
          placeholder="Wallet Address"
          {...register("address", { required: true })}
        />
      </FormControl>

      <FormControl
        as={Stack}
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        spacing="0"
        isInvalid={!!errors.nft_id}
      >
        <FormLabel flexBasis="20%">NFT ID</FormLabel>
        <Input
          placeholder="Amount NFT ID"
          {...register("nft_id", { required: true })}
        />
      </FormControl>

      <Button colorScheme="blue" type="submit">
        Transfer NFT
      </Button>
    </Stack>
  );
}

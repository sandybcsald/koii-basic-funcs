// ui
import { Box, Center, Container, Input, Flex, Spacer, Button } from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react'
import { DragAndDropUploader, Leaderboard } from "components/common";

export function Home() {
  return (
    <Box py="4" px="4" color="blue.500" bg="white">
      {/* Container */}
      <Box maxW="container.lg" mx="auto" pb="8">
        {/* Drag and drop uploader to Koi.rocks */}
        {/* <DragAndDropUploader /> */}
        {/* Leaderboard */}
        {/* <Leaderboard /> */}

        {/*Your Code Goes Here*/}

        <Box>
        <Container> Transfer Koii Tokens</Container>

<Flex color='black'>
    <Container>Wallet Address</Container>    
    <Input placeholder="Wallet Address"/>
    {"\n"}
</Flex>

<Flex color='black' mt="2">
        <Container>Amount of Tokens</Container>
        <Input placeholder='Amount of Tokens' />
</Flex>
        

<Flex  mt="2" mb="3">
    <Box w='70px' />
    <Spacer />
    <Button colorScheme='blue'>Transfer Tokens</Button>
    <Spacer />
    <Box w='180px'/>
  </Flex>

</Box>

<Divider mb="2"/>

<Box>
<Container> Transfer NFT</Container>

<Flex color='black'>
    <Container>Wallet Address</Container>    
    <Input placeholder="Wallet Address"/>
    {"\n"}
</Flex>

<Flex color='black' mt="2">
        <Container>NFT ID</Container>
        <Input placeholder='NFT ID' />
</Flex>
        

<Flex  mt="2" mb="3">
    <Box w='70px' />
    <Spacer />
    <Button colorScheme='blue'>Transfer NFT</Button>
    <Spacer />
    <Box w='180px'/>
  </Flex>
</Box>

<Box>
<Divider mb="2"/>

<Container> NFTs Owned by a User</Container>

<Flex color='black'>
    <Container>Wallet Address</Container>    
    <Input placeholder="Wallet Address"/>
    {"\n"}
</Flex>

<Flex  mt="2" mb="3">
    <Box w='70px' />
    <Spacer />
    <Button colorScheme='blue'>View NFTs</Button>
    <Spacer />
    <Box w='180px'/>
  </Flex>
</Box>
      </Box>
    </Box>
  );
}

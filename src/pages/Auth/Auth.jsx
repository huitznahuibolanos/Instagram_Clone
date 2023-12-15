import { Box, Center, Container,Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

function Auth() {
  return (
    <Flex minH={'100vh'} justify={"center"} alignItems={"center"} >
      <Container  minW={"container.md"} padding={0}>
        <Flex justify={'center'} alignItems={'center'}>
          {/* Left hand side */}
          <Box display={{base:"none",md:"block"}}>
            <Image src='/auth.png' h={650} alt='Phone Img'/>
          </Box>

          {/* Right hand side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={'center'}>
              Get the app.
            </Box>
            <Flex gap={5} justify={'center'}>
              <Image src='/playstore.png' h={'10'} alt='Playstore Logo'/>
              <Image src='/microsoft.png' h={'10'} alt='Microsoft Logo'/>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Auth
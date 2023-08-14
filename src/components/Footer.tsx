import { FC } from 'react';
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export const Footer: FC = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.600', 'white')}
    >
      <Container
        as={Stack}
        maxW={'container.lg'}
        py={4}
        spacing={4}
        textAlign={"center"} // ここでテキストを中央寄せに設定
      >
        <Text>&copy; 2023 A.M.R All rights reserved</Text>
      </Container>
    </Box>
  )
}
'use client'

import { ChakraProvider } from '@chakra-ui/react'

export default function ChakraProviderNext({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
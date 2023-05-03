import { VStack, Heading, Center } from "native-base";

import { Input } from "../components/input";

export function SingUp() {
  return (
    <VStack bgColor="gray.500" flex={1}>
      <Center>
        <Heading my={24}>Crie sua conta</Heading>
        <Input />
      </Center>
    </VStack>
  );
}

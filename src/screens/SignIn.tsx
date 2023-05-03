import { VStack, Heading, Center } from "native-base";

import { Input } from "../components/input";

export function SignIn() {
  return (
    <VStack bgColor="gray.400" flex={1}>
      <Center>
        <Heading my={24}>Entrar</Heading>
        <Input />
      </Center>
    </VStack>
  );
}

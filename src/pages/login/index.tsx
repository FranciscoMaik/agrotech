import React from 'react';

import {
  Flex,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

import { MdVisibilityOff, MdVisibility } from 'react-icons/md';

const Login: React.FC = function () {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Flex
        borderRadius={4}
        border="1px solid"
        borderColor="green.700"
        padding={4}
        flexDirection="column"
        alignItems="center"
        gap={3}
      >
        <Heading>AgroTech</Heading>

        <InputGroup size="md" flexDirection="column" gap={2}>
          <Input variant="outline" placeholder="E-mail" />
        </InputGroup>

        <InputGroup size="md" flexDirection="column" gap={2}>
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Senha"
          />
          <InputRightElement width="3rem">
            {show ? (
              <MdVisibility onClick={handleClick} />
            ) : (
              <MdVisibilityOff onClick={handleClick} />
            )}
          </InputRightElement>
        </InputGroup>

        <Flex direction="row" w="100%" justifyContent="flex-end">
          <Button colorScheme="teal" variant="outline">
            Login
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;

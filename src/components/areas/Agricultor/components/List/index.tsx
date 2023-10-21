import React from 'react';

import { MdOutlineEdit, MdDeleteOutline } from 'react-icons/md';

import { Box, Text, Heading, Divider, Flex, Center } from '@chakra-ui/react';

import { IFarmer } from '../../types/IFarmer';

export const List: React.FC<IFarmer> = function ({
  name,
  surname,
  creditLine,
  maritalStatus,
  address,
  course,
  cpf,
  phone,
  sex,
}) {
  return (
    <Box
      padding={4}
      borderRadius={4}
      border="1px solid"
      borderColor="#c9c9c9"
      bgColor="#fbfbfb"
      boxShadow="0px 1px 4px 0px rgba(201, 201, 201, 0.25)"
    >
      <Flex justifyContent="space-between">
        <Heading size="md">{name}</Heading>
        <Flex gap={2}>
          <Center
            _hover={{
              backgroundColor: 'green.500',
              transition: '500ms',
            }}
            cursor="pointer"
            height={6}
            width={6}
            borderRadius={4}
          >
            <MdOutlineEdit />
          </Center>

          <Center
            _hover={{
              backgroundColor: 'green.500',
              transition: '500ms',
            }}
            cursor="pointer"
            height={6}
            width={6}
            borderRadius={4}
          >
            <MdDeleteOutline style={{ cursor: 'pointer' }} />
          </Center>
        </Flex>
      </Flex>
      <Divider marginBlock={2} color="green.700" />
      <Flex gap={4}>
        <Flex flexDir="column" gap={2}>
          <Flex gap={1}>
            <Text>Apelido: </Text>
            <Text>{surname}</Text>
          </Flex>
          <Flex gap={1}>
            <Text>Linha de crédito: </Text>
            <Text>{creditLine}</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" gap={2}>
          <Flex gap={1}>
            <Text>Estado civil: </Text>
            <Text>{maritalStatus}</Text>
          </Flex>
          <Flex gap={1}>
            <Text>Curso: </Text>
            <Text>{course}</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" gap={2}>
          <Flex gap={1}>
            <Text>Sexo: </Text>
            <Text>{sex}</Text>
          </Flex>
          <Flex gap={1}>
            <Text>CPF: </Text>
            <Text>{cpf}</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" gap={2}>
          <Flex gap={1}>
            <Text>Telefone: </Text>
            <Text>{phone}</Text>
          </Flex>
          <Flex gap={1}>
            <Text>Endereço: </Text>
            <Text>{address}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';

import { MdAdd, MdOutlineSearch } from 'react-icons/md';

import { List, RegisterFarmer } from './components';
import { farmers } from './utils/farmers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 74vh;
  margin-top: 24px;
  overflow-y: auto;
  gap: 18px;

  ::-webkit-scrollbar {
    width: 12px;
  }
`;

export const Agricultor: React.FC = function () {
  const [isOpen, setIsOpen] = useState(false);

  const handleClosedModalRegister = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <Flex flexDir="column" w="100%">
        <Flex mt="2" justifyContent="flex-end" mr={4}>
          <InputGroup maxW="300px">
            <InputLeftElement pointerEvents="none">
              <MdOutlineSearch color="gray.700" />
            </InputLeftElement>
            <Input type="text" placeholder="Pesquisar" variant="outline" />
          </InputGroup>
        </Flex>

        <Container>
          {farmers.map(farmer => (
            <List
              name={farmer.name}
              address={farmer.address}
              course={farmer.course}
              key={farmer.name}
              phone={farmer.phone}
              cpf={farmer.cpf}
              maritalStatus={farmer.maritalStatus}
              sex={farmer.sex}
              creditLine={farmer.creditLine}
              surname={farmer.surname}
            />
          ))}
        </Container>
        <Flex w="100%" justifyContent="flex-end" mt={6} mr={4}>
          <Button
            leftIcon={<MdAdd />}
            colorScheme="teal"
            variant="solid"
            onClick={handleClosedModalRegister}
          >
            Adicionar
          </Button>
        </Flex>
      </Flex>
      <RegisterFarmer isOpen={isOpen} onClose={handleClosedModalRegister} />
    </>
  );
};

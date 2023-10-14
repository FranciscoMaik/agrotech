import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface RegisterFarmerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterFarmer: React.FC<RegisterFarmerProps> = function ({
  isOpen,
  onClose,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            rerum assumenda porro minima quia accusantium, at numquam ipsam,
            blanditiis, veritatis velit sunt id officiis necessitatibus ratione
            nisi in dolore quaerat! Debitis possimus enim fugiat eaque dolores
            tempora accusamus minima cum culpa tempore, nesciunt cupiditate
            officiis consequuntur, nam beatae eligendi doloribus. Velit nesciunt
            ipsa autem nostrum quidem itaque nemo voluptate veniam! Aliquid
            facilis quasi veritatis iure ab magni obcaecati esse omnis ut
            blanditiis quaerat, nemo maxime voluptates. Ratione commodi expedita
            molestias et quibusdam corrupti, consequatur sunt dicta quos
            excepturi explicabo voluptate. Repellat possimus reprehenderit,
            obcaecati laborum fuga velit consectetur. In id rerum quod
            distinctio libero earum cum sed alias voluptate totam ab iure quis
            inventore reprehenderit explicabo ea accusantium, doloribus ad!
          </p>
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Fechar
          </Button>
          <Button colorScheme="blue">Salvar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

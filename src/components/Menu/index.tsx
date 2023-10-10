import React from 'react';

import { Center, Flex } from '@chakra-ui/react';

import {
  MdAgriculture,
  MdDashboard,
  MdEditCalendar,
  MdFamilyRestroom,
  MdGrass,
  MdHelp,
  MdLogout,
  MdMap,
  MdPerson,
  MdPieChart,
} from 'react-icons/md';

import { IItemsSelected } from '../../types';

const sizeIcons = 24;
const timerTransaction = '600ms';
const sizeButtonMenu = 12;
const borderRadius = 4;

interface MenuProps {
  handleSelectedItem: (item: IItemsSelected) => void;
  itemSelected: IItemsSelected;
}

export const Menu: React.FC<MenuProps> = function ({
  handleSelectedItem,
  itemSelected,
}) {
  return (
    <Flex
      direction="column"
      gap="1"
      justifyContent="space-between"
      height="100%"
      paddingBlock="4"
    >
      <Flex direction="column" gap="3">
        <Center
          _hover={{
            backgroundColor: 'green.500',
            transition: timerTransaction,
          }}
          cursor="pointer"
          height={sizeButtonMenu}
          width={sizeButtonMenu}
          borderRadius={borderRadius}
          onClick={() => handleSelectedItem('dashboard')}
          backgroundColor={
            itemSelected === 'dashboard' ? 'green.500' : 'transparent'
          }
        >
          <MdDashboard size={sizeIcons} />
        </Center>
        <Center
          _hover={{
            backgroundColor: 'green.500',
            transition: timerTransaction,
          }}
          cursor="pointer"
          height={sizeButtonMenu}
          width={sizeButtonMenu}
          borderRadius={borderRadius}
          onClick={() => handleSelectedItem('farmer')}
          backgroundColor={
            itemSelected === 'farmer' ? 'green.500' : 'transparent'
          }
        >
          <MdPerson size={sizeIcons} />
        </Center>
        <Center
          _hover={{
            backgroundColor: 'green.500',
            transition: timerTransaction,
          }}
          cursor="pointer"
          height={sizeButtonMenu}
          width={sizeButtonMenu}
          borderRadius={borderRadius}
          onClick={() => handleSelectedItem('family')}
          backgroundColor={
            itemSelected === 'family' ? 'green.500' : 'transparent'
          }
        >
          <MdFamilyRestroom size={sizeIcons} />
        </Center>
        <Center
          _hover={{
            backgroundColor: 'green.500',
            transition: timerTransaction,
          }}
          cursor="pointer"
          height={sizeButtonMenu}
          width={sizeButtonMenu}
          borderRadius={borderRadius}
          onClick={() => handleSelectedItem('locale')}
          backgroundColor={
            itemSelected === 'locale' ? 'green.500' : 'transparent'
          }
        >
          <MdMap size={sizeIcons} />
        </Center>
        <Center
          _hover={{
            backgroundColor: 'green.500',
            transition: timerTransaction,
          }}
          cursor="pointer"
          height={sizeButtonMenu}
          width={sizeButtonMenu}
          borderRadius={borderRadius}
          onClick={() => handleSelectedItem('agriculturalActivity')}
          backgroundColor={
            itemSelected === 'agriculturalActivity'
              ? 'green.500'
              : 'transparent'
          }
        >
          <MdAgriculture size={sizeIcons} />
        </Center>
        <Center
          _hover={{
            backgroundColor: 'green.500',
            transition: timerTransaction,
          }}
          cursor="pointer"
          height={sizeButtonMenu}
          width={sizeButtonMenu}
          borderRadius={borderRadius}
          onClick={() => handleSelectedItem('livestockActivity')}
          backgroundColor={
            itemSelected === 'livestockActivity' ? 'green.500' : 'transparent'
          }
        >
          <MdGrass size={sizeIcons} />
        </Center>
        <Center
          _hover={{
            backgroundColor: 'green.500',
            transition: timerTransaction,
          }}
          cursor="pointer"
          height={sizeButtonMenu}
          width={sizeButtonMenu}
          borderRadius={borderRadius}
          onClick={() => handleSelectedItem('orderOfService')}
          backgroundColor={
            itemSelected === 'orderOfService' ? 'green.500' : 'transparent'
          }
        >
          <MdEditCalendar size={sizeIcons} />
        </Center>
        <Center
          _hover={{
            backgroundColor: 'green.500',
            transition: timerTransaction,
          }}
          cursor="pointer"
          height={sizeButtonMenu}
          width={sizeButtonMenu}
          borderRadius={borderRadius}
          onClick={() => handleSelectedItem('reports')}
          backgroundColor={
            itemSelected === 'reports' ? 'green.500' : 'transparent'
          }
        >
          <MdPieChart size={sizeIcons} />
        </Center>
      </Flex>

      <Flex direction="column" gap="3">
        <Center
          _hover={{
            backgroundColor: 'green.500',
            transition: timerTransaction,
          }}
          cursor="pointer"
          height={sizeButtonMenu}
          width={sizeButtonMenu}
          borderRadius={borderRadius}
        >
          <MdHelp size={sizeIcons} />
        </Center>
        <Center
          _hover={{
            backgroundColor: 'green.500',
            transition: timerTransaction,
          }}
          cursor="pointer"
          height={sizeButtonMenu}
          width={sizeButtonMenu}
          borderRadius={borderRadius}
        >
          <MdLogout size={sizeIcons} />
        </Center>
      </Flex>
    </Flex>
  );
};

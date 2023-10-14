import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

import { changeTitle } from '../../utils';
import { IItemsSelected } from '../../types';

interface ContentProps {
  title: IItemsSelected;
}

export const Content: React.FC<ContentProps> = function ({ title, children }) {
  return (
    <Flex padding={4} alignItems="center" direction="column" bgColor="#F7F7F7">
      <Heading>{changeTitle(title)}</Heading>
      {children}
    </Flex>
  );
};

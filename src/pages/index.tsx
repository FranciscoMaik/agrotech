import React, { useState } from 'react';

import { Grid, GridItem, Heading } from '@chakra-ui/react';

import { Menu, Content } from '../components';
import { IItemsSelected } from '../types';

const Home: React.FC = function () {
  const ContainerItemSelected: Record<IItemsSelected, JSX.Element> = {
    dashboard: <Heading>ajkshdjkahs</Heading>,
    agriculturalActivity: <Heading>ajkshdjkahs</Heading>,
    family: <Heading>ajkshdjkahs</Heading>,
    farmer: <Heading>ajkshdjkahs</Heading>,
    livestockActivity: <Heading>ajkshdjkahs</Heading>,
    locale: <Heading>ajkshdjkahs</Heading>,
    orderOfService: <Heading>ajkshdjkahs</Heading>,
    reports: <Heading>ajkshdjkahs</Heading>,
  };

  const [itemSelected, setItemSelected] = useState<IItemsSelected>('dashboard');

  const handleSelectedItem = (item: IItemsSelected) => {
    setItemSelected(item);
  };

  return (
    <Grid
      templateAreas={`"nav main"
                  "nav main"
                  "nav main"`}
      gridTemplateRows="50px 1fr 30px"
      gridTemplateColumns="60px 1fr"
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        pl="2"
        area="nav"
        borderRight="1px solid"
        borderRightColor="green.700"
      >
        <Menu
          handleSelectedItem={handleSelectedItem}
          itemSelected={itemSelected}
        />
      </GridItem>
      <GridItem pl="2" area="main">
        <Content title={itemSelected}>
          {ContainerItemSelected[itemSelected]}
        </Content>
      </GridItem>
    </Grid>
  );
};

export default Home;

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    green: {
      50: '#e0fdef',
      100: '#bcf1d5',
      200: '#95e8bc',
      300: '#6cdda2',
      400: '#45d388',
      500: '#2cba6f',
      600: '#1f9155',
      700: '#12673d',
      800: '#053f23',
      900: '#001706',
    },
    yellow: {
      50: '#fff9da',
      100: '#ffedad',
      200: '#ffe17d',
      300: '#ffd44b',
      400: '#ffc81a',
      500: '#e6af00',
      600: '#b38800',
      700: '#806100',
      800: '#4e3a00',
      900: '#1d1300',
    },
  },
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;

import React from 'react';
import { MantineProvider, createEmotionCache, MantineThemeOverride } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useAppSelector } from './store/useStore';
import { getLanguage } from './store/languageSlice';

type props = {
  children: React.ReactNode;
};
export function Theme({ children }: props) {
  const myCache = createEmotionCache({ key: 'mantine' });
  const language = useAppSelector(getLanguage);

  const myTheme: MantineThemeOverride = {
    colorScheme: 'light',
    colors: {
      dark: [
        '#ffffff',
        '#F2F2F2',
        '#D9D9D9',
        '#A2A3A3',
        '#7D7E7F',
        '#606263',
        '#4A4C4E',
        '#292D32',
        '#333333',
        '#000000',
      ],
      yellow: [
        '#F4F3F2',
        '#CFCABC',
        '#CAB886',
        '#B39952',
        '#7E704B',
        '#5A5341',
        '#423E35',
        '#312F2B',
        '#252422',
        '#1C1C1A',
      ],
    },

    primaryColor: 'yellow',
    primaryShade: 3,
    radius: {
      xs: 8,
      sm: 12,
      md: 16,
    },
    defaultRadius: 'xs',

    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 22,
    },
    loader: 'bars',

    fontFamily: language === 'en' ? 'Raleway' : 'Tajawal',
    headings: {
      fontFamily: language === 'en' ? 'Raleway' : 'Tajawal',
      sizes: {
        h1: { fontWeight: 600, fontSize: '2.375rem', lineHeight: '48px' },
        h2: { fontWeight: 600, fontSize: '1.75rem', lineHeight: '48px' },
        h3: { fontWeight: 600, fontSize: '1.5rem', lineHeight: '32px' },
        h4: { fontWeight: 600, fontSize: '1.25rem', lineHeight: 1.4 },
        h5: { fontWeight: 600, fontSize: '1rem', lineHeight: 1.4 },
        h6: { fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.4 },
      },
    },

    black: '#000',
    white: '#fff',
  };

  return (
    <MantineProvider emotionCache={myCache} withNormalizeCSS withGlobalStyles theme={myTheme}>
      <NotificationsProvider>{children}</NotificationsProvider>
    </MantineProvider>
  );
}

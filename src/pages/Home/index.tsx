import {
  BackgroundImage,
  Title,
  Container,
  Grid,
  Image,
  Box,
  Group,
  UnstyledButton,
  Stack,
} from '@mantine/core';

import backgroundImage from '../../assets/background.webp';
import mobileAds from '../../assets/mobile-ads.webp';
import appStorePng from '../../assets/app-store.png';
import googlePlayPng from '../../assets/google-play.png';

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';

import { links } from '../../components/Navbar/links';
import Navbar from '../../components/Navbar/Navbar';

type Props = {};

const index = (props: Props) => {
  const { t } = useTranslation();
  const md = useMediaQuery('(max-width: 992px)');

  return (
    <div>
      <Navbar links={links} />

      <Box sx={{ height: '100%' }} id='#home'>
        <BackgroundImage
          src={backgroundImage}
          sx={{
            minHeight: md ? '170vh' : '90vh',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Container size='xl' sx={{ height: '100%' }}>
            <Grid
              align='end'
              justify='space-between'
              sx={{ height: '100%', paddingTop: md ? 144 : 0 }}
            >
              <Grid.Col xs={12} md={7.5} pb={md ? 48 : 0}>
                <Stack spacing={0} align={md ? 'center' : 'start'}>
                  <Title color='dark.1' align={md ? 'center' : 'start'} order={md ? 3 : 1}>
                    {t(
                      'More than 50 services in your pocket! With a warranty of up to 30 days on maintenance services and a rating of 4.5/5'
                    )}
                  </Title>
                  <Box mt={64}>
                    <Title order={md ? 4 : 3} mb={16} weight={400} color='dark.1'>
                      {t('Download the application now')}
                    </Title>
                    <Group position={md ? 'left' : 'center'}>
                      <UnstyledButton>
                        <Image
                          src={googlePlayPng}
                          alt='Mobile App'
                          width={md ? 120 : 174}
                          height={57}
                          fit='contain'
                        />
                      </UnstyledButton>
                      <UnstyledButton>
                        <Image
                          src={appStorePng}
                          alt='Mobile App'
                          width={md ? 120 : 174}
                          height={57}
                          fit='contain'
                        />
                      </UnstyledButton>
                    </Group>
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col xs={12} md={4.5}>
                <Stack spacing={0} align={md ? 'center' : 'start'}>
                  <Box sx={{ position: 'relative', bottom: md ? 0 : -124 }}>
                    <Image src={mobileAds} alt='Mobile App' />
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
          </Container>
        </BackgroundImage>
      </Box>
    </div>
  );
};

export default index;

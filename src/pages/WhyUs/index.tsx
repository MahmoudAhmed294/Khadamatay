import {
  Group,
  Title,
  Divider,
  Box,
  Container,
  Text,
  Stack,
  Grid,
  Image,
  Button,
} from '@mantine/core';
import { CostIcon, ServiceIcon, TimeIcon } from '../../components/icons';
import { useTranslation } from 'react-i18next';
import whyUsImage from '../../assets/why-us.png';
import { IconArrowNarrowDown } from '@tabler/icons';
import SectionTitle from '../../components/SectionTitle';
import { useMediaQuery } from '@mantine/hooks';

const index = () => {
  const { t } = useTranslation();
  const md = useMediaQuery('(max-width: 992px)');

  return (
    <Box mb={128} id='why-us'>
      <Container size='xl'>
        <SectionTitle
          coloredTitle='Why'
          normalTitle='Us'
          text='Dedicated to all your daily needs, we’re a one-stop place.'
        />
        <Grid mt={48} gutter='xl'>
          {whyUsService.map((value, _index) => (
            <Grid.Col md={4}>
              <Stack align='center' spacing={16}>
                {value.icon}
                <div>
                  <Title order={4} align='center'>
                    {t(value.title)}
                  </Title>
                  <Text align='center'>{t(value.text)}</Text>
                </div>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: 'rgb(217,217,217,0.2)' }} py={56} mt={104}>
        <Container size='xl'>
          <Grid gutter='xl' align='center'>
            <Grid.Col xs={12} md={6} sx={{ position: 'relative' }}>
              <Box sx={{ position: md?'relative' :"absolute", top: md ? 0 : -100 }}>
                <Image src={whyUsImage} alt='why-us image' />
              </Box>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <Group>
                <Divider size='xl' sx={{ height: 40 }} orientation='vertical' color='yellow' />
                <Title weight={400} order={2} sx={{ width: '96%' }}>
                  <Title weight={400} sx={{ display: 'inline-block' }} color='yellow' order={2}>
                    {t('We deliver')}
                  </Title>{' '}
                  {t(
                    'excellence in providing a smart marketplace for services with the utmost focus on sustainable'
                  )}{' '}
                </Title>
              </Group>
              <Button
                size='lg'
                component='a'
                href='#our-services'
                radius={0}
                mt={72}
                rightIcon={<IconArrowNarrowDown size={24} />}
              >
                {t('See our services')}
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default index;

const whyUsService = [
  {
    icon: <ServiceIcon size={128} color='transparent' />,
    title: 'Quality of Service',
    text: 'They’ve got to earn them. Check out what MG customers said about their quality of work.',
  },
  {
    icon: <TimeIcon size={128} color='transparent' />,
    title: 'Convenient Time',
    text: 'Sit back and relax, because our MG will call you to talk about the time that right for your schedule.',
  },
  {
    icon: <CostIcon size={128} color='transparent' />,
    title: 'Affordable Cost',
    text: 'With our incredible system, you will have a clear visibility for the cost of your request.',
  },
];

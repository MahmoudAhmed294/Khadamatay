import { Box, Container, Grid, Group, Image, Stack, Title, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle';
import serviceRequestPng from '../../assets/service-request.png';
import { ChooseDateTimeIcon, ChooseServiceIcon, RelaxIcon } from '../../components/icons';
const index = () => {
  const { t } = useTranslation();

  return (
    <Box  my={128} id='service-request'>
      <Container size='xl'>
        <Grid align='center' justify='center'>
          <Grid.Col sm={6}>
            <Image src={serviceRequestPng} alt='png' />
          </Grid.Col>
          <Grid.Col sm={6}>
            <SectionTitle coloredTitle='Service' normalTitle='request mechanism' />
            <Stack mt={48} spacing={90}>
              {ServiceRequestSteps.map((value, index) => (
                <Group>
                  {value.icon}
                  <Box>
                    <Title order={4}>{t(value.title)}</Title>
                    <Text>{t(value.text)}</Text>
                  </Box>
                </Group>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default index;

const ServiceRequestSteps = [
  {
    icon: <ChooseServiceIcon color='transparent' size={112} />,
    title: 'Choose the service',
    text: 'suitable for you from the list of services',
  },
  {
    icon: <ChooseDateTimeIcon color='transparent' size={112} />,
    title: 'Choose date and time',
    text: 'And the right service provider for you',
  },
  {
    icon: <RelaxIcon color='transparent' size={112} />,
    title: 'Relax and put your mind at ease',
    text: 'And we take care of the rest',
  },
];

import { Box, Container, Grid } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle';
import News from './components/News';

import new1Png from '../../assets/news1.png';
import new2Png from '../../assets/news2.png';
import new3Png from '../../assets/news3.png';

const index = () => {
  const { t } = useTranslation();

  return (
    <Box my={128}  id='news'>
      <Container size='xl'>
        <SectionTitle
          coloredTitle='Latest'
          normalTitle='News'
          text='Know more about our latest Events & Festivals to enjoy your vacations to the fullest in your own holiday home in KHADAMATY'
        />
        <Grid mt={40}>
          {newsList.map((value, index) => (
            <Grid.Col sm={6} md={4} key={index}>
              <News img={value.img} title={value.title} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default index;

const newsList = [
  {
    img: new1Png,
    title: 'Delivering the First birthdays at our compounds',
  },
  {
    img: new2Png,
    title: 'Delivering the First birthdays at our compounds',
  },
  {
    img: new3Png,
    title: 'Hamaki and Massar Egbari beach concert',
  },
];

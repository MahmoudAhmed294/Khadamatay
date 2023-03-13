import { Box, Title, Group, BackgroundImage, Stack, Text, ActionIcon } from '@mantine/core';
import { useStyles } from './style';
import { useTranslation } from 'react-i18next';
import { IconArrowNarrowRight } from '@tabler/icons';

type Props = {
  img: string;
  link?:string;
  title:string
};

const News = ({ img , title}: Props) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Box sx={{ position: 'relative' }}>
      <Box className={classes.date_section}>
        <Group position='center' className={classes.pins_section}>
          <Group position='apart' align='baseline' sx={{ width: '80%' }}>
            <Box className={classes.pin} />
            <Box className={classes.pin} />
          </Group>
        </Group>
        <Title order={4} align='center' color='dark.0'>
          {new Date().toDateString()}
        </Title>
      </Box>
      <BackgroundImage src={img} sx={{ height: 296, padding: 24 }}>
        <Stack justify='flex-end' sx={{ height: '100%', mb: 16 }}>
          <Title color='dark.0' order={4}>
            {t(title)}
          </Title>
          <Group position='apart' align='center'>
            <Text color='dark.0'>{t('See More')}</Text>
            <ActionIcon>
              <IconArrowNarrowRight size={24} />
            </ActionIcon>
          </Group>
        </Stack>
      </BackgroundImage>
    </Box>
  );
};

export default News;

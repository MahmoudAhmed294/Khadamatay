import { Group, Stack, Title, Text, Divider } from '@mantine/core';
import { useTranslation } from 'react-i18next';

type Props = {
  coloredTitle: string;
  normalTitle: string;
  text?: string;
};

const SectionTitle = ({ text, normalTitle, coloredTitle }: Props) => {
  const { t } = useTranslation();

  return (
    <Stack spacing={12}>
      <Group>
        <Divider size='xl' orientation='vertical' color='yellow' />
        <Group spacing={8}>
          <Title order={2} color='yellow'>
            {t(coloredTitle)}
          </Title>
          <Title order={2}>{t(normalTitle)}</Title>
        </Group>
      </Group>
      {text && <Text size='md'>{t(text)}</Text>}
    </Stack>
  );
};

export default SectionTitle;

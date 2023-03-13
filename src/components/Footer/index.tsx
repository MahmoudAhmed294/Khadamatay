import {
  Box,
  Container,
  Image,
  Group,
  ScrollArea,
  Stack,
  Divider,
  Text,
  ActionIcon,
} from '@mantine/core';

import company1 from '../../assets/company1.png';
import company2 from '../../assets/company2.png';
import company3 from '../../assets/company3.png';
import company4 from '../../assets/company4.png';
import company5 from '../../assets/company5.png';
import logo from '../../assets/Logo.svg';
import Khadamatay from '../../assets/Khadamatay.svg';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons';
import { useTranslation } from 'react-i18next';

type Props = {};

const index = (props: Props) => {
  const companySectionWidth = 180 * 5;
  const { t } = useTranslation();

  return (
    <Box mt={128}>
      <Box sx={{ backgroundColor: 'rgb(217,217,217,0.2)' }} py={56}>
        <Container size='xl' sx={{ overflowX: 'hidden' }}>
          <ScrollArea style={{ width: '100vw' }} scrollbarSize={8}>
            <Box sx={{ width: companySectionWidth * 1.5 }}>
              <Group align='center' spacing={100}>
                {companyList.map((value, index) => (
                  <Box>
                    <Image
                      src={value}
                      alt='company'
                      key={index}
                      width={180}
                      height={83}
                      fit='contain'
                    />
                  </Box>
                ))}
              </Group>
            </Box>
          </ScrollArea>
        </Container>
      </Box>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[8],
          padding: 40,
        })}
      >
        <Container size='xl'>
          <Stack align='center'>
            <Box sx={{ maxWidth: 255, maxHeight: 74 }}>
              <Image src={logo} alt='Logo' width={'100%'} height={'100%'} fit='contain' />
            </Box>
            <Box sx={{ maxWidth: 255, maxHeight: 74 }}>
              <Image src={Khadamatay} alt='Logo' width={'100%'} height={'100%'} fit='contain' />
            </Box>
            <Group mt={8}>
              <ActionIcon radius='xl' variant='outline'>
                <IconBrandFacebook size={18} />
              </ActionIcon>
              <ActionIcon radius='xl' variant='outline'>
                <IconBrandInstagram size={18} />
              </ActionIcon>
              <ActionIcon radius='xl' variant='outline'>
                <IconBrandTwitter size={18} />
              </ActionIcon>
            </Group>
          </Stack>
          <Divider my={16} />
          <Group position='apart' align='center'>
            <Text size='sm' color='dark.1'>
              {t('© MG Developments. 2021. All rights reserved')}
            </Text>
            <Text size='sm' color='dark.1'>
              {t('Created with love by')} <b>ITD</b>
            </Text>
          </Group>
        </Container>
      </Box>
    </Box>
  );
};

export default index;

const companyList = [company1, company2, company3, company4, company5];

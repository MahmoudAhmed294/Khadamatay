import { Box, Text, Container, Stack, UnstyledButton, Grid } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle';
import {
  IconBuildingEstate,
  IconBuildingStore,
  IconDashboard,
  IconHomeQuestion,
  IconId,
  IconMessageReport,
  IconNews,
  IconSettings,
  IconTicket,
  IconWallet,
} from '@tabler/icons';

const index = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Box id='our-services'>
        <Container size='xl'>
          <SectionTitle
            coloredTitle='Our'
            normalTitle='Services'
            text='We are introducing a whole network of integrated services through'
          />
          <Grid mt={32}>
            {ourServiceList.map((value, index) => (
              <Grid.Col xs={6} sm={3} key={index}>
                <UnstyledButton
                  p={24}
                  sx={(theme) => ({
                    width: '100%',
                    border: '1px solid #333',
                    borderRadius: 4,
                    display: 'block',
                    svg: { color: '#333' },
                  })}
                  component='a'
                  href={value.link}
                  target='_blank'
                >
                  <Stack align='center' justify='center'>
                    {value.icon}
                    <Text weight='bold' color='#333'>
                      {t(value.name)}
                    </Text>
                  </Stack>
                </UnstyledButton>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default index;

const ourServiceList = [
  {
    icon: <IconWallet stroke={1} size={70} />,
    name: 'Service Payment',
    link: 'https://compound-user.vercel.app/bill-service',
  },
  {
    icon: <IconSettings stroke={1} size={70} />,
    name: 'Request Service',
    link: 'https://compound-user.vercel.app/home-service',
  },
  {
    icon: <IconBuildingStore stroke={1} size={70} />,
    name: 'Grocery Shop',
    link: 'https://compound-user.vercel.app/shop',
  },
  {
    icon: <IconMessageReport stroke={1} size={70} />,
    name: 'Complaint',
    link: 'https://compound-user.vercel.app/complaint',
  },
  {
    icon: <IconBuildingEstate stroke={1} size={70} />,
    name: 'Property Management',
    link: 'https://compound-user.vercel.app/property-management',
  },
  {
    icon: <IconId stroke={1} size={70} />,
    name: 'Visitors',
    link: 'https://compound-user.vercel.app/visitor',
  },
  {
    icon: <IconNews stroke={1} size={70} />,
    name: 'News',
    link: 'https://compound-user.vercel.app/news',
  },
  {
    icon: <IconTicket stroke={1} size={70} />,
    name: 'Permission',
    link: 'https://compound-user.vercel.app/permission/',
  },
  {
    icon: <IconHomeQuestion stroke={1} size={70} />,
    name: 'Help Desk',
    link: 'https://compound-help-desk.vercel.app/',
  },
  {
    icon: <IconDashboard stroke={1} size={70} />,
    name: 'Dashboard',
    link: 'https://compound-dashboard-itdeg.vercel.app/',
  },
];

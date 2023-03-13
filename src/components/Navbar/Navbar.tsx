import { useState } from 'react';
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Image,
  Transition,
  Button,
  Box,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useStyles } from './style';
import logo from '../../assets/Logo.svg';
import Khadamatay from '../../assets/Khadamatay.svg';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../store/useStore';
import { toggleLanguage } from '../../store/languageSlice';

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export default function Navbar({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const md = useMediaQuery('(max-width: 992px)');

  const changeLanguage = () => {
    if (language === 'en') {
      setLanguage('ar');
      dispatch(toggleLanguage('ar'));
    } else if (language === 'ar') {
      setLanguage('en');
      dispatch(toggleLanguage('en'));
    }
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        setActive(link.link);
        close();
      }}
    >
      {t(link.label)}
    </a>
  ));

  return (
    <Header height={144} className={classes.root}>
      <Container size='xl' className={classes.header}>
        <Group>
          <Box sx={{ maxWidth: 255, maxHeight: 74 }}>
            <Image src={logo} alt='Logo' width={'100%'} height={'100%'} fit='contain' />
          </Box>
          <Box sx={{ maxWidth: 255, maxHeight: 74 }}>
            <Image src={Khadamatay} alt='Logo' width={'100%'} height={'100%'} fit='contain' />
          </Box>
        </Group>
        <Group spacing={44} className={classes.links}>
          {items}
          <Button
            variant='subtle'
            color='dark.0'
            size='md'
            className={classes.link}
            sx={{ fontWeight: 400 }}
            onClick={changeLanguage}
            uppercase
          >
            {t('Ar')}
          </Button>
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} color='#fff' size='sm' />

        <Transition transition='pop-top-right' duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

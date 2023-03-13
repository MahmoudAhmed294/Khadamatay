import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    zIndex: 1,
    borderBottom: 0,
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 31.83%, rgba(0, 0, 0, 0) 100%)',
    backdropFilter: 'blur(2.5px)',
    position: 'absolute',
    
  },

  dropdown: {
    position: 'absolute',
    top: 144,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    color: theme.colors.dark[1],

    '&:hover': {
      color: theme.colors.yellow[3],
    },

    [theme.fn.smallerThan('md')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      color: theme.colors.dark[8],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: 'transparent',
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      borderBottom: '1px solid ',
    },
  },
}));

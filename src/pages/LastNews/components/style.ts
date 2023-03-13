import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  date_section: {
    backgroundColor: theme.colors.yellow[3],
    padding: 26,
    position: 'relative'
  },
  pins_section: {
    position: 'absolute',
    top:-16,
    left:0,
    right:0
  },
  pin: {
    background: '#CAB886',
    padding:5,
    width:8,
    height:32,
    border:"4px solid #fff",
    borderRadius:8
  },
}));

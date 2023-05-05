import {
  createStyles,
  Header,
  Group,
  Button,
  Box,
  rem,
  ActionIcon ,
  Avatar,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from './logo.png'
import { InputTooltip } from './InputTooltip';
import { modals } from '@mantine/modals';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.md,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },
}));

export function HeaderMegaMenu() {

  const { classes, theme } = useStyles();

  const openModal = () => modals.open({
    title: "Login",
    centered: true,
    children: (<InputTooltip />)
  })

  return (
    <Box>
      <Header height={60} px={'xs'}>
        <Group position="apart" spacing="sm" sx={{ height: '100%' }} >
          <img src={logo} alt="Logo" />

          <Group sx={{ height: '100%' }} spacing={0}>
            <NavLink to={"/"} href="#" className={classes.link} >
              Find job
            </NavLink>
            <NavLink to={"/recruitment"} href="#" className={classes.link} >
              Recruitment
            </NavLink>
            <NavLink to={"/profile"} href="#" className={classes.link} >
              Profile
            </NavLink>
          </Group>
          <Button onClick={openModal} >Login</Button>
          {/* <ActionIcon>
          <Avatar
                radius="xl"
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              />
          </ActionIcon> */}

        </Group>
      </Header>
    </Box>
  );
}
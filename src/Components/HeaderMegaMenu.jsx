import {
  createStyles,
  Header,
  Group,
  Button,
  Box,
  rem,
  ActionIcon,
  Avatar,
  Menu,
  Text,
  useMantineTheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from './logo.png'
import InputTooltip from './InputTooltip';
import { modals } from '@mantine/modals';
import { NavLink, Navigate } from 'react-router-dom';
import useAxios from './lib/useAxios'
import { useEffect, useState } from 'react';
import {
  IconPackage,
  IconChevronDown,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

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

  const user = JSON.parse(localStorage.getItem("user"))
  const username = user?.Email;
  const [data, setData] = useState([]);

  const [Anchor, setAnchor] = useState(null);

  const Navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await useAxios.get(`/users/${Email}`);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  const openModal = () => modals.open({
    title: "Login",
    centered: true,
    children: (<InputTooltip />)
  })

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  }

  const handlelogout = async () => {
    localStorage.removeItem("user");
    alert("ออกจากระบบ");
    Navigate(0);
  }

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

          {user ? (
            [<Menu
              transitionProps={{ transition: 'pop-top-right' }}
              position="top-end"
              withinPortal
            >
              <Menu.Target>
                <Avatar src="https://th.bing.com/th/id/R.739297c3ec0f727c32c8135aca85df15?rik=wVGVVO1tnf7f%2bg&pid=ImgRaw&r=0" onClick={handleClick}></Avatar>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item >
                  <Button variant='subtle' onClick={handlelogout} >
                    Log out
                  </Button>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            ]
          ) : (
            <Button onClick={openModal}>Login</Button>
          )
          }

        </Group>
      </Header>
    </Box>
  );
}
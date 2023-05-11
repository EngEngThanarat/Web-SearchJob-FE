import { HeaderMegaMenu } from './Components/HeaderMegaMenu';
import { FooterSocial } from './Components/FooterSocial';
import { Grid, Input, } from '@mantine/core';
import useAxios from './Components/lib/useAxios'
import { useState, useEffect } from 'react';
import "./Components/Search.css";
import { createStyles, Container, Title, Text, Button, rem, TextInput } from '@mantine/core';
import { Card, Image, Badge, Group } from '@mantine/core';
import jobOffer from './Components/jobOffer.png'
import React from "react";
import { isAxiosError } from 'axios';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl})`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 1000,
    lineHeight: 1.05,
    maxWidth: rem(800),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(400),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export default function App() {

  const { classes } = useStyles();

  const [company, setCompany] = useState([]);
  const [filterCompany, setFiltercompany] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCompany();
    console.log("Company", company);
  }, [])

  const fetchCompany = async () => {
    try {
      const res = await useAxios.get('/company');
      setFiltercompany(res.data)
      setCompany(res.data);
      console.log("Res", res.data)
    } catch (e) {
      console.log(e);
      setCompany([]);
    }
  }

  const SearchBusiness = (e) => {
    setSearch(e.target.value)
    if(e.target.value === '') return setFiltercompany(company)
    const filterCompany = company.filter((item) => {
      return item.role.toLowerCase().includes(e.target.value.toLowerCase()) || item.Business_Name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFiltercompany(filterCompany)
  }

  const CreateCareer = async (BusinessName) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const { Email } = user;
      const res = await useAxios.post("/History", {
        UserEmail:Email ,
        BusinessName,
      });
      console.log(res.data);
      alert("Career success");
    } catch (e) {
      if (isAxiosError(e)) {
        const status = e.response.status;
        if (status == 401) {
          alert("please input data");
        } else if (status == 400) {
          alert("Career is Already");
        } else {
          alert("Have somthing error");
        }
      }
    }
  }

  return (

    <>
      <HeaderMegaMenu />

      <div className={classes.root}>
        <Container size="xl" >
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Find Your New{' '}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: 'purple', to: 'azure' }}
                >
                  Dream Jobs
                </Text>{' '}
              </Title>

              <Text className={classes.description} mt={30}>
                Are you looking for amazing dream jobs? Don't worry! we get it for you.
              </Text>

              <TextInput
                pt={20}
                placeholder="Search"
                size="xs"
                mb="md"
                color='white'
                onChange={e => SearchBusiness(e)}
                id='search'
              />
            </div>
          </div>
        </Container>
      </div>

      <Grid gutter={15} pt={35} pb={35} pl={100} pr={100} >
        {filterCompany.map((item) => {
          return (
            <Grid.Col span={3}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={jobOffer.src}
                height={160}
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{item.Business_Name}</Text>
              <Badge color="pink" variant="light">
                {item.status}
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              รายละเอียด : {item.Detail}
            </Text>

            <Text size="sm" color="dimmed">
              ตำแหน่ง : {item.role}
            </Text>

            <Text size="sm" color="dimmed">
              จังหวัด : {item.Address}
            </Text>

            <Text size="sm" color="dimmed">
              สถานที่ตั้ง : {item.Work_Location}
            </Text>

              <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={(e) => CreateCareer(item.Business_Name)}>
                สมัครงาน
              </Button>
          </Card>
            </Grid.Col>
          )
        })}
      </Grid>

      <FooterSocial />
    </>
  );
}
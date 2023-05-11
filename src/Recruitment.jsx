import { MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from './Components/HeaderMegaMenu';
import { FooterSocial } from './Components/FooterSocial';
import { HeroTitle } from './Components/HeroTitle'
import {
  createStyles,
  rem,
  TextInput,
  Button,
  Group,
} from '@mantine/core';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import useAxios from './Components/lib/useAxios'

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: rem(60),
    paddingTop: rem(0),
  },

}));

export default function Recruitment() {

  const { classes } = useStyles();

  const [BusinessName, setBusinessName] = useState("");
  const [Detail, setDetail] = useState("");
  const [Role, setRole] = useState("");
  const [Province, setProvince] = useState("");
  const [WorkLocation, setWorkLocation] = useState("");

  const createCompany = async () => {
    try {
      const res = await useAxios.post("/company", {
        Business_Name: document.getElementById('BusinessName').value,
        Address: document.getElementById('Province').value,
        Detail: document.getElementById('Detail').value,
        role: document.getElementById('Role').value,
        Work_Location: document.getElementById('WorkLocation').value,
      });
      alert("Create success");
    } catch (e) {
      if (isAxiosError(e)) {
        const status = e.response.status;
        if (status == 401) {
          alert("please input data");
        } else if (status == 400) {
          alert("Business is exist");
        } else {
          alert("Have somthing error");
        }
      }
    }
  }

  const UpdateCompany = async () => {
    try {
      const res = await useAxios.put(`/company/${BusinessName}`,{
        Address: document.getElementById('Province').value,
        Detail: document.getElementById('Detail').value,
        role: document.getElementById('Role').value,
        Work_Location: document.getElementById('WorkLocation').value,
      })
      console.log("value"+ BusinessName);
      alert("Update success");
    } catch (e) {
      if (isAxiosError(e)) {
        const status = e.response.status;
        if (status == 401) {
          alert("please input data");
        } else {
          alert("Have somthing error");
        }
      }
    }
  }

  const DeleteCompany = async () => {
    try {
      const res = await useAxios.delete(`/company/${BusinessName}`,{
        BusinessName: document.getElementById('BusinessName').value,
        Address: document.getElementById('Province').value,
        Detail: document.getElementById('Detail').value,
        role: document.getElementById('Role').value,
        Work_Location: document.getElementById('WorkLocation').value,
      })
      console.log("value Delete success"+ BusinessName);
      alert("Delete success");
    } catch (e) {
      if (isAxiosError(e)) {
        const status = e.response.status;
        if (status == 401) {
          alert("please input data");
        } else {
          alert("Have somthing error");
        }
      }
    }
  }

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>
      <HeaderMegaMenu />

      <HeroTitle />

      <div>

        <TextInput
          pl={150}
          pr={150}
          pt={20}
          label="Name Business"
          placeholder="Input your name Department"
          classNames={classes}
          onChange={e => setBusinessName(e.target.value)}
          id='BusinessName'
        />

        <TextInput
          pl={150}
          pr={150}
          pt={20}
          label="Detail"
          placeholder="input detail"
          classNames={classes} 
          onChange={e => setDetail(e.target.value)}
          id='Detail'
          />

        <TextInput
          pl={150}
          pr={150}
          pt={20}
          label="Role"
          placeholder="input role"
          classNames={classes} 
          onChange={e => setRole(e.target.value)}
          id='Role'
          />

        <TextInput
          pl={150}
          pr={150}
          pt={20}
          label="Province"
          placeholder="Input your province"
          classNames={classes}
          onChange={e => setProvince(e.target.value)}
          id='Province' />

        <TextInput
          pl={150}
          pr={150}
          pt={20}
          label="Work Location"
          placeholder="Your Location"
          classNames={classes}
          onChange={e => setWorkLocation(e.target.value)}
          id='WorkLocation' />

        <Group position="center" pt={20} pb={20}>
          <Button onClick={DeleteCompany}
            styles={(theme) => ({
              root: {
                backgroundColor: '#1971c2',
                border: 0,
                height: rem(42),
                width: rem(200),
                paddingLeft: rem(20),
                paddingRight: rem(20),
                '&:not([data-disabled])': theme.fn.hover({
                  color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                }),
              },

              leftIcon: {
                marginRight: theme.spacing.md,
              },
            })}
          >
            Delete
          </Button>

          <Button onClick={UpdateCompany}
            styles={(theme) => ({
              root: {
                backgroundColor: '#1971c2',
                border: 0,
                height: rem(42),
                width: rem(200),
                paddingLeft: rem(20),
                paddingRight: rem(20),
                '&:not([data-disabled])': theme.fn.hover({
                  color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                }),
              },

              leftIcon: {
                marginRight: theme.spacing.md,
              },
            })}
          >
            Update
          </Button>

          <Button onClick={createCompany}
            styles={(theme) => ({
              root: {
                backgroundColor: '#1971c2',
                border: 0,
                height: rem(42),
                width: rem(200),
                paddingLeft: rem(20),
                paddingRight: rem(20),
                '&:not([data-disabled])': theme.fn.hover({
                  color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                }),
              },

              leftIcon: {
                marginRight: theme.spacing.md,
              },
            })}
          >
            Confirm
          </Button>
        </Group>

      </div>

      <FooterSocial />

    </MantineProvider>
  );
}
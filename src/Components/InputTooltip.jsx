import { TextInput, PasswordInput, Tooltip, Center, Text, Button, FileInput, Checkbox, Anchor, Modal, Group, Flex } from '@mantine/core';
import { IconInfoCircle, IconUser } from '@tabler/icons-react';
import { modals } from '@mantine/modals';
import useAxios from './lib/useAxios'
import { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';

export default function InputTooltip() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text color="dimmed" sx={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle size="1.1rem" stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  );

  const [opened, setOpened] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState('');
  const valid = Password.trim().length >= 6;

  const [EmailRegister, setEmailRegister] = useState("");
  const [PasswordRegister, setPasswordRegister] = useState("");
  const [Name, setName] = useState("");
  const [lastname, setlastname] = useState("");
  const [address, setaddress] = useState("");
  const [telephone, settelophone] = useState("");
  const [Nationality, setNationality] = useState("");

  const handlelogin = async () => {
    try {

      const res = await useAxios.post("/user/login", {
        Email: Email,
        password: Password,
      });
      alert("login success");
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (e) {
      if (isAxiosError(e)) {
        const status = e.response.status;
        if (status == 401) {
          alert("please input data");
        } else if (status == 400) {
          alert("Email or password is incorrect");
        } else {
          alert("Have somthing error");
        }
      }
    }
  }

  const handleRegister = async () => {
    try {
      const res = await useAxios.post("/user", {
        Email: document.getElementById('Email').value,
        Password: document.getElementById('Password').value,
        Name: document.getElementById('Name').value,
        Lastname: document.getElementById('Lastname').value,
        Address: document.getElementById('Address').value,
        Telephone: document.getElementById('Telephone').value,
        Nationality: document.getElementById('Nationlity').value,
      });
      alert("Register success");
      modals.closeAll();
    } catch (e) {
      if (isAxiosError(e)) {
        const status = e.response.status;
        if (status == 401) {
          alert("please input data");
        } else if (status == 400) {
          alert("Email or password is exist");
        } else {
          alert("Have somthing error");
        }
      }
    }
  }

  const openModal = () => {
    modals.open({
      title: "Register",
      centered: true,
      children: (<>
        <TextInput
          rightSection={rightSection}
          label="Email"
          placeholder="Your email"
          mt="md"
          onChange={e => setEmailRegister(e.target.value)}
          id='Email'
        />

        <Tooltip
          label={valid ? 'All good!' : 'Password must include at least 6 characters'}
          position="top-end"
          withArrow
          opened={opened}
          color={valid ? 'teal' : undefined}
        >
          <PasswordInput
            label="Password"
            required
            placeholder="Your password"
            onFocus={() => setOpened(true)}
            onBlur={() => setOpened(false)}
            mt="md"
            onChange={(e) => setPasswordRegister(e.target.value)}
            id='Password'
          />
        </Tooltip>

        <TextInput
          label="Name"
          placeholder="Your Name"
          mt="md"
          onChange={e => setName(e.target.value)}
          id='Name'
        />

        <TextInput
          label="Lastname"
          placeholder="Your Lastname"
          mt="md"
          onChange={e => setlastname(e.target.value)}
          id='Lastname'
        />

        <TextInput
          label="Address"
          placeholder="Your Address"
          mt="md"
          onChange={e => setaddress(e.target.value)}
          id='Address'
        />

        <TextInput
          label="Telephone"
          placeholder="Your Telephone"
          mt="md"
          onChange={e => settelophone(e.target.value)}
          id='Telephone'
        />

        <TextInput
          label="Nationality"
          placeholder="Your Nationality"
          mt="md"
          onChange={e => setNationality(e.target.value)}
          id='Nationlity'
        />

        <Flex justify={'end'} pt={20}>
          <Button radius="md" onClick={handleRegister}>
            Enter
          </Button>
        </Flex>
      </>
      )
    })
  }

  return (
    <>
      <TextInput
        rightSection={rightSection}
        label="Email"
        placeholder="Your email"
        mt="md"
        onChange={e => setEmail(e.target.value)}
      />

      <Tooltip
        label={valid ? 'All good!' : 'Password must include at least 6 characters'}
        position="top-end"
        withArrow
        opened={opened}
        color={valid ? 'teal' : undefined}
      >
        <PasswordInput
          label="Password"
          required
          placeholder="Your password"
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          mt="md"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Tooltip>

      <Group position="apart">
        <Anchor size="sm" component="button" mt="md" Anchor type="button" onClick={openModal}>
          Don't have an account? Register
        </Anchor>
        <Flex justify={'end'}>
          <Button radius="md" mt={10} onClick={() => { handlelogin() }}>
            Enter
          </Button>
        </Flex>
      </Group>
    </>
  );
}
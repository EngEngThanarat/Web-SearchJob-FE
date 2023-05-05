import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, Button, FileInput, Checkbox, Anchor, Modal, Group, Flex } from '@mantine/core';
import { IconInfoCircle, IconUser } from '@tabler/icons-react';
import { modals } from '@mantine/modals';

function Username() {
  return (
    <TextInput
      label="Username"
      position="top-end"
      placeholder="Your name"
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconUser size="1.1rem" stroke={1.5} />
          </div>
        </Tooltip>
      }
    />
  );
}

function TooltipIcon() {
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

  return (
    <TextInput
      rightSection={rightSection}
      label="Email"
      placeholder="Your email"
      mt="md"
    />
  );
}

function TooltipFocus() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const valid = value.trim().length >= 6;
  return (
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
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Tooltip>
  );
}

function InputFile() {
  return <FileInput mt="md" label="Upload files" placeholder="Upload files" accept="image/png,image/jpeg" />;
}

function Check() {
  return (
    <Checkbox
      label="I agree to confirm privacy"
      radius="md"
      mt="md"
    />
  );
}

function AnchorRegister() {

  const openModal = () => {
    modals.open({
      title: "Register",
      centered: true,
      children: (<>
        <Username />
        <TooltipIcon />
        <TooltipFocus />
        <InputFile />
        <Check />

        <Flex justify={'end'}>
          <Button radius="md" onClick={() => modals.closeAll()}>
            Enter
          </Button>
        </Flex>
      </>
      )
    })
  }

  return (
    <>
      <Group position="apart">
        <Anchor size="sm" component="button" mt="md" Anchor type="button" onClick={openModal}>
          Don't have an account? Register
        </Anchor>
        <Flex justify={'end'}>
          <Button radius="md" mt={10}>
            Enter
          </Button>
        </Flex>
      </Group>
    </>
  );
}

export function InputTooltip() {
  return (
    <>
      <TooltipIcon />
      <TooltipFocus />
      <AnchorRegister />
    </>
  );
}
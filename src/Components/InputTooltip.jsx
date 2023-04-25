import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, Button} from '@mantine/core';
import { IconInfoCircle, IconUser } from '@tabler/icons-react';
import "./InputTooltip.css";

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

function ButtonEnter() {
  return (
    <Button className='button' radius="md">
      Enter
    </Button>
  );
}

export function InputTooltip() {
  return (
    <>
      <Username />
      <TooltipIcon />
      <TooltipFocus />
      <ButtonEnter/>
    </>
  );
}
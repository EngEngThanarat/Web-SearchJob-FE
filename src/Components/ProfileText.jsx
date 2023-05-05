import { TextInput, SimpleGrid, Button, Group, rem, FileInput } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import React, { useState } from "react";
import { IconUpload } from '@tabler/icons-react';

export function ProfileText() {

  const id = useId();
  const [droppedImage, setDroppedImage] = useState(null);

  return (
    <div>

      <Dropzone
        accept={IMAGE_MIME_TYPE}
        sx={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          width: 350,
          height: 350,
          marginTop: 20,
          marginLeft: 600,
        }}
        onDrop={(files) => {
          setDroppedImage(files)
        }}
        style={{
          backgroundImage: droppedImage ? `url(${URL.createObjectURL(droppedImage[0])})` : undefined,
          backgroundSize: 'cover',
        }}
      >
      </Dropzone>

      <SimpleGrid pl={250} pr={250} cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
        />
        <TextInput
          label="Last Name"
          placeholder="Your lastname"
          name="lastname"
          variant="filled"
        />
      </SimpleGrid>

      <TextInput
        pl={250} pr={250} pt={10}
        label="Address"
        placeholder="Your address"
        name="address"
        variant="filled"
      />

      <SimpleGrid pl={250} pr={250} cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Telephone Number"
          placeholder="Your phone"
          component={IMaskInput}
          mask="+66 0-0000-0000"
          id={id}
          variant="filled"
        />

        <TextInput
          label="Nationality"
          placeholder="Your nationality"
          name="nationality"
          variant="filled"
        />
      </SimpleGrid>

      <FileInput
        pl={250} pr={250} pt={10}
        label="Your resume"
        placeholder="Your resume"
        icon={<IconUpload size={rem(14)}
          variant="filled" />} />

      <Group position="right" pt={20} pr={250} pb={20}>
        <Button
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
  );
}
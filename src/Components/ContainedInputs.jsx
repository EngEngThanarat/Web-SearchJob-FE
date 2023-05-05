import { 
  createStyles, 
  rem, 
  Select, 
  TextInput,
  Textarea, 
  Button, 
  Group, 
  FileInput,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: rem(60),
    paddingTop: rem(0),
  },

}));

export function ContainedInputs() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <div>

      <TextInput pl={150} pr={150} pt={20} label="Name Business" placeholder="Input your name Department" classNames={classes} />

      <Select
        mt="md"
        withinPortal
        data={['bangkok', 'pathumpthani', 'nonthaburi', 'chonburi']}
        placeholder="Pick one"
        label="Your Address"
        classNames={classes}
        pl={150} pr={150} pt={10}
      />

      <DatePickerInput
        mt="md"
        popoverProps={{ withinPortal: true }}
        label="Admission date"
        placeholder="When will you leave?"
        classNames={classes}
        clearable={false}
        pl={150} pr={150} pt={10}
      />

      <Textarea
        label="Responsibilities"
        height={500}
        placeholder="what duties you want?"
        classNames={classes}
        pl={150} pr={150} pt={20}
      />
      
      <Textarea
        label="Name of Business"
        placeholder="Detail about job"
        classNames={classes}
        pl={150} pr={150} pt={20}
        
      />

      <TextInput pl={150} pr={150} pt={20} label="Work Location" placeholder="Your Location" classNames={classes} />

      <FileInput

        label="Logo business"
        placeholder="Upload your business logo"
        accept="image/png,image/jpeg"
        className={classes} pl={150} pr={150} pt={20} 
      />

      <Group position="center" pt={20} pb={20}>
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
import { createStyles, Container, Text, Center, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: rem(50),
    paddingBottom: rem(50),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    marginLeft: 140,
    paddingLeft: 'auto',

    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),
    alignItems: 'center',
    justifyContent: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },
}));

export function ProfileTitle() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Center>
        <Container size={700} className={classes.inner} pr={130}>
          <h1 className={classes.title}>
            <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
              Re
            </Text>
            ply
          </h1>

          <Text className={classes.description} color="dimmed" pl={100}>
            Looking and Edit your Reply
          </Text>

        </Container>
      </Center>
    </div>
  );
}
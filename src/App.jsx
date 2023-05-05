import { MantineProvider, Grid, } from '@mantine/core';
import { HeaderMegaMenu } from './Components/HeaderMegaMenu';
import { FooterSocial } from './Components/FooterSocial';
import { BadgeCard } from './Components/BadgeCard';
import { HeroImageRight } from './Components/HeroImageRight';
import { GetInTouchSimple } from './Components/GetInTouchSimple';
import { ModalsProvider } from '@mantine/modals';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>
      <ModalsProvider>

        <HeaderMegaMenu />

        <HeroImageRight />

        <Grid justify="left" align="center" columns={20} pt={60} pl={200}>
          <Grid.Col span={6}><BadgeCard /></Grid.Col>
          <Grid.Col span={6}><BadgeCard /></Grid.Col>
          <Grid.Col span={6}><BadgeCard /></Grid.Col>
          <Grid.Col span={6}><BadgeCard /></Grid.Col>
        </Grid>

        <GetInTouchSimple />

        <FooterSocial />
      </ModalsProvider>
    </MantineProvider>
  );
}
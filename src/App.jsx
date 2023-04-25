import { MantineProvider, Grid, rem, Group } from '@mantine/core';
import { HeaderMegaMenu } from './Components/HeaderMegaMenu';
import { Search } from './Components/Search';
import { FooterSocial } from './Components/FooterSocial';
import { BadgeCard } from './Components/BadgeCard';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>
      <HeaderMegaMenu />

      <Search />

      <Grid justify="center" align="center" columns={22}>
        <Grid.Col span={6}><BadgeCard /></Grid.Col>
        <Grid.Col span={6}><BadgeCard /></Grid.Col>
        <Grid.Col span={6}><BadgeCard /></Grid.Col>
        <Grid.Col span={6}><BadgeCard /></Grid.Col>
        <Grid.Col span={6}><BadgeCard /></Grid.Col>
        <Grid.Col span={6}><BadgeCard /></Grid.Col>
        <Grid.Col span={6}><BadgeCard /></Grid.Col>
      </Grid>

      <FooterSocial />
    </MantineProvider>
  );
}
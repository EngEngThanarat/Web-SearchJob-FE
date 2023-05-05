import { MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from './Components/HeaderMegaMenu';
import { FooterSocial } from './Components/FooterSocial';
import { ModalsProvider } from '@mantine/modals';
import { ContainedInputs } from './Components/ContainedInputs'
import { HeroTitle } from './Components/HeroTitle'

export default function Recruitment() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>
        <HeaderMegaMenu />

        <HeroTitle/>

        <ContainedInputs/>

        <FooterSocial />
        
    </MantineProvider>
  );
}
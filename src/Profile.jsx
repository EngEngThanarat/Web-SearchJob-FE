import { MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from './Components/HeaderMegaMenu';
import { FooterSocial } from './Components/FooterSocial';
import { ProfileTitle } from './Components/ProfileTitle'
import { ProfileText } from './Components/ProfileText'

export default function Profile() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>
        
        <HeaderMegaMenu />

        <ProfileTitle/>

        <ProfileText/>

        <FooterSocial />
        
    </MantineProvider>
  );
}
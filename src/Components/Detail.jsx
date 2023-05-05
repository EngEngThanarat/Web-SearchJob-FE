import { MantineProvider, Grid, Center, Box, Group, Text, Button, rem, Flex, Container } from '@mantine/core';
import { HeaderMegaMenu } from './HeaderMegaMenu';
import { FooterSocial } from './FooterSocial';
import { ModalsProvider } from '@mantine/modals';
import Header from './Header.jpg'

export default function Detail() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>

      <HeaderMegaMenu />

      <Container size={'80%'} bg={'white'} pb={20}>
        <img src={Header} alt="Header" width={'100%'} height={500} />

        <Flex justify={'space-between'} align={'center'}>
          <Text size={24} pt={20} pl={10} color='black'>ตำแหน่งที่ต้องการ</Text>
          <Button>Enter</Button>
        </Flex>
        <br />
        <Text size={20} pl={10} color='black'>ชื่อบริษัท</Text><br />
        <Text size={20} pl={10} color='black'>สถานที่ตั้ง</Text>
      </Container>

      <Box color='black' pt={20} pb={20}></Box>

      <Container size={'80%'} bg={'white'} pt={20} >

        <Text size={20} pl={10} color='black'>ไฮไลท์เด่นของงาน</Text><br />
        <Text size={16} pl={10} color='black'>-ชอบเรียนรู้งานเกี่ยวกับทางด้านไอที</Text><br />
        <Text size={16} pl={10} color='black'>-สามารถใช้ภาษาอังกฤษได้ในการทำงาน</Text><br />
        <Text size={20} pl={10} color='black'>รายละเอียดงาน</Text><br />
        <Text size={16} pl={10} color='black'>Customer Administrator and Coordinator จะเป็นผู้ที่จะช่วยจัดการธุรการและประสานงานเกี่ยวกับลูกค้า เช่น การออกใบเสนอราคาให้ลูกค้า เตรียม Excel หรือการเตรียมเอกสารที่จำเป็นสำหรับการให้ลูกค้าพิจารณาการสั่งซื้อบริการจากบริษัท การติดตามเอกสารที่ต้องการจากลูกค้า และนำข้อมูลการขายเข้าสู่ระบบหลังบ้าน</Text><br />
        <Text size={20} pl={10} color='black'>คุณสมบัติขั้นต่ำ</Text><br />
        <Text size={16} pl={10} color='black'>-ปริญญาตรีสาขาใดก็ได้</Text><br />
        <Text size={16} pl={10} color='black'>-มีความรู้พื้นฐานในด้านไอทีหรือคอมพิวเตอร์</Text><br />
        <Text size={16} pl={10} color='black'>-สามารถใช้ภาษาอังกฤษได้ในการทำงาน</Text><br />

        {/* 
            คุณสมบัติพิจารณาเพิ่มเติม
            ปริญญาตรีหรือปริญญาโทที่เกี่ยวข้องกับด้านไอทีหรือคอมพิวเตอร์
            มีประสบการณ์เกี่ยวกับการทำงานประสานงาน
            มีประสบการณ์เกี่ยวกับการใช้ Microsoft Office ในการทำงาน
            คุณสมบัติส่วนตัว
            รักที่จะเรียนรู้และปรับปรุงตัวเองอยู่เสมอ
            มีความอดทนในการแก้ปัญหาที่เจอ
            ทำงานเป็นทีมและช่วยเหลือซึ่งกันและกัน
            พร้อมเปิดรับกับการเปลี่ยนแปลงของเทคโนโลยีและความคิด */}
      </Container>

      <FooterSocial />

    </MantineProvider>
  );
}
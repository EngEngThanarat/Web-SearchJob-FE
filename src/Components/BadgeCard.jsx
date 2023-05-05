import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import jobOffer from './jobOffer.png'
import { NavLink } from 'react-router-dom';

export function BadgeCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={jobOffer}
          height={160}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>ข้อเสนองาน</Text>
        <Badge color="pink" variant="light">
          รับสมัคร
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        รายละเอียดย่อ
      </Text>

      <Button to={"/Detail"} variant="light" color="blue" fullWidth mt="md" radius="md">
        <NavLink to={"/Detail"} >
          ดูรายละเอียดเพิ่มเติม
        </NavLink>
      </Button>
    </Card>
  );
}
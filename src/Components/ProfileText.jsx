import { Button, Container, Table, Text } from '@mantine/core';
import { useId } from '@mantine/hooks';
import React, { useState, useEffect } from "react";
import useAxios from './lib/useAxios'

export function ProfileText() {

  const id = useId();
  
  const [History, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, [])

  const fetchHistory = async () => {
    try {
      const res = await useAxios.get('/History');
      setHistory(res.data);
      console.log(History);
    } catch (e) {
      console.log(e);
    }
  };

  const UpdateRecruitment = async (id,BusinessName) => {
    try {
      const res = await useAxios.put(`/History/${id}`, {
        status: "ปิดรับสมัคร",
      })
      console.log("value" + id);

      console.log(BusinessName);
      const check = await useAxios.delete(`/company/${BusinessName}`)
      console.log("value Delete success" + BusinessName);

      alert("Update success");
    } catch (e) {
      alert("somthing error");
    }
  }

  const UpdateNoRecruitment = async (id) => {
    try {
      const res = await useAxios.put(`/History/${id}`, {
        status: "รับสมัคร",
      })
      const check = await useAxios.delete(`/History/${id}`)
      console.log("value Delete success" + id);
      alert("Update success");
    } catch (e) {
      alert("somthing error");
    }
  }

  return (
    <div>
      <Text size={24} pt={20} pl={260}>Reply</Text>
      <Container size={'70%'} pt={20} pb={20}>
        <Table horizontalSpacing="xl" withBorder >
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อบริษัท</th>
              <th>ชื่อผู้สมัคร</th>
              <th>สถานะ</th>
              <th>รับ</th>
              <th>ไม่รับ</th>
            </tr>
          </thead>
          <tbody>{
            History.length > 0 && History.map((element) => (
              <tr key={element.BusinessName}>
                <td>{element.id}</td>
                <td>{element.UserEmail}</td>
                <td>{element.BusinessName}</td>
                <td>{element.status}</td>
                <td><Button onClick={(e) => UpdateRecruitment(element.id,element.BusinessName)}>รับ</Button></td>
                <td><Button onClick={(e) => UpdateNoRecruitment(element.id,element.BusinessName)}>ไม่รับ</Button></td>
              </tr>
            ))
            }</tbody>
        </Table>
      </Container>

    </div>
  );
}
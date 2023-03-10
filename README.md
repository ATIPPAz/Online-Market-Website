#### โครงสร้างโปรเจค

## Components

components ไฟล์สำหรับเก็บ componentทั่วไป ต่างๆที่เรียกไปใช้ใน page เเต่ละ page
วิธี generate ไฟล์ ng g c components/ชื่อ components
components/utils เป็นที่สำหรับเก็บ component กลางไว้ใช้ร่วมกับ component หรือ page อื่นๆ

## pages

โฟลเดอร์นี้ใช้สำหรับเป็น page หลักเช่น หน้า home , หน้า contact เเล้วดึง component ย่อยๆมาใส่ลงใน pages
วิธี generate ไฟล์ ng g c pages/ชื่อ page เช่น homePage (ทีมี Page ติดหลังเพื่อป้องกันชื่อไฟล์ชนกับ component)

## services

ใช้สำหรับเก็บ service ทั้งหมดรอนำไปใช้งาน
วิธี generate ไฟล์ ng g s services/ชื่อโฟลเดอร์ของservice/ชื่อ service.ts หรือ ng g s services/ชื่อ service.ts

## layouts

ใช้สำหรับเก็บ layout ต่างๆ เช่น layout ทั่วไป (default layout ที่มี navbar , login layout ไม่มี navbar สามารถไปตบเเต่งเพิ่มได้)
วิธี generate ไฟล์ ng g c layouts/ชื่อ components ของlayout

## interfaces

ใช้สำหรับเก็บ interface type ทุกอันเพื่อนำไปใช้ต่อ

## app-routing

ใช้สำหรับจัดการ layout เเละ component ต่างๆ ว่า page ไหนจะใช้ layout ไหน

## modules

ใช้ สำหรับเก็บ function กลางเพื่อให้คนอื่นๆเรียกใช้ได้

## โฟลเดอร์ไหนไม่ใช้ก็ลบทิ้งงงงงง

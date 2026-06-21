"use client";

import React, { useState, useEffect } from "react";

/**
 * TypingRole Component - คอมโพเนนต์สำหรับแสดงข้อความแบบพิมพ์ดีด (Typing Effect)
 * สลับเปลี่ยนข้อความไปมาอย่างสวยงาม
 */
export default function TypingRole() {
  // รายการตำแหน่งหรือทักษะที่ต้องการแสดง
  const roles = [
    "Full Stack Developer",
    "Front-end Developer",
    "Back-end Developer",
    "Software Engineer",
    "Problem Solver",
  ];

  // state สำหรับเก็บดัชนีของคำปัจจุบัน
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  // state สำหรับเก็บข้อความที่กำลังแสดงผลอยู่
  const [currentText, setCurrentText] = useState("");
  // state สำหรับบอกว่ากำลังพิมพ์ (typing) หรือกำลังลบ (deleting)
  const [isDeleting, setIsDeleting] = useState(false);
  // state สำหรับกำหนดความเร็วในการพิมพ์/ลบ
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    // ฟังก์ชันหลักในการจัดการอนิเมชั่น
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        // กรณี "กำลังพิมพ์" - เพิ่มตัวอักษรทีละตัว
        setCurrentText(fullText.substring(0, currentText.length + 1));
        // ความเร็วปกติขณะพิมพ์
        setTypingSpeed(100);

        // ถ้าพิมพ์ครบคำแล้ว ให้หยุดพักครู่หนึ่งก่อนเริ่มลบ
        if (currentText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(2000); // หยุดรอ 2 วินาทีเมื่อพิมพ์เสร็จ
        }
      } else {
        // กรณี "กำลังลบ" - ลดตัวอักษรทีละตัว
        setCurrentText(fullText.substring(0, currentText.length - 1));
        // ลบเร็วขึ้นกว่าตอนพิมพ์เพื่อให้ดู Flow
        setTypingSpeed(50);

        // เมื่อลบจนหมดคำ ให้เปลี่ยนไปคำถัดไป
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // พักแป๊บเดียวก่อนเริ่มพิมพ์คำใหม่
        }
      }
    };

    // ใช้ setTimeout เพื่อเรียกใช้ฟังก์ชันตามความเร็วที่กำหนด
    const timer = setTimeout(handleTyping, typingSpeed);

    // cleanup timer เมื่อ component unmount หรือ state เปลี่ยน
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <div className="flex items-center justify-center min-h-[1.5em] mt-2">
      <span className="text-xl sm:text-2xl font-medium text-emerald-600 dark:text-emerald-400 tracking-wide">
        {currentText}
        {/* Cursor - ตัวกระพริบหลังข้อความ */}
        <span className="ml-1 border-r-2 border-emerald-500 animate-pulse"></span>
      </span>
    </div>
  );
}

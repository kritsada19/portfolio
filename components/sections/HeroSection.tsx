/**
 * HeroSection — ประตูด่านแรกของเว็บไซต์
 * 
 * ส่วนนี้ถูกอัปเกรดให้มีดีไซน์ที่พรีเมียมขึ้น:
 * 1. เพิ่ม Background Grid Pattern: ลายตารางที่ช่วยให้พื้นหลังดูมีรายละเอียด ไม่โล่งจนเกินไป
 * 2. Subtle Glow: เพิ่มแสงเรืองรองบาง ๆ ที่จัดวางอย่างเหมาะสมเพื่อให้ดูมีมิติ
 * 3. Enhanced Typography: ปรับแต่งระยะห่างและการเลือกใช้สีตัวอักษร
 */

import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";
import TypingRole from "../ui/TypingRole";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* ==========================================
          Premium Background - ลายตารางและแสงเรืองรอง
          ========================================== */}
      <div className="absolute inset-0 -z-10">
        {/* สีพื้นหลังพื้นฐาน */}
        <div className="absolute inset-0 bg-white dark:bg-slate-950" />

        {/* ลายตาราง (Grid) — ช่วยเพิ่ม Texture ให้หน้าเว็บดูเป็นแนว Tech/Modern */}
        <div className="absolute inset-0 bg-grid-pattern mask-grid opacity-[0.4] dark:opacity-[0.2]" />

        {/* แสงเรืองรอง (Spotlight) — เพิ่มจุดดึงสายตาแบบนุ่มนวล */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* ==========================================
          Main Content - เนื้อหาหลักจัดกลางหน้า
          ========================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-center relative z-10">
        {/* Badge: แสดงสถานะการทำงานปัจจุบัน (ใช้อนิเมชั่น Pulse เพื่อส่งสัญญาณว่า "ทำงานอยู่") */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300 tracking-wide uppercase">
            Available for Opportunities
          </span>
        </div>

        {/* หัวข้อหลัก: ชื่อและคำทักทาย */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]">
          <span className="block text-2xl sm:text-3xl font-medium text-slate-500 dark:text-slate-400 mb-2">
            Hello, I'm
          </span>
          <span className="text-slate-900 dark:text-white uppercase">KRITSADA</span>{" "}
          <span className="gradient-text uppercase">MOOLJAM</span>
        </h1>

        {/* ส่วนพิมพ์เปลี่ยนตำแหน่งไปมา (Typing Animation) */}
        <TypingRole />

        {/* คำอธิบายสั้น ๆ: บรรยายตัวตนและทักษะหลัก */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-6 mb-10 leading-relaxed font-light">
          Crafting exceptional digital experiences through clean code and intuitive design.
          Focused on building fast, reliable, and aesthetically pleasing modern web applications.
        </p>

        {/* ปุ่ม CTA: การเรียกใช้งานหลัก (Call to Action) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Link
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl
              bg-slate-900 dark:bg-white text-white dark:text-slate-900
              font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-950/20"
          >
            View My Projects
            <FiArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl
              bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300
              font-semibold border border-slate-200 dark:border-slate-800
              hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/50
              transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* ลูกศรชี้ลง: บอกใบ้ว่ามีเนื้อหาอยู่ด้านล่าง */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link
          href="#about"
          className="text-slate-400 hover:text-emerald-500 transition-colors duration-300"
          aria-label="เลื่อนลงเพื่อดูส่วนถัดไป"
        >
          <FiArrowDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}

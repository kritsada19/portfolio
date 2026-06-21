/**
 * Home Page — หน้าหลักของ Portfolio
 *
 * ประกอบด้วย Section ทั้งหมด:
 * 1. HeroSection   — แบนเนอร์แนะนำตัว
 * 2. AboutSection   — เกี่ยวกับผม
 * 3. SkillsSection  — ทักษะ / เทคโนโลยี
 * 4. ProjectsSection — ผลงานโปรเจกต์
 * 5. ContactSection — ติดต่อ / ส่งข้อความ
 * 6. Footer         — ส่วนท้ายเว็บ
 *
 * แต่ละ Section มี id ที่ตรงกับ NAV_LINKS ใน Navbar
 * เพื่อให้ scroll smooth ไปหาได้ถูกต้อง
 */

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      {/* ส่วนที่ 1: แบนเนอร์แนะนำตัว */}
      <HeroSection />

      {/* ส่วนที่ 2: เกี่ยวกับผม */}
      <AboutSection />

      {/* ส่วนที่ 3: ทักษะ / เทคโนโลยีที่ใช้ */}
      <SkillsSection />

      {/* ส่วนที่ 4: ผลงานโปรเจกต์ */}
      <ProjectsSection />

      {/* ส่วนที่ 5: ติดต่อ / ฟอร์มส่งข้อความ */}
      <ContactSection />

      {/* ส่วนท้ายเว็บ */}
      <Footer />
    </main>
  );
}

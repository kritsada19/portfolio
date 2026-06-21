/**
 * Navbar — แถบนำทางหลัก (Navigation Hub)
 * 
 * ส่วนนี้มีความซับซ้อนในการจัดการสถานะ:
 * 1. Scroll Effect: เปลี่ยนสไตล์เมื่อผู้ใช้เริ่มเลื่อนหน้าจอลงมา (เช่น เพิ่มเงา)
 * 2. Active Tracking: ระบุว่าผู้ใช้กำลังอยู่ที่ส่วนไหนของหน้า (About, Skills, ฯลฯ)
 * 3. Responsive Menu: จัดการการแสดงผลเมนูบนมือถือให้สวยงาม
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import ThemeToggle from "../theme/ThemeToggle";

/* --- รายการลิงก์ที่จะนำชุดคำนวนไปใช้ในการทำงานของ Navigation --- */
const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  /* --- ตรวจสอบการเลื่อนหน้าจอเพื่อเริ่มเพิ่ม Scroll Effect (Shadow) --- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* --- ตรวจสอบว่าหน้าจอกำลังแสดงผลหัวข้อไหน (Active Link Highlighter) --- */
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => document.querySelector(href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      ${isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-900 py-3 shadow-2xl shadow-slate-200/20 dark:shadow-slate-950/20"
          : "bg-transparent py-5"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* --- โลโก้แบรนด์ --- */}
        <Link
          href="#"
          className="text-2xl font-black bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent tracking-tighter"
        >
          KRITSADA.M
        </Link>

        {/* --- สถาปัตยกรรมเมนูสำหรับ Desktop --- */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-xs font-bold uppercase tracking-widest transition-all duration-300
              ${activeSection === href
                  ? "text-emerald-600 dark:text-emerald-400 scale-105"
                  : "text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-300"
                }
              `}
            >
              {label}
              {/* เส้นขีดด้านล่างเมนูที่ Highlight ส่วนที่กำลังดูอยู่ */}
              <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-emerald-500 transition-all duration-300 
                ${activeSection === href ? "w-full opacity-100" : "w-0 opacity-0"}`}
              />
            </Link>
          ))}

          <div className="pl-4 border-l border-slate-200 dark:border-slate-800">
            <ThemeToggle />
          </div>
        </div>

        {/* --- ระบบเมนูสำหรับ Mobile --- */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <IoClose className="w-5 h-5" /> : <CiMenuBurger className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* --- Overlay เมนูบนมือถือ (จะเลื่อนลงมาเมื่อเปิด) --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900
        ${isMenuOpen ? "max-h-screen opacity-100 py-8 shadow-2xl" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-10 gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-bold uppercase tracking-[0.2em] transition-colors
              ${activeSection === href ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-slate-400"}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
/**
 * Footer — ส่วนปิดท้ายของหน้าเว็บ
 * 
 * คุมโทนความเรียบง่ายและเป็นกันเอง:
 * 1. Copyright Info: แสดงปีปัจจุบันโดยอัตโนมัติ
 * 2. Social Links: ไอคอนโซเชียลที่ดูเป็นมิตรและตอบสนองได้ดี
 * 3. Gradient Brand: แสดงชื่อแบรนด์ด้วยสี Emerald-Green
 */

"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

/**
 * Footer — ส่วนท้ายของเว็บไซต์
 * 
 * 1. Framer Motion: เพิ่ม Animation เล็กน้อยเมื่อเลื่อนมาถึงท้ายหน้า
 * 2. Navigation Links: ลิงก์ด่วนไปยังส่วนต่าง ๆ ของเว็บ
 * 3. Social Presence: ช่องทางการติดตามผลงาน
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-10">
      {/* 
        ============================================================
        Animation Explanation:
        ใช้อนิมิชั่น Fade In เรียบง่ายสำหรับ Footer เพื่อไม่ให้แย่งความสนใจ 
        แต่ยังคงความต่อเนื่องของความรู้สึก "Dynamic" ของทั้งเว็บไซต์
        ============================================================
      */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Brief */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tighter mb-6 block uppercase">
              KRITSADA<span className="text-emerald-500">.</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed font-light">
              Designing and developing beautiful, functional, and user-centric digital experiences.
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              {["Hero", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: FiGithub, href: "https://github.com/kritsada19" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/kritsada-mooljam-ba3ab0374/?isSelfProfile=true" },
                { icon: FiMail, href: "mailto:ninep9p2006@gmail.com" },
                { icon: FiPhone, href: "tel:+668885578023" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-500 hover:border-emerald-500/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 dark:text-slate-500 font-light">
            © {currentYear} Kritsada Mooljam. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors"
          >
            Back to top
            <FiArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </footer>
  );
}

/**
 * Footer — ส่วนปิดท้ายของหน้าเว็บ
 * 
 * คุมโทนความเรียบง่ายและเป็นกันเอง:
 * 1. Copyright Info: แสดงปีปัจจุบันโดยอัตโนมัติ
 * 2. Social Links: ไอคอนโซเชียลที่ดูเป็นมิตรและตอบสนองได้ดี
 * 3. Gradient Brand: แสดงชื่อแบรนด์ด้วยสี Emerald-Green
 */

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

/* --- รายการ Social Icons --- */
const SOCIALS = [
  { icon: FiGithub, href: "https://github.com/kritsada19", label: "GitHub" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:kritsada.dev@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* --- แบรนด์ / ชื่อ (Brand Identity) --- */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="#hero"
              className="text-2xl font-black bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent tracking-tighter"
            >
              KRITSADA.M
            </Link>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">
              Full-Stack Developer Portfolio
            </p>
          </div>

          {/* --- ข้อความ Copyright และ Credit --- */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 font-light">
              <span>สร้างด้วยความตั้งใจ</span>
              <FiHeart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
              <span>โดย Kritsada &copy; {new Date().getFullYear()}</span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">
              Inspired by modern minimalism
            </p>
          </div>

          {/* --- ชุดปุ่ม Social Links --- */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-500 hover:text-emerald-500 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

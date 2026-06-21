/**
 * ContactSection — ช่องทางการติดต่อ (Communication Hub)
 * 
 * ส่วนนี้เน้นความหรูหรา ใช้งานง่าย และรองรับการติดต่อทางตรง:
 * 1. Framer Motion: ใช้สำหรับการเคลื่อนไหวที่นุ่มนวล
 * 2. Premium UI: ใช้ Glassmorphism และ Gradient ที่เข้ากับส่วนอื่น
 */

"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone } from "react-icons/fi";

const CONTACTS = [
  {
    icon: FiMail,
    label: "Email",
    value: "9 P",
    href: `mailto:ninep9p2006@gmail.com`,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    description: "Send me a private email here"
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Kritsada Mooljam",
    href: "https://www.linkedin.com/in/kritsada-mooljam-ba3ab0374/?isSelfProfile=true",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    description: "Check out my profile and network"
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "Kritsada Mooljam",
    href: "https://github.com/kritsada19",
    color: "bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white",
    description: "Explore my open source projects"
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+66 888 557 8023",
    href: "tel:+668885578023",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    description: "Call for urgent inquiries or chat"
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-900/30 scroll-mt-20">
      {/* 
        ============================================================
        Animation Explanation:
        ใช้การผสมผสานระหว่าง `whileInView` และการกำหนด `delay` (หน่วงเวลา) 
        ให้กับแต่ละองค์ประกอบ เพื่อให้ข้อมูลติดต่อค่อยๆ ปรากฏขึ้นมาทีละอย่าง 
        สร้างประสบการณ์ที่ลื่นไหลและดูระดับมืออาชีพ
        ============================================================
      */}
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-emerald-500 bg-emerald-500/5 rounded-full border border-emerald-500/10"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight"
          >
            Looking to <span className="gradient-text">get in touch?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            I'm always open to new opportunities, feedback, or just a friendly
            hello. Reach out through any of these platforms.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {CONTACTS.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="group relative p-8 rounded-4xl glass-card hover:border-emerald-500/40 transition-all duration-500 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-emerald-500/10 h-full"
              >
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>

                <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-[0.25em] mb-2">{item.label}</p>
                <h4 className="text-base font-bold text-slate-800 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors duration-300">
                  {item.value}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle hover accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/0 group-hover:bg-emerald-500/5 rounded-full blur-3xl transition-all duration-700" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-500 dark:text-slate-400 bg-white/5 dark:bg-slate-800/20 py-6 px-10 rounded-full border border-white/20 dark:border-white/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <FiMapPin className="text-emerald-500 w-5 h-5" />
              <span className="font-medium text-slate-700 dark:text-slate-200">Chiang Rai, Thailand</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700 mx-2" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm">Available for remote work worldwide</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

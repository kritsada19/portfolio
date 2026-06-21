/**
 * ContactSection — ช่องทางการติดต่อ (Communication Hub)
 * 
 * ส่วนนี้เน้นความหรูหรา ใช้งานง่าย และรองรับการส่งข้อความจริง:
 * 1. Framer Motion: ใช้สำหรับการเคลื่อนไหวที่นุ่มนวล
 * 2. API Integration: ส่งข้อมูลไปยัง /api/contact เพื่อส่งอีเมลจริง
 * 3. Premium UI: ใช้ Glassmorphism และ Gradient ที่เข้ากับส่วนอื่น
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiMessageSquare, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const CONTACTS = [
  {
    icon: FiMail,
    label: "Email",
    value: "kritsada.dev@gmail.com",
    href: "mailto:kritsada.dev@gmail.com",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kritsada",
    href: "#",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/kritsada19",
    href: "https://github.com/kritsada19",
    color: "bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage((error as Error).message);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white dark:bg-slate-950 scroll-mt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-emerald-500 bg-emerald-500/5 rounded-full border border-emerald-500/10">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
            ต้องการติดต่อ <span className="gradient-text">สอบถาม?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            ยินดีรับฟังทุกข้อเสนอแนะ หรือเพียงแค่ต้องการทักทาย
            คุณสามารถส่งข้อความหาผมได้โดยตรงผ่านฟอร์มด้านล่างนี้ครับ
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                  ข้อมูลการติดต่อ <FiMessageSquare className="text-emerald-500" />
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  ผมให้ความสำคัญกับทุกการติดต่อ และจะพยายามตอบกลับข้อความของคุณให้เร็วที่สุด
                  โดยปกติภายใน 24 ชั่วโมงในวันทำการครับ
                </p>
              </div>

              <div className="grid gap-4">
                {CONTACTS.map((item, idx) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-5 p-5 rounded-3xl glass-card hover:border-emerald-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-500/5"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] mb-1">{item.label}</p>
                      <p className="text-base font-semibold text-slate-700 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-800/50">
              <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center ring-1 ring-slate-100 dark:ring-slate-800">
                  <FiMapPin className="text-emerald-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Location</p>
                  <span className="text-sm font-medium">Bangkok, Thailand</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSend} className="glass-card p-8 sm:p-12 rounded-[2.5rem] space-y-6 relative border border-white/20 dark:border-slate-800/50 shadow-2xl overflow-hidden">
              {/* Visual accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl" />

              <div className="grid sm:grid-cols-2 gap-6 relative">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">ชื่อผู้ติดต่อ</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 p-4 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all dark:text-white text-sm"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">อีเมลตอบกลับ</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 p-4 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all dark:text-white text-sm"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2 relative">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">ข้อความของคุณ</label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 p-4 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all resize-none dark:text-white text-sm"
                  placeholder="เขียนข้อความหรือสิ่งที่ต้องการสอบถาม..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                disabled={status === "sending" || status === "success"}
                className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-500 shadow-xl relative overflow-hidden group
                    ${status === "success"
                    ? "bg-emerald-500 text-white shadow-emerald-500/25"
                    : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:shadow-emerald-500/20 active:scale-[0.98]"
                  }
                  `}
              >
                <AnimatePresence mode="wait">
                  {status === "sending" ? (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>กำลังส่งข้อมูล...</span>
                    </motion.div>
                  ) : status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <FiCheckCircle className="w-5 h-5" />
                      <span>ส่งข้อความสำเร็จแล้ว!</span>
                    </motion.div>
                  ) : status === "error" ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        x: [0, -10, 10, -10, 10, 0] 
                      }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-2"
                    >
                      <FiAlertCircle className="w-5 h-5" />
                      <span>เกิดข้อผิดพลาด ลองใหม่อีกครั้ง</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <FiSend className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>ส่งข้อความหาผม</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {status === "error" && (
                <p className="text-center text-xs text-red-500 mt-2 font-medium">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

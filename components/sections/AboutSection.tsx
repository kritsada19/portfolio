/**
 * AboutSection — เล่าเรื่องราวและจุดแข็งของคุณ
 * 
 * ส่วนนี้เน้นการสร้างความน่าเชื่อถือและความประทับใจ:
 * 1. ใช้ Grid Layout: แบ่งข้อมูลเรื่องราว (Story) และจุดเด่น (Key Highlights) ให้สมดุล
 * 2. Glassmorphism Cards: ใช้การ์ดที่มีความโปร่งใสและเงาที่นุ่มนวล
 * 3. Stats Highlight: แสดงตัวเลขสำคัญเพื่อให้เห็นภาพรวมความสำเร็จ
 */

import { FiCode, FiLayers, FiZap, FiCheckCircle } from "react-icons/fi";

/* --- ข้อมูลจุดเด่น (Highlights) ที่ต้องการเน้น --- */
const HIGHLIGHTS = [
  {
    icon: FiCode,
    title: "Clean & Scalable Code",
    desc: "Focused on writing clean, readable code that is scalable for the future.",
  },
  {
    icon: FiLayers,
    title: "Full-Stack Expertise",
    desc: "Proficient in both Frontend and Backend systems.",
  },
];

/* --- ข้อมูลสถิติ (Stats) --- */
const STATS = [
  { value: "3", label: "Projects Completed" },
  { value: "100%", label: "Dedication" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 bg-white dark:bg-slate-950 scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ==========================================
            Section Header - หัวข้อส่วนเกี่ยวกับผม
            ========================================== */}
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-emerald-500" />
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm">
              Get to know me better
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* ==========================================
            Main Content - เนื้อหาและการ์ดไฮไลท์
            ========================================== */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* --- ฝั่งซ้าย: เนื้อหาบรรยาย (Story) --- */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative">
              {/* ตกแต่งเส้นข้างหัวข้อเพื่อความพรีเมียม */}
              <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-linear-to-b from-emerald-500 to-transparent rounded-full hidden sm:block opacity-60" />
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white leading-tight">
                Learning, building, and growing <br />
                through <span className="gradient-text">full-stack development</span>.
              </h3>
            </div>

            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                I am a <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Full-Stack Developer</span> passionate about learning and solving problems with technology. My journey started with a simple curiosity: <span className="italic text-slate-500">"How does a website work?"</span> and that curiosity has led me into the world of web development.
              </p>
              <p>
                I enjoy building applications from the user-facing <span className="text-slate-900 dark:text-slate-100 font-medium px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/50">Frontend</span> to the robust <span className="text-slate-900 dark:text-slate-100 font-medium px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/50">Backend</span> behind the system. I prioritize <span className="text-emerald-600 dark:text-emerald-400 font-medium">performance</span>, <span className="text-emerald-600 dark:text-emerald-400 font-medium">accuracy</span>, and <span className="text-emerald-600 dark:text-emerald-400 font-medium">user experience (UX)</span>.
              </p>
              <p>
                Currently, I am continuously honing my skills through real-world projects to grow into a <span className="text-slate-900 dark:text-slate-100 font-bold border-b-2 border-emerald-500/30">Software Engineer</span> who can build valuable and practical products.
              </p>
            </div>

            {/* ส่วนของรายการแบบ Check list สำหรับจุดเด่นเพิ่มเติม */}
            <div className="grid sm:grid-cols-2 gap-4">
              {["Always eager to learn", "Client-centric approach", "Disciplined work ethic", "Committed to deadlines"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <FiCheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* --- แสดงตัวเลขสถิติ (Stats Block) --- */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-12">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{value}</span>
                  <span className="text-slate-500 text-sm font-medium uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- ฝั่งขวา: การ์ดไฮไลท์ (Highlight Cards) --- */}
          <div className="lg:col-span-5 space-y-6">
            {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group glass-card hover-lift p-8 rounded-3xl relative overflow-hidden"
              >
                {/* แสงเรืองรองจาง ๆ ที่จะเข้มขึ้นเมื่อ Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 group-hover:bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl transition-colors duration-500" />

                <div className="relative z-10 flex gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-slate-900 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-slate-800 dark:border-emerald-500/20 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2 tracking-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

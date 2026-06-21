/**
 * ProjectsSection — พื้นที่จัดแสดงความสำเร็จ (Gallery of Work)
 * 
 * ส่วนนี้ถูกออกแบบให้ดูพรีเมียมและน่าสนใจ:
 * 1. Project Grid: การจัดวางที่เว้นช่องไฟอย่างเหมาะสม
 * 2. Visual Hierarchy: เน้นชื่อโปรเจกต์และ Tech Stack ให้ชัดเจน
 * 3. Gradient Accent: ใช้สีที่แตกต่างกันในแต่ละโปรเจกต์เพื่อเพิ่มลูกเล่น
 */

import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

/* --- ข้อมูลรายการผลงานโปรเจกต์ --- */
const PROJECTS = [
  {
    title: "Failio - AI Startup Analyzer",
    desc: "An AI-powered platform engineered to analyze startup failure patterns, featuring complex revenue modeling and architectural safety guards.",
    techs: ["Next.js", "OpenAI", "Stripe", "PostgreSQL", "TypeScript", "Prisma", "NextAuth", "Redis", "Docker", "Vitest"],
    links: { github: "https://github.com/kritsada19/failio", live: "#" },
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Blog App",
    desc: "A blog application that allows users to create, edit, and delete blog posts. It also includes features such as user authentication, and comments.",
    techs: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Docker"],
    links: { github: "https://github.com/kritsada19/blog-app", live: "#" },
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "My Cloning Landing Page",
    desc: "A clone of the frontend of the website",
    techs: ["HTML", "CSS", "JavaScript"],
    links: { github: "https://github.com/kritsada19/My-cloning-landing-page", live: "https://my-cloning-landing-page.onrender.com" },
    gradient: "from-teal-500 to-blue-500",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-32 bg-white dark:bg-slate-950 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ==========================================
            Section Header - หัวข้อส่วนผลงาน
            ========================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Featured Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Projects I've <span className="gradient-text">Worked On</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 dark:text-slate-400 font-light text-lg">
            A collection of projects I've worked on, with attention to detail in every step of the creative process.
          </p>
        </div>

        {/* ==========================================
            Projects Grid
            ========================================== */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col glass-card p-1 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="bg-white dark:bg-slate-900/50 rounded-[2.3rem] p-8 sm:p-10 flex flex-col h-full border border-slate-100 dark:border-slate-800 transition-colors group-hover:bg-slate-50 dark:group-hover:bg-slate-800/40">

                {/* แถวบน: ไอคอนโฟลเดอร์และลิงก์ภายนอก */}
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg shadow-emerald-500/20`}>
                    <FiFolder className="w-6 h-6" />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.links.github} className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200">
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a href={project.links.live} className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-emerald-500 transition-all duration-200">
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* ชื่อโปรเจกต์และคำบรรยาย */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8 flex-1">
                  {project.desc}
                </p>

                {/* รายการ Tech Stack ที่ใช้ในโปรเจกต์นั้น ๆ */}
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ปุ่มลิงก์ไปยัง GitHub หลัก */}
        <div className="mt-24 text-center">
          <a
            href="https://github.com/kritsada19"
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
          >
            <FiGithub className="w-5 h-5" />
            Explore More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

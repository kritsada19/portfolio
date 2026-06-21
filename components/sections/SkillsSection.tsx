/**
 * SkillsSection — คลังแสงทางเทคโนโลยี (Technical Toolbox)
 * 
 * ส่วนนี้แสดงทักษะความชำนาญของคุณโดยแบ่งหมวดหมู่ชัดเจน:
 * 1. หมวดหมู่ (Categories): แยกกลุ่ม Frontend, Backend และ Tools เพื่อให้หาได้ง่าย
 * 2. ระดับความชำนาญ (Skill Levels): ใช้ Badge สีที่แตกต่างกันเพื่อบอกระดับความเชี่ยวชาญ
 * 3. Interaction: เมื่อเอาเมาส์ไปชี้ที่การ์ด จะมีเอฟเฟกต์ยกตัว (Hover-lift)
 */

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiPrisma,
  SiAuth0,
  SiRedis,
  SiGithubactions,
} from "react-icons/si";

/* --- กำหนดระดับความชำนาญและสไตล์ของ Badge --- */
type SkillLevel = "Basic" | "Intermediate" | "Advanced";

const LEVEL_STYLES: Record<SkillLevel, string> = {
  Basic:
    "text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700",
  Intermediate:
    "text-teal-600 bg-teal-50 dark:bg-teal-900/20 dark:text-teal-300 border border-teal-100 dark:border-teal-800",
  Advanced:
    "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-700",
};

/* --- ข้อมูลรายชื่อทักษะแยกตามกลุ่ม --- */
const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    desc: "Building modern, responsive, and user-focused web applications",
    skills: [
      { name: "React", icon: SiReact, level: "Intermediate" as const },
      { name: "Next.js", icon: SiNextdotjs, level: "Intermediate" as const },
      { name: "TypeScript", icon: SiTypescript, level: "Intermediate" as const },
      { name: "JavaScript", icon: SiJavascript, level: "Advanced" as const },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" as const },
      { name: "HTML5 & CSS3", icon: SiHtml5, level: "Advanced" as const },
    ],
  },

  {
    title: "Backend & Database",
    desc: "APIs, authentication, databases, and server-side development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Intermediate" as const },
      { name: "Express", icon: SiExpress, level: "Basic" as const },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Basic" as const },
      { name: "MongoDB", icon: SiMongodb, level: "Basic" as const },
      { name: "Prisma", icon: SiPrisma, level: "Intermediate" as const },
      { name: "NextAuth", icon: SiAuth0, level: "Intermediate" as const },
      { name: "Redis", icon: SiRedis, level: "Basic" as const },
    ],
  },

  {
    title: "DevOps & Tools",
    desc: "Deployment, containerization, and development workflow",
    skills: [
      { name: "Git & GitHub", icon: SiGit, level: "Intermediate" as const },
      { name: "GitHub Actions", icon: SiGithubactions, level: "Intermediate" as const },
      { name: "Docker", icon: SiDocker, level: "Basic" as const },
      { name: "CI/CD", icon: SiGithubactions, level: "Basic" as const },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-32 bg-slate-50 dark:bg-slate-900/30 scroll-mt-20 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ==========================================
            Section Header - หัวข้อส่วนทักษะ
            ========================================== */}
        <div className="text-center mb-20">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Skills & <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light">
            The tools and languages I choose to build efficient and practical solutions for projects.
          </p>
        </div>

        {/* ==========================================
            Skills Categories Grid
            ========================================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="group glass-card p-8 rounded-3xl hover-lift border-b-4 border-b-transparent hover:border-b-emerald-500 transition-all duration-300"
            >
              {/* รายละเอียดหมวดหมู่ */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                  {category.desc}
                </p>
              </div>

              {/* รายการ Skill Pills */}
              <div className="flex flex-col gap-4">
                {category.skills.map(({ name, icon: Icon, level }) => (
                  <div
                    key={name}
                    className="flex items-center justify-between group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover/item:text-emerald-500 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {name}
                      </span>
                    </div>

                    {/* Level Badge: แสดงระดับความชำนาญ */}
                    <span
                      className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded-md ${LEVEL_STYLES[level]}`}
                    >
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ข้อความทิ้งท้ายส่วนทักษะ */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            I am always learning new technologies...
          </p>
        </div>
      </div>
    </section>
  );
}

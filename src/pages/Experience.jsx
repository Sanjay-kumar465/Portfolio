import { motion } from "framer-motion";

const INTERNSHIPS = [
  {
    company: "Aparajitha Corporate Services Private Limited",
    role: "Agentic AI & Machine Learning Intern",
    duration: "May 2026 – June 2026",
    location: "India",
    employmentType: "Internship",
    logo: "https://media.licdn.com/dms/image/C560BAQH-u_Y1Z_3m_A/company-logo_200_200/0/1630652431613?e=2147483647&v=beta&t=7h7p_vL_W_G-W_G_W_G_W_G_W_G_W_G_W_G_W_G",
    highlight: "Worked on enterprise-grade AI compliance, policy intelligence, and automated risk analysis systems.",
    description: [
      "Worked on Agentic AI systems for intelligent compliance automation and policy analysis.",
      "Developed and improved ML-powered risk prediction and compliance decisioning pipelines.",
      "Built AI workflows integrating LLM reasoning, rule engines, and structured validation systems.",
      "Assisted in developing enterprise AI solutions for policy violation detection and audit automation.",
      "Improved model accuracy by implementing deterministic reasoning, confidence gating, and evidence-based validation.",
      "Collaborated with engineering teams to optimize backend APIs and AI inference workflows.",
      "Contributed to prompt engineering, semantic analysis, and compliance intelligence systems."
    ],
    technologies: ["Python", "FastAPI", "Machine Learning", "LLMs", "Agentic AI", "NLP", "Vector Databases", "REST APIs", "Docker", "Git", "Prompt Engineering"]
  },
  {
    company: "NoviTech R&D Pvt Ltd",
    role: "AI & ML Intern (Online)",
    duration: "Jul 2025 – Aug 2025 (1 Month)",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHqTkvOVMz78g/company-logo_200_200/company-logo_200_200/0/1696061229436/novitechresearchanddevelopment_logo?e=2147483647&v=beta&t=TbN4GWIzEoUFigqJnG1n1GQ_mwKm2X16pveA-hDAjKw",
    description: "Completed hands-on AI & ML internship. Worked on data preprocessing, feature engineering, and model training using Python and Scikit-learn. Applied supervised learning algorithms including classification and regression models. Gained exposure to real-world AI/ML workflows and industry best practices."
  },
  {
    company: "Pinnacle Labs",
    role: "Data Science Intern (Virtual)",
    duration: "Jul 11, 2025 – Aug 10, 2025 (4 Weeks)",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHXY0KWawdf-Q/company-logo_200_200/company-logo_200_200/0/1695059567198?e=2147483647&v=beta&t=Vr5KpRXI0IqpyDvk2dPLb93bqESlVnkSBK5oITdPqOk",
    description: "Completed 4-week virtual internship in Data Science with commendable performance. Worked on data science tasks and projects, demonstrating exceptional dedication and skill. Credential ID: PL/2025/JULP5/217"
  }
];

const HACKATHONS = [
  {
    name: "Thooral Hackathon",
    organiser: "PSG College of Technology, Coimbatore",
    event: "Infinitum 2026 — National-level Technical Symposium",
    duration: "13th & 14th February 2026",
    description: "Selected for the Final Round. Competed among top student teams to design and present an innovative tech solution under time constraints."
  },
  {
    name: "Origin Hackathon",
    organiser: "Saveetha Institute of Medical and Technical Sciences, Thandalam, Chennai",
    duration: "Finalist",
    description: "Selected for the Final Round. Collaborated with peers to ideate, prototype, and pitch a problem-solving product within the hackathon timeline."
  },
  {
    name: "Lithos Hackathon",
    organiser: "Chennai Institute of Technology, Malyambakkam, Chennai",
    event: "Lithos 2K26",
    duration: "Participant",
    description: "Participated and demonstrated problem-solving skills by building and presenting a tech solution within a competitive hackathon environment."
  }
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const timelineLine = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1,
    transition: { duration: 1.5, ease: "easeInOut" }
  }
};

export default function Experience() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-32"
    >
      <span className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
        // 03
      </span>
      <h2 className="section-title">Experience</h2>

      {/* Internships Section */}
      <div className="mt-20">
        <span className="font-mono text-accent text-xs tracking-widest uppercase mb-12 block">
          // INTERNSHIPS
        </span>
        <div className="relative ml-4 py-4">
          {/* Animated Line */}
          <motion.div 
            variants={timelineLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-0 top-0 bottom-0 w-px bg-accent/20 origin-top"
          />

          <div className="space-y-16">
            {INTERNSHIPS.map((exp, i) => (
              <motion.div
                key={i}
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] bg-accent rounded-full border-4 border-background" />
                
                <div className="flex flex-col md:flex-row md:items-start gap-6 group">
                  {exp.logo && (
                    <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-16 h-16 rounded-lg object-contain bg-white/5 p-2 border border-white/10 glass-effect"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                      <span className="font-mono text-accent text-sm">{exp.duration}</span>
                      {exp.employmentType && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-accent/30 text-accent/80 uppercase tracking-wider">
                          {exp.employmentType}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-medium mb-4 flex items-center gap-2">
                      {exp.company}
                      {exp.location && <span className="text-white/40 text-xs font-normal">• {exp.location}</span>}
                    </p>
                    
                    {exp.highlight && (
                      <p className="text-white/80 italic mb-4 text-sm border-l-2 border-accent/30 pl-4 py-1 bg-accent/5 rounded-r-lg">
                        "{exp.highlight}"
                      </p>
                    )}

                    {Array.isArray(exp.description) ? (
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-secondary-text text-sm flex gap-3 leading-relaxed">
                            <span className="text-accent mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-secondary-text max-w-2xl leading-relaxed mb-6">
                        {exp.description}
                      </p>
                    )}

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/70 hover:border-accent/50 hover:text-accent transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hackathons Section */}
      <div className="mt-32">
        <span className="font-mono text-accent text-xs tracking-widest uppercase mb-12 block">
          // HACKATHONS
        </span>
        <div className="relative ml-4 py-4">
          <motion.div 
            variants={timelineLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-0 top-0 bottom-0 w-px bg-accent/20 origin-top"
          />

          <div className="space-y-16">
            {HACKATHONS.map((hack, i) => (
              <motion.div
                key={i}
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] bg-accent rounded-full border-4 border-background" />
                
                <span className="font-mono text-accent text-sm mb-2 block">{hack.duration}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{hack.name}</h3>
                <p className="text-accent font-medium mb-1">{hack.organiser}</p>
                {hack.event && (
                  <p className="text-white/60 text-sm mb-4 font-mono uppercase tracking-widest">{hack.event}</p>
                )}
                <p className="text-secondary-text max-w-2xl leading-relaxed">
                  {hack.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

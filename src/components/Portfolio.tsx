import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Cloud, Server, Database, Network, Shield, Activity, Box, Workflow,
  Github, Linkedin, Mail, MapPin, Download, ArrowRight, ExternalLink,
  Terminal, GitBranch, Container, Settings2, Cpu, HardDrive, Globe2,
  CheckCircle2, Sparkles, Award, Code2, Zap, X, GraduationCap,
  Building2, BookOpen, Rocket, Lightbulb, Target, Wrench,
} from "lucide-react";
import snehal from "@/assets/snehal.jpeg.asset.json";
import certificate from "@/assets/fortune-cloud-certificate.png.asset.json";

// ============ CONTACT CONSTANTS ============
const EMAIL = "snehalswami1192@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/snehal-swami-798a5a381?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const WHATSAPP_NUMBER = "917823072063"; // E.164 without '+'
const GITHUB_URL = "https://github.com/snehal-2121";
const RESUME_URL = "/resume.pdf";
const RESUME_FILENAME = "Snehal-Swami-Resume.pdf";


// ============ HELPERS ============
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
      {children}
    </div>
  );
}

// ============ NAVBAR ============
function Navbar() {
  const links = [
    ["About", "about"], ["Skills", "skills"], ["Architecture", "architecture"],
    ["Projects", "projects"], ["Journey", "journey"], ["Contact", "contact"],
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass-strong flex items-center gap-1 rounded-full px-2 py-2 shadow-2xl">
        <a href="#top" aria-label="Snehal Swami - Home" className="flex items-center gap-2 rounded-full px-3 py-1.5 font-display text-sm font-semibold">
          <Cloud className="h-4 w-4 text-accent" />
          <span className="hidden sm:inline">Snehal Swami</span>
        </a>
        <div className="hidden items-center md:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
              {label}
            </a>
          ))}
        </div>
        <a href={RESUME_URL} download={RESUME_FILENAME}
          className="ml-1 hidden items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-foreground transition hover:bg-white/10 sm:inline-flex">
          <Download className="h-3.5 w-3.5" /> Resume
        </a>
        <a href="#contact"
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-primary/30 transition hover:shadow-accent/40">
          Hire Me <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </motion.header>
  );
}

// ============ HERO ============
const ROLES = ["Aspiring Cloud Engineer", "Snowflake Engineering Learner", "DevOps Enthusiast", "Cloud Architect in Progress"];
function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting && text === current) { setTimeout(() => setDeleting(true), 1400); return; }
      if (deleting && text === "") { setDeleting(false); setIdx((i) => (i + 1) % ROLES.length); return; }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);
  return (
    <span className="font-mono text-accent">
      {text}<span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-accent align-middle" />
    </span>
  );
}

function FloatingIcons() {
  const items = [
    { Icon: Cloud, x: "8%", y: "20%", d: 0 },
    { Icon: Server, x: "85%", y: "30%", d: 1.2 },
    { Icon: Database, x: "12%", y: "75%", d: 0.6 },
    { Icon: Container, x: "82%", y: "78%", d: 1.8 },
    { Icon: Network, x: "92%", y: "55%", d: 0.9 },
    { Icon: Shield, x: "5%", y: "50%", d: 2.1 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map(({ Icon, x, y, d }, i) => (
        <motion.div
          key={i} className="absolute" style={{ left: x, top: y }}
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 7 + i, repeat: Infinity, delay: d, ease: "easeInOut" }}
        >
          <div className="glass rounded-2xl p-3 text-accent/60 shadow-xl">
            <Icon className="h-6 w-6" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg" />
      <FloatingIcons />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 font-mono text-xs text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Building toward Cloud & Snowflake Engineering
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl font-bold leading-[1.05] text-foreground md:text-7xl">
            <span className="block">Snehal Swami</span>
            <span className="mt-2 block text-gradient-brand">Cloud & Snowflake Engineering</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground md:text-xl">
            Growing my cloud engineering foundation while exploring Snowflake and modern data platforms. Building with{" "}
            <Typewriter />
          </motion.p>

          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base text-muted-foreground/80">
            Developing practical skills across AWS, Linux, DevOps, and Snowflake data engineering.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href={RESUME_URL} download={RESUME_FILENAME} className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 font-medium text-white shadow-lg shadow-primary/30 transition hover:scale-[1.02] hover:shadow-accent/50">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-foreground backdrop-blur transition hover:bg-white/10">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-muted-foreground transition hover:text-foreground">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Barshi, Maharashtra</div>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-foreground"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="https://github.com/snehal-2121" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-foreground"><Github className="h-4 w-4" /> GitHub</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 transition hover:text-foreground"><Mail className="h-4 w-4" /> Email</a>
          </motion.div>
        </motion.div>

        {/* Profile card */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-accent/30 to-transparent blur-3xl" />
          <div className="relative glass-strong overflow-hidden rounded-3xl p-3 ring-glow">
            {/* Console-style chrome */}
            <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">aws-console / iam / snehal-swami</span>
              <Cloud className="h-3.5 w-3.5 text-accent" />
            </div>
            <div className="relative mt-3 overflow-hidden rounded-2xl">
              <motion.div
                className="absolute inset-0 z-10"
                animate={{ background: ["radial-gradient(circle at 30% 20%, oklch(0.78 0.13 220 / 0.25), transparent 60%)", "radial-gradient(circle at 70% 80%, oklch(0.58 0.21 260 / 0.3), transparent 60%)", "radial-gradient(circle at 30% 20%, oklch(0.78 0.13 220 / 0.25), transparent 60%)"] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <img src={snehal.url} alt="Snehal Swami" className="relative w-full object-cover" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 px-1 pb-1 font-mono text-[10px]">
              <div className="rounded-lg bg-white/5 p-2"><div className="text-muted-foreground">REGION</div><div className="text-accent">ap-south-1</div></div>
              <div className="rounded-lg bg-white/5 p-2"><div className="text-muted-foreground">ROLE</div><div className="text-accent">Cloud + Data</div></div>
              <div className="rounded-lg bg-white/5 p-2"><div className="text-muted-foreground">STATUS</div><div className="text-green-400">● ACTIVE</div></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ ABOUT / TIMELINE ============
const TIMELINE = [
  { title: "Diploma in Computer Science", desc: "Foundations in programming, systems, and problem-solving.", icon: Code2 },
  { title: "B.Tech Computer Science Engineering", desc: "Deepening core CS, networks, and operating systems.", icon: Cpu },
  { title: "Cloud Architecture Training", desc: "Designing fault-tolerant, scalable cloud systems.", icon: Cloud },
  { title: "AWS & DevOps Learning", desc: "Hands-on with EC2, S3, IAM, Docker, Kubernetes, Terraform.", icon: Container },
  { title: "Snowflake Engineering", desc: "Building a foundation in Snowflake and cloud data platforms.", icon: Database },
  { title: "Career Goal", desc: "Growing toward practical cloud and data engineering work.", icon: Sparkles },
];

function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>About Me</SectionLabel>
        <h2 className="text-4xl font-bold md:text-5xl">From classroom to <span className="text-gradient-brand">cloud production</span></h2>
        <p className="mt-4 text-muted-foreground">Building from cloud fundamentals toward Snowflake and data engineering.</p>
      </div>

      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* Vertical timeline line: mobile left, desktop center */}
        <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-accent via-primary to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10 md:space-y-14">
          {TIMELINE.map((t, i) => {
            const Icon = t.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="grid grid-cols-[64px_1fr] items-center gap-4 md:grid-cols-[1fr_64px_1fr] md:gap-8"
              >
                {/* Content card */}
                <div className={`order-2 md:order-1 ${isLeft ? "md:col-start-1 md:text-right" : "md:col-start-3 md:text-left"}`}>
                  <div className={`glass rounded-2xl p-5 text-left transition hover:border-accent/40 ${isLeft ? "md:ml-auto" : "md:mr-auto"}`} style={{ maxWidth: 380 }}>
                    <h3 className="font-display text-lg font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </div>

                {/* Timeline node / icon */}
                <div className="order-1 flex h-12 items-center justify-center md:order-2 md:col-start-2">
                  <div className="relative">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent/50" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ============ SKILLS ============
const SKILL_GROUPS = [
  { name: "Cloud", icon: Cloud, items: [
    { n: "EC2", t: "Elastic compute instances" }, { n: "S3", t: "Object storage" },
    { n: "IAM", t: "Identity & access mgmt" }, { n: "VPC", t: "Virtual private cloud" },
    { n: "Route 53", t: "DNS & routing" }, { n: "RDS", t: "Managed relational DB" },
    { n: "CloudWatch", t: "Monitoring & logs" }, { n: "Auto Scaling", t: "Elastic scaling" },
  ]},
  { name: "DevOps", icon: Workflow, items: [
    { n: "Docker", t: "Containerization" }, { n: "Kubernetes", t: "Container orchestration" },
    { n: "Jenkins", t: "CI/CD pipelines" }, { n: "Terraform", t: "Infra as code" },
    { n: "Ansible", t: "Configuration mgmt" },
  ]},
  { name: "Programming", icon: Code2, items: [
    { n: "Python", t: "Automation & scripting" }, { n: "Bash", t: "Shell scripting" },
    { n: "Shell", t: "Unix shell" },
  ]},
  { name: "Networking", icon: Network, items: [
    { n: "TCP/IP", t: "Internet protocol stack" }, { n: "DNS", t: "Domain name system" },
  ]},
  { name: "Tools", icon: Settings2, items: [
    { n: "Git", t: "Version control" }, { n: "GitHub", t: "Code collaboration" },
    { n: "Linux", t: "Operating system" },
  ]},
  { name: "Data Platforms", icon: Database, items: [
    { n: "Snowflake", t: "Current learning focus" },
  ]},
];

function Skills() {
  return (
    <Section id="skills">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>Tech Stack</SectionLabel>
        <h2 className="text-4xl font-bold md:text-5xl">Cloud-native <span className="text-gradient-brand">tool belt</span></h2>
        <p className="mt-4 text-muted-foreground">Cloud and DevOps foundations, with Snowflake as my growing data-platform focus.</p>
      </div>
      <div className="mt-14 space-y-10">
        {SKILL_GROUPS.map((g, gi) => {
          const GIcon = g.icon;
          return (
            <motion.div key={g.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: gi * 0.05 }}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-accent">
                  <GIcon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">{g.name}</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {g.items.map((s) => (
                  <motion.div key={s.n} whileHover={{ y: -4 }}
                    className="group relative cursor-default overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-4 backdrop-blur transition hover:border-accent/40 hover:shadow-[0_10px_40px_-15px_var(--color-accent)]">
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/30" />
                    <div className="relative font-display text-base font-semibold">{s.n}</div>
                    <div className="relative mt-1 font-mono text-[11px] text-muted-foreground">{s.t}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

// ============ AWS ARCHITECTURE ============
function Architecture() {
  const nodes = [
    { id: "r53", label: "Route 53", sub: "DNS", x: 50, y: 8, Icon: Globe2 },
    { id: "elb", label: "Load Balancer", sub: "ELB", x: 50, y: 26, Icon: Activity },
    { id: "ec2a", label: "EC2", sub: "App Server", x: 22, y: 48, Icon: Server },
    { id: "ec2b", label: "EC2", sub: "App Server", x: 78, y: 48, Icon: Server },
    { id: "rds", label: "RDS", sub: "MySQL", x: 30, y: 74, Icon: Database },
    { id: "s3", label: "S3", sub: "Storage", x: 70, y: 74, Icon: HardDrive },
    { id: "cw", label: "CloudWatch", sub: "Monitoring", x: 50, y: 94, Icon: Activity },
  ];
  const edges: [string, string][] = [
    ["r53", "elb"], ["elb", "ec2a"], ["elb", "ec2b"],
    ["ec2a", "rds"], ["ec2b", "rds"], ["ec2a", "s3"], ["ec2b", "s3"],
    ["rds", "cw"], ["s3", "cw"],
  ];
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  return (
    <Section id="architecture">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>AWS Infrastructure</SectionLabel>
        <h2 className="text-4xl font-bold md:text-5xl">A typical <span className="text-gradient-brand">3-tier</span> on AWS</h2>
        <p className="mt-4 text-muted-foreground">Exploring cloud infrastructure foundations alongside a growing interest in Snowflake data platforms.</p>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="relative mt-14 aspect-[5/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-4 sm:aspect-[16/10]">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="edge" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.13 220)" />
              <stop offset="100%" stopColor="oklch(0.58 0.21 260)" />
            </linearGradient>
          </defs>
          {edges.map(([a, b], i) => (
            <line key={i} x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y}
              stroke="url(#edge)" strokeWidth="0.25" className="animate-dash" opacity="0.7" />
          ))}
        </svg>
        {nodes.map((n) => {
          const Icon = n.Icon;
          return (
            <motion.div key={n.id}
              initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}>
              <div className="group flex flex-col items-center">
                <div className="relative">
                  <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-accent/40" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40 ring-1 ring-white/20 sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div className="mt-2 rounded-lg bg-background/80 px-2 py-0.5 text-center backdrop-blur">
                  <div className="font-display text-xs font-semibold sm:text-sm">{n.label}</div>
                  <div className="font-mono text-[9px] text-muted-foreground sm:text-[10px]">{n.sub}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

// ============ PROJECTS ============
type Project = {
  title: string;
  role: string;
  tag: string;
  category: string;
  timeline: string;
  featured?: boolean;
  Icon: React.ComponentType<{ className?: string }>;
  problem: string;
  solution: string;
  overview: string;
  features: string[];
  stack: string[];
  arch: string[];
  challenges: { title: string; desc: string }[];
  learnings: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Trackalpha",
    role: "Founder & Full-Stack Developer",
    tag: "EdTech · CBT Platform",
    category: "Product",
    timeline: "2025 — Ongoing",
    featured: true,
    Icon: GraduationCap,
    problem:
      "Indian competitive exam aspirants (JEE, NEET, MHT-CET, GATE) lack an affordable, exam-realistic CBT platform. Existing tools are either paywalled, laggy, or don't render mathematical and scientific notation correctly — a dealbreaker for STEM prep.",
    solution:
      "Trackalpha is a browser-based Computer Based Testing platform purpose-built for Indian competitive exams. It delivers a pixel-accurate replica of the real exam interface, renders LaTeX/KaTeX flawlessly, tracks per-topic performance, and works reliably on low-end devices.",
    overview:
      "A production EdTech platform combining timed mock tests, live analytics, adaptive practice, and detailed solution walkthroughs — all in one exam-realistic environment students can trust the night before an exam.",
    features: [
      "Real exam simulation with question palette, timer & section switching",
      "KaTeX rendering for math, physics & chemistry equations",
      "Instant scoring, percentile & topic-wise analytics",
      "Auth, attempt history & resume-in-progress support",
      "Admin console to author question banks and mock papers",
      "Mobile-responsive, works on 2G-tier networks",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase (Postgres + Auth)", "KaTeX", "Vite", "Framer Motion"],
    arch: ["React + Vite SPA", "Supabase Auth", "Postgres (RLS)", "Realtime Attempts", "Edge Functions", "CDN Delivery"],
    challenges: [
      { title: "Accurate math rendering", desc: "Balancing KaTeX bundle size vs. offline availability while keeping paint under 100ms on mid-tier phones." },
      { title: "Cheat-resistant timers", desc: "Server-authoritative timing so tab switches, refreshes, or clock tampering can't extend an attempt." },
      { title: "Row-level security", desc: "Designing Postgres RLS so students only see their own attempts while admins can grade at scale." },
    ],
    learnings: [
      "Shipping a real product taught me production-grade Supabase RLS and auth flows.",
      "Learned to profile React re-renders — critical for a UI with a 180-question palette.",
      "Understood that in EdTech, trust > features. One wrong answer key destroys credibility.",
    ],
    liveUrl: "https://trackalpha.in",
    githubUrl: GITHUB_URL,
  },
  {
    title: "Vihanhub",
    role: "Cloud & Backend Architect",
    tag: "Cloud · Civic Tech",
    category: "Infrastructure",
    timeline: "2025",
    Icon: Building2,
    problem:
      "Rural Indian villages lack digital infrastructure to access government schemes, land records, health services, and local commerce. Existing portals are urban-centric, single-language, and assume high-bandwidth users.",
    solution:
      "A cloud-hosted, multi-tenant platform where each village gets its own lightweight portal — with citizen services, notices, schemes and grievance workflows — deployed on cost-optimized AWS infrastructure that scales from 100 to 10,000 residents.",
    overview:
      "An AWS-native platform combining EC2, RDS, S3 and CloudFront to deliver a fast, offline-tolerant civic experience for rural India, with per-village isolation and Marathi/Hindi/English support.",
    features: [
      "Multi-tenant village portals with themed sub-routes",
      "Citizen registration, scheme discovery & application tracking",
      "Grievance submission with status timelines",
      "Notice board with SMS fallback for low-bandwidth users",
      "Admin dashboard for sarpanch & gram sevaks",
      "Bilingual UI (Marathi + English)",
    ],
    stack: ["AWS EC2", "AWS S3", "AWS RDS (MySQL)", "AWS CloudFront", "AWS IAM", "Route 53", "React", "Node.js"],
    arch: ["Route 53 (DNS)", "CloudFront (CDN)", "ALB → EC2 (Node)", "RDS MySQL Multi-AZ", "S3 (Documents)", "CloudWatch (Ops)"],
    challenges: [
      { title: "Cost vs. scale", desc: "Designing an architecture that stays under ₹2,000/month at low load but auto-scales for census-driven traffic spikes." },
      { title: "Offline tolerance", desc: "Service workers + IndexedDB queueing so form submissions survive flaky rural connectivity." },
      { title: "Data residency", desc: "Keeping citizen data inside ap-south-1 while still using global CloudFront edges for static assets." },
    ],
    learnings: [
      "Designed a production-shaped AWS 3-tier architecture end-to-end.",
      "Understood how IAM least-privilege actually works on a real project.",
      "Learned CloudFront cache invalidation is 90% of your operations pain.",
    ],
    liveUrl: "https://vihanhub.in",
    githubUrl: GITHUB_URL,
  },
  {
    title: "Taporatna Maha E-Seva",
    role: "Frontend Developer",
    tag: "GovTech · Bilingual UI",
    category: "Product",
    timeline: "2024",
    Icon: BookOpen,
    problem:
      "Citizens in Maharashtra spend hours in queues at CSC (Common Service Centres) because scheme information is scattered across dozens of government portals — most in English-only, none mobile-first.",
    solution:
      "Taporatna is a unified, bilingual (Marathi + English) service catalog that indexes government schemes, documents required, eligibility, and fees — with a clean search-first UI designed for citizens using a shared kiosk device.",
    overview:
      "A React-based public service directory with fast client-side search, category filters, and shareable scheme URLs — reducing counter-clerk time per citizen by an estimated 40%.",
    features: [
      "Fast client-side search across 200+ services",
      "Full Marathi / English toggle with URL persistence",
      "Category filters (Revenue, Health, Education, Agriculture)",
      "Print-friendly scheme pages for offline use",
      "Copy-link sharing for WhatsApp forwards",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "React Router", "Fuse.js"],
    arch: ["React SPA", "Static Hosting", "Client-side Search Index", "Bilingual i18n Layer", "PWA Manifest"],
    challenges: [
      { title: "Marathi typography", desc: "Getting Devanagari to render crisply across Android WebView, low-DPI screens, and old kiosk machines." },
      { title: "Data curation", desc: "Normalizing scheme metadata from PDFs and 15+ department portals into a consistent JSON schema." },
      { title: "Zero-JS fallback", desc: "Making critical pages render legibly even when JavaScript is blocked on kiosk browsers." },
    ],
    learnings: [
      "GovTech UX is 80% clarity, 20% code — every microcopy word matters.",
      "Built strong instincts for accessibility on low-end Android devices.",
      "Learned that bilingual UX is not translation — it's parallel design.",
    ],
    liveUrl: "https://taporatnamahaesevakendra.online",
    githubUrl: GITHUB_URL,
  },
  {
    title: "MSRS Academy",
    role: "Developer",
    tag: "EdTech · Learning Platform",
    category: "Product",
    timeline: "2026",
    Icon: Globe2,
    problem:
      "Students need a centralized digital platform to access learning resources and academic services. Traditional learning environments make it hard to organize study material and offer a convenient online learning experience.",
    solution:
      "MSRS Academy is an online education platform that gives students a digital learning environment with centralized access to educational resources — deployed on the cloud and served from its own custom domain at msrsacademy.com.",
    overview:
      "A responsive, student-facing learning platform built as a modern single-page web application and deployed on Google Cloud — making coursework and learning resources available anywhere, on any device.",
    features: [
      "Online education platform with student-facing interface",
      "Centralized access to learning resources",
      "Single-page application with client-side routing",
      "Fully responsive website experience",
      "Custom domain integration (msrsacademy.com)",
      "Cloud-based deployment on Google Cloud",
    ],
    stack: ["React", "TypeScript", "Firebase Hosting", "Google Cloud", "GoDaddy DNS", "Custom Domain"],
    arch: ["GoDaddy (Domain · msrsacademy.com)", "React SPA (Client)", "Firebase Hosting / Google Cloud (Delivery)", "CDN + SSL (Global Access)", "Student Browser (Access)"],
    challenges: [
      { title: "Custom domain wiring", desc: "Connecting msrsacademy.com through GoDaddy DNS to the Google Cloud-hosted app with correct records and SSL." },
      { title: "Learning-first UX", desc: "Organizing resources so students can find what they need quickly instead of digging through scattered files." },
    ],
    learnings: [
      "End-to-end platform delivery — from frontend build to custom domain and cloud deployment.",
      "Evaluated Firebase as the hosting layer and shipped the production setup on Google Cloud.",
    ],
    liveUrl: "https://msrsacademy.com",
  },
  {
    title: "Professional Portfolio",
    role: "Designer & Developer",
    tag: "Personal · Portfolio",
    category: "Web",
    timeline: "2026",
    Icon: Rocket,
    problem:
      "Most developer portfolios read like résumés with animations bolted on — they don't communicate craft, taste, or engineering thinking to a hiring manager scanning in 30 seconds.",
    solution:
      "This site: a cloud-engineering portfolio built as an AWS console-inspired dark-mode experience. Every section is a design decision — floating service icons in the hero, an animated 3-tier architecture diagram, and a WhatsApp-native contact flow.",
    overview:
      "A polished, production-quality single-page portfolio designed to demonstrate both cloud thinking and modern frontend craft in a single scroll.",
    features: [
      "Animated 3-tier AWS architecture diagram (SVG + Framer Motion)",
      "Glassmorphism UI with a coherent dark cloud-theme",
      "Typewriter role rotator & floating cloud-service icons",
      "WhatsApp-native contact form (no backend required)",
      "SEO-optimized routes with per-page metadata",
      "Fully responsive from 360px to 4K",
    ],
    stack: ["React", "TypeScript", "TanStack Start", "Tailwind CSS v4", "Framer Motion", "Lucide Icons"],
    arch: ["TanStack Start SSR", "Vite Build", "Tailwind v4 Theme", "Edge Deploy", "CDN Assets"],
    challenges: [
      { title: "Visual restraint", desc: "Resisting the urge to animate everything — picking three signature motions and letting the rest breathe." },
      { title: "Design tokenization", desc: "Building a full oklch-based dark theme with semantic tokens so every component stays on-brand without hardcoding." },
      { title: "Mobile parity", desc: "Making a dense, animation-heavy layout feel calm on a 375px viewport without hiding key content." },
    ],
    learnings: [
      "A portfolio is a product — treat it that way.",
      "Motion is punctuation, not paragraph.",
      "Design tokens compound: two hours of setup saves twenty hours of tweaking.",
    ],
    liveUrl: "https://snehalswami.in",
    githubUrl: GITHUB_URL,
  },
];

function ProjectCard({ p, i, onOpen }: { p: Project; i: number; onOpen: () => void }) {
  const Icon = p.Icon;
  const featured = !!p.featured;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-1 backdrop-blur transition hover:border-accent/40 hover:shadow-[0_30px_80px_-20px_var(--color-primary)]`}>
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/0 via-accent/20 to-primary/0 opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex h-full flex-col rounded-[1.4rem] bg-card/80 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-aws/40 bg-aws/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[oklch(0.85_0.16_60)]">
                <Sparkles className="h-3 w-3" /> Featured
              </span>
            )}
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">{p.tag}</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.timeline}</span>
          </div>
          <div className="flex gap-2">
            {p.githubUrl && (
              <a href={p.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
                <Github className="h-3.5 w-3.5" /> Code
              </a>
            )}
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs text-accent hover:bg-accent/20">
                <ExternalLink className="h-3.5 w-3.5" /> Live
              </a>
            )}
            <button onClick={onOpen} className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs font-medium text-white shadow-lg shadow-primary/20">
              Details <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-primary/40 to-accent/30 ring-1 ring-white/10">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-2xl font-bold leading-tight">{p.title}</h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{p.role}</p>
          </div>
        </div>

        <p className="mt-4 text-muted-foreground">{p.overview}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Problem</div>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-3">{p.problem}</p>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-accent">Key Features</div>
            <ul className="mt-2 space-y-1.5 text-sm">
              {p.features.slice(0, 4).map((f) => (
                <li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" /> {f}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Architecture</div>
            <div className="mt-2 space-y-2">
              {p.arch.slice(0, 4).map((a, idx) => (
                <div key={a} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-primary/40 to-accent/30 font-mono text-[10px] text-white">{idx + 1}</div>
                  <div className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs">{a}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-accent">Tech Stack</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const Icon = p.Icon;
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-background/80 p-0 backdrop-blur-md sm:items-center sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-t-3xl border border-white/10 bg-card/95 shadow-2xl sm:rounded-3xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-card/80 px-5 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-primary/50 to-accent/40 ring-1 ring-white/10">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">{p.category} · {p.timeline}</div>
              <h3 className="truncate font-display text-lg font-semibold sm:text-xl">{p.title}</h3>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto px-5 py-6 sm:px-8">
          <p className="font-mono text-xs text-muted-foreground">Role · {p.role}</p>

          {/* Problem / Solution */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
                <Target className="h-3.5 w-3.5" /> The Problem
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.problem}</p>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
                <Lightbulb className="h-3.5 w-3.5" /> The Solution
              </div>
              <p className="mt-2 text-sm text-foreground/90">{p.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Key Features</div>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" /> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture + Stack */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Architecture</div>
              <div className="mt-3 space-y-2">
                {p.arch.map((a, idx) => (
                  <div key={a} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-primary/40 to-accent/30 font-mono text-[10px] text-white">{idx + 1}</div>
                    <div className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs">{a}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Tech Stack</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div className="mt-6">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
              <Wrench className="h-3.5 w-3.5" /> Engineering Challenges
            </div>
            <div className="mt-3 space-y-3">
              {p.challenges.map((c) => (
                <div key={c.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="font-display text-sm font-semibold">{c.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="mt-6">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
              <Sparkles className="h-3.5 w-3.5" /> What I Learned
            </div>
            <ul className="mt-3 space-y-2">
              {p.learnings.map((l) => (
                <li key={l} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-none text-accent" /> {l}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/30">
                <ExternalLink className="h-4 w-4" /> Visit Live
              </a>
            )}
            {p.githubUrl && (
              <a href={p.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium transition hover:bg-white/10">
                <Github className="h-4 w-4" /> View Code
              </a>
            )}
            <button onClick={onClose} className="ml-auto inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition hover:text-foreground">
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <Section id="projects">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>Selected Projects</SectionLabel>
        <h2 className="text-4xl font-bold md:text-5xl">Things I've <span className="text-gradient-brand">shipped</span></h2>
        <p className="mt-4 text-muted-foreground">Practical projects shaping my cloud engineering experience as I grow toward Snowflake data work.</p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} onOpen={() => setOpenIdx(i)} />
        ))}
      </div>
      <AnimatePresence>
        {openIdx !== null && (
          <ProjectModal p={PROJECTS[openIdx]} onClose={() => setOpenIdx(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
}

// ============ CERTIFICATION ============
function Certification() {
  const [open, setOpen] = useState(false);
  return (
    <Section id="cert">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>Certification</SectionLabel>
        <h2 className="text-4xl font-bold md:text-5xl">Verified <span className="text-gradient-brand">cloud expertise</span></h2>
        <p className="mt-4 text-muted-foreground">6-month intensive training in AWS Cloud Architecture & DevOps.</p>
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative mx-auto mt-12 max-w-5xl">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-aws/30 via-primary/20 to-accent/30 blur-3xl" />
        <div className="relative glass-strong overflow-hidden rounded-3xl p-6 ring-glow md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-center">
            {/* Certificate image */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-2xl transition hover:scale-[1.01]"
              aria-label="View full certificate"
            >
              <img
                src={certificate.url}
                alt="Certificate: Snehal Nandayya Swami — Master in Cloud Architecture (AWS + DevOps), Fortune Cloud Technologies"
                loading="lazy"
                className="w-full rounded-lg"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 backdrop-blur-[2px] transition group-hover:bg-background/40 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                  <ExternalLink className="h-3.5 w-3.5" /> View full size
                </span>
              </span>
            </button>

            {/* Details */}
            <div>
              <div className="flex items-center gap-4">
                <div className="relative flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.78_0.16_60)] to-[oklch(0.58_0.21_260)] shadow-xl">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Issued Certification</div>
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">Master in Cloud Architecture <span className="text-accent">(AWS + DevOps)</span></h3>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="font-mono text-[10px] text-muted-foreground">ISSUED BY</div>
                  <div className="mt-0.5 font-display font-semibold">Fortune Cloud Technologies Pvt. Ltd.</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="font-mono text-[10px] text-muted-foreground">DURATION</div>
                  <div className="mt-0.5 font-display font-semibold">Aug 2025 – Jan 2026</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="font-mono text-[10px] text-muted-foreground">GRADE</div>
                  <div className="mt-0.5 font-display font-semibold text-accent">'A' Grade</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="font-mono text-[10px] text-muted-foreground">CERT No.</div>
                  <div className="mt-0.5 font-mono text-xs font-semibold">FCTP2526/0262</div>
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 font-mono text-[11px] text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_currentColor]" />
                Verified · Active
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {["EC2", "S3", "IAM", "VPC", "RDS", "Route 53", "CloudWatch", "Auto Scaling", "Docker", "Kubernetes", "Jenkins", "Terraform"].map((s) => (
                  <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-4 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 rounded-lg bg-background/80 p-2 text-foreground backdrop-blur transition hover:bg-background"
              >
                <X className="h-4 w-4" />
              </button>
              <img src={certificate.url} alt="Full certificate" className="w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

// ============ ACHIEVEMENTS ============
function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function Achievements() {
  const items = [
    { n: 2, l: "Cloud Projects", Icon: Box },
    { n: 8, l: "AWS Services Learned", Icon: Cloud },
    { n: 100, l: "Hours of Cloud Training", Icon: Zap },
    { n: 5, l: "DevOps Tools Explored", Icon: Workflow },
  ];
  return (
    <Section id="achievements">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => {
          const Icon = it.Icon;
          return (
            <motion.div key={it.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass relative overflow-hidden rounded-2xl p-6 text-center">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/15 blur-2xl" />
              <Icon className="mx-auto mb-3 h-6 w-6 text-accent" />
              <div className="font-display text-4xl font-bold text-gradient">
                <Counter to={it.n} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{it.l}</div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

// ============ JOURNEY ============
const JOURNEY = ["Linux", "Networking", "AWS", "Docker", "Kubernetes", "Terraform", "Snowflake", "Cloud + Data Engineering"];
const J_ICONS = [Terminal, Network, Cloud, Container, Box, GitBranch, Database, Sparkles];

function Journey() {
  return (
    <Section id="journey">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>Cloud + Data Engineering Journey</SectionLabel>
        <h2 className="text-4xl font-bold md:text-5xl">The road to <span className="text-gradient-brand">production</span></h2>
        <p className="mt-4 text-muted-foreground">From system fundamentals and AWS toward Snowflake engineering.</p>
      </div>
      <div className="relative mt-14 overflow-hidden">
        <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
          {JOURNEY.map((j, i) => {
            const Icon = J_ICONS[i];
            return (
              <div key={j} className="flex items-center gap-3 md:flex-col md:gap-2">
                <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative">
                  <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-accent/30" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
                <div className="font-display text-sm font-semibold md:text-center">{j}</div>
                {i < JOURNEY.length - 1 && (
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground md:hidden" />
                )}
              </div>
            );
          })}
        </div>
        <svg className="mt-4 hidden h-2 w-full md:block" viewBox="0 0 100 2" preserveAspectRatio="none">
          <line x1="0" y1="1" x2="100" y2="1" stroke="url(#edge2)" strokeWidth="0.3" className="animate-dash" />
          <defs>
            <linearGradient id="edge2" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.13 220)" />
              <stop offset="100%" stopColor="oklch(0.58 0.21 260)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Section>
  );
}

// ============ CONTACT ============
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setSending(true);
    const text =
      `Hi Snehal, I'm ${form.name}.\n` +
      (form.email ? `Email: ${form.email}\n` : "") +
      (form.subject ? `Subject: ${form.subject}\n` : "") +
      `\n${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setSending(false), 800);
  };

  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-6 sm:p-8 md:p-14">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Let's build the <span className="text-gradient-brand">cloud together</span></h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Open to internships and junior opportunities in cloud, AWS/DevOps, and Snowflake engineering.
            </p>
            <a href={RESUME_URL} download={RESUME_FILENAME} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-white shadow-lg shadow-primary/30 transition hover:shadow-accent/50">
              <Download className="h-4 w-4" /> Download Resume (PDF)
            </a>
            <div className="mt-8 space-y-3">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-accent/40 sm:text-base">
                <Mail className="h-5 w-5 shrink-0 text-accent" /> <span className="truncate">{EMAIL}</span>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-accent/40 sm:text-base">
                <Linkedin className="h-5 w-5 shrink-0 text-accent" /> <span className="truncate">linkedin.com/in/snehal-swami</span>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-accent/40 sm:text-base">
                <svg className="h-5 w-5 shrink-0 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.88 11.88 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.16-3.41-8.43zM12.05 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.76.99 1-3.67-.22-.38a9.42 9.42 0 1 1 17.5-4.86c0 5.21-4.23 9.43-9.38 9.43zm5.45-7.06c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
                <span className="truncate">WhatsApp +91 78230 72063</span>
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-accent/40 sm:text-base">
                <Github className="h-5 w-5 shrink-0 text-accent" /> <span className="truncate">github.com/snehal-2121</span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm sm:text-base">
                <MapPin className="h-5 w-5 shrink-0 text-accent" /> Barshi, Maharashtra, India
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="glass-strong space-y-4 rounded-2xl p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Name</span>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-background/60 px-3 py-2 outline-none focus:border-accent" />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</span>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-background/60 px-3 py-2 outline-none focus:border-accent" />
              </label>
            </div>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Subject</span>
              <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-background/60 px-3 py-2 outline-none focus:border-accent" />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-background/60 px-3 py-2 outline-none focus:border-accent" />
            </label>
            <button type="submit" disabled={sending} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 font-medium text-white shadow-lg shadow-primary/30 transition hover:shadow-accent/50 disabled:opacity-70">
              {sending ? "Opening WhatsApp…" : "Send via WhatsApp"} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <p className="text-center text-xs text-muted-foreground">Your message opens in WhatsApp and is sent to Snehal directly.</p>
          </form>
        </div>
      </div>
    </Section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 font-display text-sm">
          <Cloud className="h-4 w-4 text-accent" /> Snehal Swami · Cloud + Snowflake Engineering Portfolio
        </div>
        <div className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} · Growing across cloud and data platforms</div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Architecture />
      <Projects />
      <Certification />
      <Achievements />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}

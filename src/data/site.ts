export const site = {
  name: "Hamna Arshad",
  role: "Software Developer",
  positioning: "Software Developer | Full-Stack Development | AI/ML",
  headline: "Building software that solves real problems.",
  intro:
    "I'm a final-year Computer Science student at UET Lahore, working with Python, full-stack development, and applied AI. I enjoy solving technical problems and turning ideas into working applications.",
  email: "hamna.arshad0328@gmail.com",
  github: "https://github.com/HamnaArshad44",
  linkedin: "https://www.linkedin.com/in/hamna-arshad-084bb129b",
  university: "University of Engineering and Technology (UET), Lahore",
  degree: "BS Computer Science",
  studyPeriod: "2023–2027",
  graduationNote: "Expected",
} as const;

export const navItems = [
  { id: "about", label: "About", href: "/#about" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "resume", label: "Resume", href: "/#resume" },
  { id: "contact", label: "Contact", href: "/#contact" },
] as const;

export type NavId = (typeof navItems)[number]["id"];

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/^https?:\/\//, "")}`;

  return "http://localhost:3000";
}

export const siteDescription =
  "Hamna Arshad is a final-year Computer Science student at UET Lahore. She builds full-stack applications and applied AI systems with Python, Next.js, retrieval, and computer vision.";

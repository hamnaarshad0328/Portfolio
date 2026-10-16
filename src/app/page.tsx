import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Education } from "@/components/home/education";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { Resume } from "@/components/home/resume";
import { Skills } from "@/components/home/skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Resume />
      <Contact />
    </>
  );
}

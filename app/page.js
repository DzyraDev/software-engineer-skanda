import { blog as localBlogs } from "@/utils/data/blog"; // Sesuaikan path import sesuai lokasi file data blog Anda
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  const blogs = localBlogs;

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} /> {/* Pass blogs as props */}
      <ContactSection />
    </>
  );
}

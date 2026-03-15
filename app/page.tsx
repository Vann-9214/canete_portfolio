import Hero from "./Page/Sections/Hero/hero";
import { Navbar } from "./Page/Component/navbar";
import Techstack from "./Page/Sections/Techstack/techstack";
import Project from "./Page/Sections/Project/project";
import Contact from "./Page/Sections/Contact/contact";

export default function Home() {
  return (
    <main className="w-full bg-[linear-gradient(to_bottom,#F0F7FF_0%,rgba(185,226,254,0.85)_45%,#F0F7FF_100%)] flex flex-col">
      <Navbar />
      <Hero />
      <Techstack />
      <Project />
      <Contact />
    </main>
  );
}

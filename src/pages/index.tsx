import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main
      className="bg-[rgb(36,36,36)] text-white h-screen  snap-y snap-mandatory overflow-scroll
    z-0">
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="work-experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact Me */}
    </main>
  );
}
import Hero from "../components/Hero"
import Header from "../components/Header"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import ContactMe from "../components/ContactMe"
import Link from "../../node_modules/next/link"
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid"

export default function Home() {
  return (
    <main
      className='bg-[rgb(36,36,36)] text-white h-screen  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
       z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50'>
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='work-experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-4 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ArrowUpCircleIcon className='h-10 w-10 text-gray-500 hover:text-[#F7AB0A]' />
          </div>
        </footer>
      </Link>
    </main>
  )
}

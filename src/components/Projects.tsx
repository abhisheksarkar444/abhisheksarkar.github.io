import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function Projects({}: Props) {
  const projects=[
    {
      id: 1,
      name: 'Netflix Clone',
      desc: 'Netflix 2.0 app has a beautiful Home Screen with all the movies looking just like in Netflix. The list of movies is fetched from IMDB api using axios. The app is also made to be responsive across all devices.',
      image: '/Images/Netflix_clone.png'
    },
    {
      id: 2,
      name: 'Portfolio Page',
      desc: 'Portfolio page made with HTML5, CSS and JS. This single page app has the landing page, about me section, Work Experience, Project demos and testimonials',
      image: '/Images/Portfolio_1.0.png'
    }
  ]
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full 
        justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="realtive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50">
        {projects.map((project, i) => (
          <div className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 ">
            <motion.img 
              initial={{ y: -300, opacity:0 }}
              whileInView={{ y:0, opacity: 1}}
              transition={{ duration: 1.2 }}
              viewport={{once: true}}
              src={project.image} alt="" className="h-auto md:max-w-2xl"/>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">Case Study {i+1} of {projects.length}: </span>{project.name}
              </h4>

              <p className="text-lg text-center md:text-left">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects
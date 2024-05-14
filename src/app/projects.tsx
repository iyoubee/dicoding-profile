'use client'

import { ProjectCard } from '@/components'
import { Typography } from '@material-tailwind/react'

const PROJECTS = [
  {
    img: 'https://storage.googleapis.com/web-profil-hilman/project_1.png',
    title: 'University of Indonesia Peer Counseling Service Website',
    desc: 'The BEM UI Student Advocacy and Welfare Department Alliance provides peer counseling services intended for University of Indonesia Undergraduate and Vocational Program students.',
    details: 'https://www.empoweruni.com/',
  },
  {
    img: 'https://storage.googleapis.com/web-profil-hilman/project_2.png',
    title: 'COMPFEST14 Website',
    desc: 'COMPFEST, the biggest annual IT event held by Indonesian students, is back! With various series of events from events, academies, to competitions, we present concepts and prizes that are more exciting and interesting.',
    details: 'https://compfest.id/',
  },
  {
    img: 'https://storage.googleapis.com/web-profil-hilman/project_3.png',
    title: 'PERAK 2023',
    desc: `PERAK ("Pesta Rakyat Komputer" or Computer People's Party) is the biggest internal event at Fasilkom (Faculty of Computer Science) which aims to maintain a sense of kinship between elements and as a place to refresh from academic activities.`,
    details: 'https://perak.cs.ui.ac.id/',
  },
  {
    img: 'https://storage.googleapis.com/web-profil-hilman/project_4.png',
    title: 'Teman Bumil Web',
    desc: 'Teman Bumil is a forum to accompany Mums on their journey to becoming mothers, by sharing information about pregnancy, fetal growth and development, and the growth and development of children and teenagers.',
    details: 'https://www.temanbumil.com/home',
  },
]

export function Projects() {
  return (
    <section className='py-28 px-8'>
      <div className='container mx-auto mb-20 text-center'>
        <Typography variant='h2' color='blue-gray' className='mb-4'>
          My Projects
        </Typography>
        <Typography
          variant='lead'
          className='mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12'
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className='container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4'>
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}

export default Projects

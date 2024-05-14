'use client'
import { Typography } from '@material-tailwind/react'

function Hero() {
  return (
    <header className='bg-white p-8'>
      <div className='container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2'>
        <div className='row-start-2 lg:row-auto'>
          <Typography
            variant='h1'
            color='blue-gray'
            className='mb-4 lg:text-5xl !leading-tight text-3xl'
          >
            Welcome to my Web <br /> Development Portofolio!
          </Typography>
          <Typography
            variant='lead'
            className='mb-4 !text-gray-500 md:pr-16 xl:pr-28'
          >
            I&apos;m Muhammad Hilman, a passionate web developer based in Depok
            City. Here, you&apos;ll get a glimpse of my journey in the world of
            web development, where creativity meets functionality.
          </Typography>
        </div>
        <img
          width={1024}
          height={1024}
          alt='team work'
          src='https://storage.googleapis.com/web-profil-hilman/profile.jpg'
          className='h-[36rem] w-full rounded-xl object-contain'
        />
      </div>
    </header>
  )
}

export default Hero

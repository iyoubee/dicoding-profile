import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react'

interface ProjectCardProps {
  img: string
  title: string
  desc: string
  details: string
}

export function ProjectCard({ img, title, desc, details }: ProjectCardProps) {
  return (
    <Card color='transparent' shadow={false}>
      <CardHeader floated={false} className='mx-0 mt-0 mb-6 h-48'>
        <img
          src={img}
          alt={title}
          width={768}
          height={768}
          className='h-full w-full object-cover'
        />
      </CardHeader>
      <CardBody className='p-0'>
        <a
          href={details}
          className='text-blue-gray-900 transition-colors hover:text-gray-800'
        >
          <Typography variant='h5' className='mb-2'>
            {title}
          </Typography>
        </a>
        <Typography className='mb-6 font-normal !text-gray-500'>
          {desc}
        </Typography>
        <a href={details}>
          <Button color='gray' size='sm'>
            see details
          </Button>
        </a>
      </CardBody>
    </Card>
  )
}

export default ProjectCard

import data from '../assets/projects.json'
import { Link } from 'react-router-dom'

interface Project {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  technologies: string[]
  image: string[]
  url: string
}

export default function ProjectGrid() {
  const projects: Project[] = data

  const nbProjects: number = projects.length

  projects.forEach((project) => {
    console.log(project)
  })

  return (
    <>
      <h1 className='text-xl font-medium mb-2'>Mes projets</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-white'>
        {/* Show only 6 projects from end */}
        {projects.slice(nbProjects - 6, nbProjects).map((project) => (
          <div
            key={project.id}
            className='bg-secondary shadow-md rounded-md p-4'
          >
            <h2 className='text-xl font-bold'>{project.title}</h2>
            <p className='text-gray-600'>{project.shortDescription}</p>
            <div className='flex flex-wrap'>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className='bg-subtitle text-white text-sm rounded-full px-2 py-1 m-1 border-subtitle border'
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-end'>
              {project.url !== '' && (
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white font-bold py-2 px-4 rounded-full hover:text-accent'
                >
                  Voir le projet
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Voir plus (Button centré qui redirige vers la view projects.tsx*/}
      <div className='flex justify-center'>
        <Link
          to={'/projects'}
          className='text-white font-bold py-2 px-4 rounded-full hover:text-accent'
        >
          Voir plus
        </Link>
      </div>
    </>
  )
}

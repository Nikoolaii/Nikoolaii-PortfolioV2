import data from '../assets/projects.json'

interface Project {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  technologies: string[]
  image: string[]
  url: string
}

export default function Projects() {
  const projects: Project[] = data

  projects.forEach((project) => {
    console.log(project)
  })
  return (
    <>
      <div className='grid grid-cols-4 gap-4 text-white bg-primary p-3 m-3 rounded-md font-comfortaa'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-secondary shadow-md rounded-md p-4'
          >
            <h2 className='text-xl font-bold'>{project.title}</h2>
            <p className='text-gray-600 text-primary my-1'>
              {project.shortDescription}
            </p>
            <p className='text-gray-600 text-sm '>{project.longDescription}</p>
            <div className='flex flex-wrap my-2'>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className='bg-subtitle text-white text-sm rounded-full px-2 py-1 m-1 border-subtitle border'
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Show images */}
            <div className='flex flex-wrap justify-center'>
              {project.image.map((img) => (
                <img
                  key={img}
                  src={img}
                  alt='project'
                  className='w-1/3 h-1/3'
                />
              ))}
            </div>
            <div className='flex justify-end'>
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white font-bold py-2 px-4 rounded-full hover:text-accent'
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

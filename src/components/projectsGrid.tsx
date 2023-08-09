import data from '../assets/projects.json'

interface Project {
  id: String
  title: String
  shortDescription: String
  longDescription: String
  technologies: String[]
  image: String[]
  url: String
}

export default function ProjectGrid() {
  const projects: Project[] = data

  projects.forEach((project) => {
    console.log(project)
  })

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'></div>
    </>
  )
}

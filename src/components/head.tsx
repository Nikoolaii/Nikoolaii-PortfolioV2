import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Head() {
  return (
    <>
      <div className='flex flex-wrap items-center'>
        <h1 className='text-2xl font-medium'>Nikoolaii</h1>
        <div className='flex ml-auto'>
          <a href='mailto:nikolailemerre@gmail.com' target='_blank'>
            <FaEnvelope className='text-md m-1 ml-4 hover:text-subtitle' />
          </a>
          <a href='https://github.com/Nikoolaii' target='_blank'>
            <FaGithub className='text-md m-1 hover:text-subtitle' />
          </a>
          <a href='linkedin.com/in/nikolai-lemerre' target='_blank'>
            <FaLinkedin className='text-md m-1 hover:text-subtitle' />
          </a>
        </div>
        <h1 className='text-l w-full text-subtitle font-medium'>
          Etudiant en développement web
        </h1>
      </div>
    </>
  )
}

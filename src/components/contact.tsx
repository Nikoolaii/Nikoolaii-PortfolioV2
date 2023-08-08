import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <>
      <div>
        <h1 className='text-l'>
          Vous pouvez me contacter en suivant ces lien :
        </h1>
        <div className='ml-4 mt-1 mb-1'>
          <p className='w-full hover:text-rose-400'>
            <a href='mailto:nikolailemerre@gmail.com' target='_blank'>
              <FaEnvelope className='text-md m-1 text-rose-400 inline-block align-bottom' />
              nikolailemerre@gmail.com
            </a>
          </p>
          <p className='w-full hover:text-rose-400'>
            <a href='https://github.com/Nikoolaii' target='_blank'>
              <FaGithub className='text-md m-1 text-rose-400 inline-block align-bottom' />
              Nikoolaii
            </a>
          </p>
          <p className='w-full hover:text-rose-400'>
            <a href='linkedin.com/in/nikolai-lemerre' target='_blank'>
              <FaLinkedin className='text-md m-1 text-rose-400 inline-block align-bottom' />
              Nikolaï LEMERRE
            </a>
          </p>
        </div>
        <h1 className='text-l'>N'hésitez pas à me contacter !</h1>
      </div>
    </>
  )
}

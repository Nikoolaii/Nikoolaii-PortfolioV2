export default function Presentation() {
  return (
    <>
      <div>
        <h1 className='text-xl font-medium'>Présentation</h1>
        <p className='text-justify'>
          Bonjour, je me présente, Nikolaï, 20 ans, étudiant en alternance et
          <span className='text-subtitle'> développeur web fullstack</span> en
          devenir. J'ai commencé très vite à être passionné par le
          développement, particulièrement par le développement web. Actuellement
          diplomé d'un BTS SIO option SLAM, j'ai décidé de continuer mes études
          pour une troisième année en alternance. Cette année de bachelor
          ingénieurie du web se déroulera à l'ESGI (École Supérieure de Génie
          Informatique) à Lille et sera elle aussi en alternance.
        </p>
        <p className='text-justify'>
          J'ai eu l'occasion lors de mon BTS d'effectuer ma deuxième année en
          alternance, en tant de développeur et gestionnaire de base de données.{' '}
        </p>
        <h1 className='text-lg mt-4 font-medium'>
          Expériences professionnelles :
        </h1>
        <p className='text-justify'>
          <span className='text-subtitle'>2023-2024</span> : Développeur web php
          en alternance chez{' '}
          <a
            href='https://www.netim.com/fr'
            className='text-accent hover:text-secondary'
            target='_blank'
          >
            Netim
          </a>
        </p>
        <p className='text-justify'>
          <span className='text-subtitle'>2022-2023</span> : Administrateur base
          de données et développeur en alternance chez{' '}
          <a
            href='https://www.nordreprog.fr/'
            className='text-accent hover:text-secondary'
            target='_blank'
          >
            NordReprog
          </a>
        </p>
        <p className='text-justify'>
          <span className='text-subtitle'>mai 2022-juin 2022</span> : Stage de
          développement web chez{' '}
          <a
            href='https://www.anetmo.com/'
            className='text-accent hover:text-secondary'
            target='_blank'
          >
            Anetmo
          </a>
        </p>
      </div>
    </>
  )
}

import Contact from './components/contact'
import Footer from './components/footer'
import Head from './components/head'
import Presentation from './components/presentation'
import ProjectGrid from './components/projectsGrid'
import Separator from './components/separator'

function App() {
  return (
    <>
      <div className='flex justify-center items-center lg:mt-3 font-comfortaa font-light lg:mb-3'>
        <div className='lg:w-2/3 p-4 bg-primary text-left lg:rounded-md'>
          <Head />
          <Separator />
          <Presentation />
          <Separator />
          <ProjectGrid />
          <Separator />
          <Contact />
          <Separator />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

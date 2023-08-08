import Contact from './components/contact'
import Footer from './components/footer'
import Head from './components/head'
import Separator from './components/separator'

function App() {
  return (
    <>
      <div className='flex justify-center items-center mt-3'>
        <div className='w-2/3 p-4 bg-slate-100 text-left border-md'>
          <Head />
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

import Image from 'next/image'
import { Inter } from 'next/font/google'
import bgi2 from '/public/bgi2.svg'
import Navbar from '/src/pages/components/Navbar.jsx'
import Hero from '/src/pages/components/Hero.jsx'
import Jobs from '/src/pages/components/Jobs.jsx'
import Login from '/src/pages/Login.jsx'
import About from '/src/pages/components/About.jsx'
import Footer from '/src/pages/components/Footer.jsx'
import Register from '/src/pages/Register.jsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="bg-black bg-no-repeat bg-cover bg-fixed h-screen">
        <Image src={bgi2} className='absolute right-0 ' />
        <Navbar />
        <Hero /> 
      </div>
      <Jobs/>
      <About/>  
      <Footer/>
      
    </main>
  )
}

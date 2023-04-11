import Image from 'next/image'
import { Inter } from 'next/font/google'
import bgi2 from '/public/bgi2.svg'
import Navbar from '/src/pages/components/Navbar.jsx'
import Hero from '/src/pages/components/Hero.jsx'
import Jobs from '/src/pages/components/Jobs.jsx'

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
      
    </main>
  )
}

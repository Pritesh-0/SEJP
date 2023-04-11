import Image from 'next/image'
import { Inter } from 'next/font/google'
import bgi2 from '/public/bgi2.svg'
import Navbar from '/src/pages/components/Navbar.jsx'
import Hero from '/src/pages/components/Hero.jsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="bg-black bg-no-repeat bg-cover bg-fixed h-screen">
        <Image src={bgi2} className='absolute right-0 ' />
        <Navbar />
        <Hero />  
      </div>

      <div className='grid grid-rows-3 grid-cols-4 grid-flow-col h-screen'>
        <div className='col-start-2 col-span-3 row-span-3 bg-gray-900 mx-32 my-20 rounded-3xl'>

        </div>
      </div>
    </main>
  )
}

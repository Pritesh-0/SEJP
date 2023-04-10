import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TbBellRinging } from 'react-icons/tb'
import bgi2 from '/public/bgi2.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-black bg-no-repeat bg-cover bg-fixed h-screen">
      <Image src={bgi2} className='absolute right-0 '/>
      <div className="">
      <nav className='py-12 px-12 flex justify-between relative'>
      <div className='text-3xl px-9'>
        SEJP
      </div>
      <div className=''>
        <ul className='flex items-center text-black text-xl space-x-10'>
          <li className='px-4'>About</li>
          <li className='px-4'>Contact</li>
          <li className='px-4'>Jobs</li>
          <li className='px-4 '>
            <TbBellRinging className='text-2xl'/>
            </li>
          <div className='px-3 py-2 bg-white text-black rounded-md cursor-pointer'>
            My account
            </div>
        </ul>
      </div>
    </nav>
    </div>
    
    <div className='flex flex-col items-center justify-center relative text-center text-black mt-4 mx-auto'>
      <div className='text-4xl py-12 text-left'>
        <h1 >
          SOFTWARE ENGINEERING 
        </h1>

        <h1>JOB PLATFORM</h1>
        <h2 className='text-2xl'>
          Invest in Yourself
        </h2>
      </div>
      <div className='px-4 py-2 bg-white rounded-md text-xl cursor-pointer'>
        Learn More
      </div>

    </div>


    <div className=''>
      
    </div>
    </main>
  )
}

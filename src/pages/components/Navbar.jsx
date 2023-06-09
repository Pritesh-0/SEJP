import { TbBellRinging } from 'react-icons/tb'
import Link from 'next/link';

export default function Home() {
    return (
        <div className="">
          <nav className='py-12 px-12 flex justify-between relative'>
            <div className='text-3xl px-9 cursor-pointer'>
              SEJP
            </div>
            <div className=''>
              <ul className='flex items-center text-black text-xl space-x-10 cursor-pointer'>
                <li className='px-4'><Link href='#about'>About</Link> </li>
                <li className='px-4'><Link href='#footer'>Contact</Link></li>
                <li className='px-4'><Link href='Jobpage'>Jobs</Link></li>
                <li className='px-4 '>
                  <TbBellRinging className='text-2xl' />
                </li>
                <div className='px-3 py-2 bg-white text-black rounded-md cursor-pointer' >
                  <Link href='User'>My account</Link>
                </div>
              </ul>
            </div>
          </nav>
        </div>

    )
  }
  
  
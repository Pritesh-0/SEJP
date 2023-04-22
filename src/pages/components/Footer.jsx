import Link from 'next/link'
import foot from '/public/foot.svg'
import Image from 'next/image'
export default function Home(){
    return(
        <div className='h-screen' id='footer'>
            
            <Image src={foot} className='absolute'/>
            <div className='text-black text-2xl w-screen h-screen grid grid-cols-5 grid-rows-10'>
                <ul className='col-start-2 row-start-2 relative'>
                    <li className='py-3'>
                        OUR WEBSITE
                    </li>
                    <li className='py-1'>
                        About Us
                    </li>
                    <li className='py-1'>
                        Contact Us
                    </li>
                    <li className='py-1'>
                        Community
                    </li>
                    <li className='py-1'>
                        Student Perks
                    </li>
                    <li className='py-1'>
                        Career
                    </li>
                    <li className='py-1'>
                        Perks
                    </li>
                </ul>
                <ul className='col-start-3 row-start-2 relative'>
                    <li className='py-3'>JOB TITLES</li>
                    <li className='py-1'>Full Stack Developer</li>
                    <li className='py-1'>MERN Stack Developer</li>
                    <li className='py-1'>Agile Developer</li>
                    <li className='py-1'>UI/UX Design</li>
                </ul>

                <div className='relative col-start-4 row-start-2 text-xl'>
                    <div className='absolute flex rounded-lg'>
                        <Link className='bg-gray-600 text-black p-3' href='Register'>Register</Link> 
                        <Link className='bg-black text-white p-3' href='Login'>Login</Link>
                    </div>
            
                    
                </div>
            </div>

        </div>


        
    )
}
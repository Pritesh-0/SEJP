import { CiUser } from 'react-icons/ci'
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
export default function Home(){
    return(
        <div className='h-screen grid grid-rows-4 grid-cols-8 m-auto'>
            <div className="bg-gray-700 row-start-2 col-start-4 col-span-2 row-span-4 flex flex-col text-xl rounded-3xl mb-36">
                <div><CiUser className='text-9xl bg-white text-gray-950 rounded-full mx-auto mt-20  '/></div>
                <form className='mx-auto mt-10'>
                <div className='flex'>
                    <AiOutlineMail/>
                    <input placeholder='Email ID' id='email' type='email' required className='bg-transparent ml-6 '></input>
                </div>         
                <div className='bg-white h-px my-3'></div>
                <div className='flex'>
                    <AiFillLock/>
                    <input placeholder='Password' id='Password' type='password' required className='bg-transparent ml-6'></input>
                </div>
                <div className='bg-white h-px my-3'></div>
                <button className='bg-gray-950 px-10 py-1.5 rounded-md mt-4 '>Login</button>
                
                </form>
                <div className='bg-gray-950 my-3 h-3 w-full'></div>
                <div className='text-3xl text-center text-gray-400 mt-1 cursor-pointer'>
                    REGISTER
                </div>
            </div>
        </div>
    )
}
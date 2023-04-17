import { CiUser } from 'react-icons/ci'
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
export default function Home(){
    return(
        <div className='h-screen grid grid-rows-8 grid-cols-8 m-auto'>
            <div className="bg-gray-700 row-start-3 col-start-4 row-span-3 col-span-2 flex flex-col text-xl rounded-3xl ">
                <div><CiUser className='text-9xl bg-white text-gray-950 rounded-full mx-auto mt-12'/></div>
                <form className='mx-auto mt-10'>
                <div className='flex'>
                    <AiOutlineMail/>
                    <input placeholder='Email ID' id='email' type='email' required className='bg-transparent ml-6'></input>
                </div>         
                <hr className='my-3'></hr>
                <div className='flex'>
                    <AiFillLock/>
                    <input placeholder='Password' id='Password' type='password' required className='bg-transparent ml-6'></input>
                </div>
                <hr className='my-3'></hr>
                <button className='bg-gray-950 px-10 py-1.5 rounded-md mt-4 '>Login</button>
                <hr className='bg-black '></hr>
                </form>
            </div>
        </div>
    )
}
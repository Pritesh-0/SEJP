import { CiUser } from 'react-icons/ci'
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import axios from 'axios';
import Link from 'next/link';

export default function Home(){
    const handleSubmit = async(event) => {
        event.preventDefault()  
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        const formData = JSON.stringify(data)
        console.log(formData)
        const response = await fetch("http://localhost:5000/user", {method: 'POST', headers: {'accept': 'application/json','Content-Type': 'application/json'}, body: formData,})
        const responseCode = await response.status
        if (responseCode != 201) {
            alert("Registeration failed!!")
        } else {
            alert("Successfully Registered")
        }
    }

    
    return(
        <div className='h-screen grid grid-rows-4 grid-cols-8 m-auto' id="register">
            <div className="bg-gray-700 row-start-2 col-start-4 col-span-2 row-span-4 flex flex-col text-xl rounded-3xl mb-36">
                
                <form onSubmit={handleSubmit} className='mx-auto mt-10'>
                    <h1 className='text-3xl text-center text-blue-500'>
                        REGISTER
                    </h1>
                    <h2 className='mb-6 text-s text-center'>
                        Join Our Platform Today!
                    </h2>
                <div className='flex flex-col'>
                    Name
                    <input placeholder='Rick Astley' id='name' type='text' name='name' required className='bg-transparent'></input>
                </div> 
                <div className='bg-white h-px my-3'></div>
                <div className='flex flex-col'>
                    Email
                    <input placeholder='Never.Gonna@giveyou.up' id='email' type='email' name='email' required className='bg-transparent'></input>
                </div>         
                <div className='bg-white h-px my-3'></div>
                <div className='flex flex-col'>
                    Password
                    <input placeholder='******' id='Password' type='password' name='password' required className='bg-transparent'></input>
                </div>
                <div className='bg-white h-px my-3'></div>
                <button className='bg-gray-950 px-10 py-1.5 rounded-md mt-4 '>Register</button>
                <div className='flex text-xs mt-2'>
                    <h1 className='mr-1'>
                        Already a Member 
                    </h1>
                    <Link href='/Login' className='text-blue-500'>Sign In</Link>
                </div>
                </form>
                
            </div>
        </div>
    )
}
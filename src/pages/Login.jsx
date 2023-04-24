import { CiUser } from 'react-icons/ci'
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import axios from 'axios';
import Link from 'next/link';
const qs = require('qs');

export default function Home(){
    const handleSubmit = async(event) => {
        event.preventDefault()  
        const data = {
            grant_type: "",
            scope: "",
            client_id: "",
            client_secret: "",
            username: event.target.username.value,
            password: event.target.password.value,
        }
        const formData = qs.stringify(data)
        const response = await fetch("http://localhost:5000/token", {method: 'POST', headers: {'accept': 'application/json','Content-Type': 'application/x-www-form-urlencoded',}, body: formData,})
        const responseCode = await response.status
        const body = await response.json()
        window.localStorage.setItem('access_token', body.access_token)
        window.localStorage.setItem('token_type', body.token_type)
        console.log(body)
        if (responseCode != 200) {
            alert("Login failed, check username or password")
        } else {
            alert("Logged In!")
        }
    }
    return(
        <div className='h-screen grid grid-rows-4 grid-cols-8 m-auto' id="login">
            <div className="bg-gray-700 row-start-2 col-start-4 col-span-2 row-span-4 flex flex-col text-xl rounded-3xl mb-36">
                <h1 className='text-center text-3xl mt-6'>
                    Login
                </h1>
                <div><CiUser className='text-9xl bg-white text-gray-950 rounded-full mx-auto mt-8  '/></div>
                <form onSubmit={handleSubmit} className='mx-auto mt-10'>
                <div className='flex'>
                    <AiOutlineMail/>
                    <input placeholder='Email ID' id='email' type='email' name='username' required className='bg-transparent ml-6 '></input>
                </div>         
                <div className='bg-white h-px my-3'></div>
                <div className='flex'>
                    <AiFillLock/>
                    <input placeholder='Password' id='Password' type='password' name='password' required className='bg-transparent ml-6'></input>
                </div>
                <div className='bg-white h-px my-3'></div>
                <button className='bg-gray-950 px-10 py-1.5 rounded-md mt-4 '>Login</button>
                
                </form>
                <div className='bg-gray-950 my-3 h-3 w-full'></div>
                <button className='text-3xl text-center text-gray-400 mt-1 cursor-pointer'>
                    <Link href='/Register'>REGISTER</Link> 
                </button>
            </div>
        </div>
    )
}
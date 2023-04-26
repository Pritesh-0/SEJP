import axios from 'axios';
import Link from 'next/link';

import { CiUser } from 'react-icons/ci'
import { useEffect, useState } from 'react';
// axios.get('http://localhost:5000/user')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });




export default function Home() {
    const [token, setToken] = useState("?");
    const [user, setUser] = useState({"name": "Not logged in", "email": ""});
    useEffect(() => {
        async function fetchData() {
            setToken(window.localStorage.token_type + ' ' + window.localStorage.access_token);
            const response = await fetch('http://localhost:5000/user', {headers: {'accept': 'application/json', 'Authorization':  window.localStorage.token_type + ' ' + window.localStorage.access_token}});
            const body = await response.json();
            console.log(body);
            setUser(body);
        }
        fetchData();
    }, [setToken, setUser]);
    return (
        <div>
        <nav className='py-6 px-12 flex justify-between relative'>
                <div className='text-3xl px-9 cursor-pointer'>
                    <Link href='/'>SEJP</Link> 
                </div>
                <div className=''>
                    <ul className='flex items-center text-black text-xl space-x-10 cursor-pointer'>
                        <li className='px-4 text-white'><Link href='/'>Home</Link></li>
                        <li className='px-4 text-white'><Link href='Jobpage'>Jobs</Link></li>
                        <div className='px-3 py-2 bg-white text-black rounded-md cursor-pointer' >
                        <Link href='User'>My account</Link>
                        </div>
                        
                    </ul>   
                </div>
            </nav>
        <div className='grid grid-rows-1'>
            <div className='bg-gray-800 row-start-1 row-span-1 mt-10 mx-10 rounded-3xl flex'>
            <CiUser className='text-white text-9xl border-2 rounded-3xl m-16'/>
            <div className=' mt-28'>
            <h1 className='text-3xl'>
                {user.name}
            </h1>
            <h2>
                {user.email}
            </h2>
            </div>


            </div>

            

            <div className='mx-20'>
                <ul className='mt-10 text-xl'>
                    <div className='bg-gray-700 h-px my-3'></div>
                    <li className='py-2'>My Jobs</li>
                    <div className='bg-gray-700 h-px my-3'></div>
                </ul>
            </div>
        </div>
        </div>
    )
}


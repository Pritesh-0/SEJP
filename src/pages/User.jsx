import axios from 'axios';
import Link from 'next/link';

import { CiUser } from 'react-icons/ci'
import { useEffect } from 'react';
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
    useEffect(() => {
        fetch('http://localhost:5000/user', {headers: {'accept': 'application/json', 'Authorization':  window.localStorage.token_type + ' ' + window.localStorage.access_token}})
        .then(response => {        
          console.log(response);
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
        })
    });
    return (
        <div>
        <nav className='py-6 px-12 flex justify-between relative'>
                <div className='text-3xl px-9 cursor-pointer'>
                    SEJP
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
                Name
            </h1>
            <h2>
                Position
            </h2>
            <h2>
                Location
            </h2>
            </div>


            </div>

            

            <div className='mx-20'>
                <ul className='mt-10 text-xl'>
                    <li className='py-2'>About</li>
                    <div className='bg-gray-700 h-px my-3'></div>
                    <li className='py-2'>My Jobs</li>
                    <div className='bg-gray-700 h-px my-3'></div>
                    <li className='py-2'>Email ID</li>
                    <div className='bg-gray-700 h-px my-3'></div>
                    <li className='py-2'>Portfolio</li>
                    <div className='bg-gray-700 h-px my-3'></div>
                    <li className='py-2'>Education</li>
                    <div className='bg-gray-700 h-px my-3'></div>
                </ul>
            </div>
        </div>
        </div>
    )
}


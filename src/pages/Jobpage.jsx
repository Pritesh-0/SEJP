import { AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link';
import Card from '/src/pages/components/Card.jsx'
import { useState } from 'react';

export default function Home() {
    const handleSearch = async(event) => {
        event.preventDefault()
        const data = {
            // position: event.target.position.value.toString(),
            employer: event.target.company.value.toString(),
            // required_skills: []
        }
        const formData = JSON.stringify(data)
        console.log(formData)
        const response = await fetch("http://localhost:5000/search?matches=10",
        {method: "POST", headers: {"accept": "application/json", "Content-Type": "application/json"}, body: formData})
        const responseCode = await response.status
        const body = await response.json()
        console.log(body);
        setResults(body);
    }
    const [results, setResults]= useState([]);
    return (
        <div className="">
            <nav className='py-12 px-12 flex justify-between relative'>
                <div className='text-3xl px-9 cursor-pointer'>
                    SEJP
                </div>
                <div className=''>
                    <ul className='flex items-center text-black text-xl space-x-10 cursor-pointer'>
                        <div className='px-3 py-2 bg-white text-black rounded-md cursor-pointer' >
                            My account
                        </div>
                    </ul>   
                </div>
            </nav>
            <div className='bg-gray-950'>
            <div className='bg-gray-800 h-px my-3'></div>
                <form className='flex ml-10' onSubmit={handleSearch}>
                <div className='flex'>
                    <AiOutlineSearch className=' text-xl mr-3 mt-1'/>
                    <h1 className='mr-3 mt-1'>Search by:</h1>
                    <input placeholder='Position' id='position' type='text' name='position' className='bg-transparent mx-4'></input>
                    <input placeholder='Skills' id='skills' type='text' name='skills' className='bg-transparent mx-4'></input>
                    <input placeholder='Company' id='company' type='text' name='company' className='bg-transparent mx-4 '></input>
                </div> 
                <button className='bg-black px-10 py-1.5 rounded-md ' on>SEARCH</button>
                
                </form>
                <div className='bg-gray-800 h-px my-3'></div>
            </div>

            {/* <div>
                <ul className='flex text-black ml-44 cursor-pointer'>
                    <li className=' bg-blue-500 mr-4 px-3 py-1'>Skills</li>
                    <li className=' bg-blue-500 mr-4 px-3 py-1'>Company</li>
                </ul>
            </div>
            <div className='bg-gray-800 h-px my-3'></div> */}
            <div className='ml-72'>
                {results.map(function(obj, id) {
                    return <Card imgPath={obj.icon_path} position={obj.position} employer={obj.employer} requiredSkills={obj.required_skills.join() }/>;
                })}
            </div>


        </div>

    )
}

// position
// skills
// company
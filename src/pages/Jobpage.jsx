import { AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link';
import Card from '/src/pages/components/Card.jsx'

export default function Home() {
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
                <form className='flex ml-10'>
                <div className='flex'>
                    <AiOutlineSearch className=' text-xl mr-3 mt-1'/>
                    <h1 className='mr-3 mt-1'>Search by:</h1>
                    <input placeholder='Position' id='position' type='text' name='position' className='bg-transparent mx-4'></input>
                    <input placeholder='Skills' id='skills' type='text' name='skills' className='bg-transparent mx-4'></input>
                    <input placeholder='Company' id='company' type='text' name='company' className='bg-transparent mx-4 '></input>
                </div> 
                <button className='bg-black px-10 py-1.5 rounded-md '>SEARCH</button>
                
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
                <Card/>
            </div>


        </div>

    )
}

// position
// skills
// company
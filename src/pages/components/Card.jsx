import { SlLocationPin } from 'react-icons/sl'
import { AiOutlinePlayCircle, AiFillStar, AiOutlineFieldTime, AiOutlineCheckCircle } from 'react-icons/ai'
import { IoMdThumbsUp } from 'react-icons/io'
import { TiTick } from 'react-icons/ti'
import Image from 'next/image'
// import google from '/public/meta.png'

export default function Home({ imgPath, position, employer, requiredSkills }) {
    return (
        <div className='flex relative bg-gray-950 mx-10 my-10 rounded-xl text-white'>
            <div className='flex px-5 py-5 ml-5 mt-5'>
                <Image src={imgPath} width={24} height={16} className='h-16 w-24' />
            </div>
            <div className='grow px-5 py-5'>
                <div className=''>
                    <h1 className='text-3xl'>
                        {employer}
                    </h1>
                    <h2 className='text-2xl py-5'>
                        {position}
                    </h2>
                </div>
                <div className='flex text-2xl'>
                    <div className='flex'>
                        <SlLocationPin className='text-2xl' />
                        <h2 className='px-4'>
                            London, GB
                        </h2>
                    </div>
                    <div className='flex ml-10'>
                        <AiOutlineFieldTime className='text-2xl' />
                        <h2 className='px-4'>
                            Full-Time
                        </h2>
                    </div>
                </div>
                <div className='flex text-2xl py-8'>
                    <div className='flex justify-center bg-red-200 text-red-700 rounded-full px-3 py-2.5'>
                        <TiTick className='rounded-full text-3xl text-white bg-red-500'/>
                        <h2 className='px-4'>
                            Actively Hiring
                        </h2>
                    </div>
                    <div className='flex justify-center bg-green-200 text-green-700 rounded-full ml-10 px-3 py-2.5'>
                        <IoMdThumbsUp className='rounded-full text-3xl text-white bg-green-700'/>
                        <h2 className='px-4'>
                            Highly Rated
                        </h2>
                    </div>
                </div>
                <div className='flex flex-wrap border-4 border-gray-900 rounded-xl'>
                    <div className='flex text-xl mr-9 py-3 px-9'>
                        <AiOutlineCheckCircle className='text-green-500 text-2xl'/>
                        <h2 className='px-3'>
                            4-5 Years Experience
                        </h2>
                    </div>
                    <div className='flex text-xl mr-9 py-3 px-9'>
                        <AiOutlineCheckCircle className='text-green-500 text-2xl'/>
                        <h2 className='px-3'>
                            User Experience(UX)
                        </h2>
                    </div>
                    <div className='flex text-xl mr-9 py-3 px-9'>
                        <AiOutlineCheckCircle className='text-green-500 text-2xl'/>
                        <h2 className='px-3'>
                            Full Stack
                        </h2>
                    </div>
                    <div className='flex text-xl mr-9 py-3 px-9'>
                        <AiOutlineCheckCircle className='text-green-500 text-2xl'/>
                        <h2 className='px-3'>
                            HTML
                        </h2>
                    </div>
                    <div className='flex text-xl mr-9 py-3 px-9'>
                        <AiOutlineCheckCircle className='text-green-500 text-2xl'/>
                        <h2 className='px-3'>
                            CSS
                        </h2>
                    </div>
                </div>
            </div>

            

            <div className='flex flex-col text-black py-5 text-l'>
                <div className='flex bg-green-600 rounded-md mt-7 py-2.5 px-4 mr-9'>
                    <AiOutlinePlayCircle className='text-3xl' />
                    <h2 className='px-8 cursor-pointer'>
                        Apply Now
                    </h2>
                </div>

                <div className='flex bg-green-600 rounded-md mt-7 py-2.5 mr-9'>
                    <AiFillStar className='text-3xl' />
                    <h2 className='px-5 cursor-pointer'>
                        Save Job
                    </h2>
                </div>
            </div>

        </div>
    )
}
import { SlLocationPin } from 'react-icons/sl'
import { CiTimer } from 'react-icons/ci'
import {AiOutlinePlayCircle,AiFillStar} from 'react-icons/ai'

export default function Home(){
    return(
        <div className='grid grid-cols-9 grid-rows-3 relative bg-gray-950 mx-10 my-10 rounded-xl'>
            <div className='row-start-1'>
                Logo
            </div>
            <div className='col-start-2'>
                <h1>
                    Google
                </h1>
                <h2>
                    UX/UI designer, Google Pay
                </h2>
            </div>
            <div className='row-start-2 col-start-2 col-span-3'>
                <div className='flex'>
                <SlLocationPin />
                <h2>
                    London, GB
                </h2>
                {/* </div>
                <div> */}
                <CiTimer />
                <h2>
                    Full-Time
                </h2>
                </div>
            </div>
            <div className='flex flex-col col-start-5 text-black '>
                <div className='flex bg-green-600 rounded-md py-2 m-2'>
                <AiOutlinePlayCircle/>
                <h2>
                    Apply Now
                </h2>
                </div>

                <div className='flex bg-green-600 rounded-md py-2 m-2'>
                <AiFillStar/>
                <h2>
                    Save Job
                </h2>
                </div>
            </div>
        </div>
    )
}
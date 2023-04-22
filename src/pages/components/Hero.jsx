import Link from 'next/link';


export default function Home(){
    return(
        <div className='flex flex-col items-center justify-center relative text-center text-black mt-4 mx-auto' >
          <div className='text-4xl py-12 text-left'>
            <h1 >
              SOFTWARE ENGINEERING
            </h1>

            <h1>JOB PLATFORM</h1>
            <h2 className='text-2xl'>
              Invest in Yourself
            </h2>
          </div>
          <div className='px-4 py-2 bg-white rounded-md text-xl cursor-pointer'>
          <Link href='#about'>Learn More</Link>
            
          </div>
        </div>

    )
}
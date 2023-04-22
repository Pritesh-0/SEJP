import Link from "next/link";

export default function Home(){
    return(
        <div className='h-screen' id="about">
            <div className="bg-[#d9d9d9] mx-20">
                <div className="py-40">
                <div className="text-3xl text-black text-center">
                    Limitless Learning and More Possibilties
                </div>
                <div className="w-32 py-2 rounded-md mt-5 mx-auto bg-white text-black text-center cursor-pointer">
                    <Link href="Register">Get started</Link> 
                </div>
                </div>
            </div>
            
            <div className=" mx-20 flex justify-between px-16 mt-28 text-2xl text-center">
                <div>
                    1000+ <br></br>Job Openings
                </div>
                <div>
                    500+ <br></br>Applicants
                </div>
                <div>
                    800+ <br></br>Users
                </div>
                <div>
                    100+ <br></br>Articles
                </div>
            </div>
        </div>
        
    )
}
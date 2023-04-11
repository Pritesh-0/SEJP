import Card from '/src/pages/components/Card.jsx'
export default function Home(){
    return(
        <div className='grid grid-rows-3 grid-cols-4 grid-flow-col h-screen'>
        <div className='col-start-2 col-span-3 row-span-3 bg-gray-900 mx-32 my-20 rounded-3xl'>
        <Card/>
        </div>
      </div>
    )
}
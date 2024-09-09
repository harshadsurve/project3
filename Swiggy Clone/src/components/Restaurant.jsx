import { useEffect, useState } from 'react';
import Info from './Info';
export default function Restaurant() {
    const [data ,setData]=useState([]);
  const TopRestaurant = async()=>{
   const response = await fetch('http://localhost:5000/restaurant');
   const apidata = await response.json();
   setData(apidata);
  }
  useEffect(()=>{
    TopRestaurant()
  },[])
  return (
    <div className='max-w-[1200px] mx-auto m-4'>
    <div className='flex items-center justify-between'>
     <div className='text-[25px] font-bold'>Restaurant Chains in Pune </div>
    </div>
    <div className='grid grid-cols-4 gap-3'>
         {
             data.map((item, index) => {
                 return (
                     <Info {...item} key={index}/>
                 )
             })
         }
     </div>
    </div>
  )
}

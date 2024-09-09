import { useEffect, useState } from 'react';
import Info from './Info';
export default function Localeties() {
  const [data ,setData]=useState([]);
  const TopRestaurantlocaleties = async()=>{
   const response = await fetch('http://localhost:5000/localities-in-city');
   const apidata = await response.json();
   setData(apidata);
  }
  useEffect(()=>{
    TopRestaurantlocaleties()
  },[])
  return (
    <div className='max-w-[1200px] mx-auto m-4'>
       <div className='flex items-center justify-between'>
        <div className='text-[25px] font-bold'>Explore localities in and around Pune </div>
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

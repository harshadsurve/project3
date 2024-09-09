import React, { useEffect, useState } from 'react';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
import Card from './Card';

export default function TopRest() {
const [slide,setSlide] = useState(0);
const [data ,setData]=useState([]);
const fetchTopRestaurant = async()=>{
 const response = await fetch('http://localhost:5000/top-restaurant-chains');
 const apidata = await response.json();
 setData(apidata);
}
useEffect(()=>{
  fetchTopRestaurant()
},[])
const nextSlide= ()=>{
  if(data.length -9 == slide) return false
  setSlide(slide + 1)
}
const prevSlide = ()=>{
  if(slide == 0) return false
  setSlide(slide-1) 
}
  return (
    
 <div className='max-w-[1200px] mx-auto overflow-hidden'>
   <div className='flex items-center justify-between'>
    <div className='text-[25px] font-bold'>Top restaurant in Pune</div>
    <div className='flex'>
     <div className=' flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={prevSlide}><FaArrowLeft /></div>
     <div className=' flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={nextSlide}><FaArrowRight /></div>
     </div>
   </div>
  <div className=' overflow-hidden'>
   <div style={{
        transform: `translateX(-${slide*100}%)`
       }} className='flex gap-7'>
    {
        data.map((d,i)=>(
            <Card {...d} key={i}/>
        ))
    }
    </div>
    </div>
    <hr className='my-4 border-[2px]' />
   </div>
  )
}

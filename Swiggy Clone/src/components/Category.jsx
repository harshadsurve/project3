import React, { useEffect, useState } from 'react';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";

function Category() {
  const [slide,setSlide] = useState(0);
    const[category,setCategory]=useState([]);
const fetchCategory = async ()=>{
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    console.log(data);
    setCategory(data)
}
useEffect(()=>{
    fetchCategory();
},[])
const nextSlide= ()=>{
  if(category.length -8 == slide) return false
  setSlide(slide + 2)
}
const prevSlide = ()=>{
  if(slide == 0) return false
  setSlide(slide-2) 
}
  return (
 <div className='max-w-[1200px] mx-auto'>
   <div className='flex items-center justify-between'>
    <div className='text-[25px] font-bold'>What's on your mind?</div>
    <div className='flex'>
     <div className=' flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={prevSlide}><FaArrowLeft /></div>
     <div className=' flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={nextSlide}><FaArrowRight /></div>
     </div>
   </div>
   <div className='flex overflow-hidden'>
    {
      category.map((cat,index)=>{
       return (
       <div style={{
        transform: `translateX(-${slide*100}%)`
       }}
        key={index} className='w-[150px] shrink-0 duration-500'>
          <img src={"http://localhost:5000/images/" + cat.image} alt="" />
        </div>
        )
       })
    }
   </div>
   <hr className='my-4 border-[2px]' />
   </div>
  )
}

export default Category
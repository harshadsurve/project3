import { useEffect, useState } from 'react';
import Card from './Card';
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineFiberNew } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";


export default function OnlineDelivery() {
    const [data ,setData]=useState([]);
    const fetchTopRestaurant = async()=>{
     const response = await fetch('http://localhost:5000/top-restaurant-chains');
     const apidata = await response.json();
     setData(apidata);
    }
    useEffect(()=>{
      fetchTopRestaurant()
    },[])
    const list=[
      {
        name:"Filter ",
        logo:<FaArrowDownWideShort />,
      },
      {
        name:"Sort By",
        logo:<IoIosArrowDown />
      },
      {
        name:"Fast Delivery",
        logo:<FaShippingFast />

      },
      {
        name:"New on Swiggy",
        logo:<MdOutlineFiberNew />
      },
      {
        name:"Ratings 4.0+",
      },
      {
        name:"Pure Veg",
      },
      {
        name:"Offers",
        logo:<MdOutlineLocalOffer />
      },
    ]

      return (
     <div className='max-w-[1200px] mx-auto '>
       <div className='flex items-center justify-between'>
        <div className='text-[25px] font-bold'>Restaurants with online food delivery in Pune </div>
       </div>
       <div className='max-w[1200px] mx-auto flex gap-2 '>
         {
          list.map((item,index)=>{
              return(
                <div key={index} className=' bg-slate-400  list-none rounded-xl p-1 items-center m-2'>
                 <li className='flex gap-2'>
                  {item.name}
                  {item.logo}
                 </li>
                </div>
              )
          })
         }
       </div>
        <div className='grid grid-cols-4 gap-3'>
            {
                data.map((item, index) => {
                    return (
                        <Card {...item} key={index}/>
                    )
                })
            }
        </div>
       </div>
      )
    }

    
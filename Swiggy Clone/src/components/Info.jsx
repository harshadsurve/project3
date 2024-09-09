import React from 'react'

export default function Info({ place,name}) {
  return (
    <div className='w-[250px] shrink-0 grow m-1 '>
        <div className='border font-semibold text-center p-4 rounded-2xl'>   
                 <h1>{place}</h1>
                 <h1>{name}</h1>
        </div>
    </div>
  )
}

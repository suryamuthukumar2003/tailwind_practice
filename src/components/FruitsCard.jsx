import React from 'react'

function FruitsCard({fruits}) {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg transform group hover:scale-110 duration-100 relative'>
        <img className='w-full h-52 object-cover' src={fruits.image} alt={`${fruits.image}`} />
        <div className='flex flex-col items-center my-2 space-y-1'>
            <span className='font-body text-slate-500 block'>{fruits.name}</span>
            <span className='font-body text-slate-500'>₹{fruits.price}</span>
            <span className='text-lime-400 uppercase text-xs invisible group-hover:visible '>Add to cart</span>
        </div>
        <span className='bg-sky-300 border border-sky-300 text-white text-sm rounded-md px-1 absolute top-3 right-3'>1% off</span>
    </div>
  )
}

export default FruitsCard
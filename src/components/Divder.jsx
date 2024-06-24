import React from 'react'

function Divder({title}) {
  return (
    <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
            <div className='border border-slate-500 w-9/12 mx-auto'></div>
        </div>
        <div className='flex justify-center relative'>
            <div className='font-display text-slate-600 bg-white px-4 text-4xl'>{title}</div>
        </div>
    </div>
  )
}

export default Divder
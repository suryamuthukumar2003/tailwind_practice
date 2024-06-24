import React, { useState } from 'react'

function Filter() {
    const[selectedItem,setSelectedItem]=useState(1);
  return (
    <section className='my-10 py-3 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around'>
        <button className={`btnStyle ${selectedItem===1 ? 'bg-green-500 text-white':'text-slate-500'}`} onClick={()=>setSelectedItem(1)}>Latest</button>
        <button className={`btnStyle ${selectedItem===2 ? 'bg-green-500 text-white':'text-slate-500'}`} onClick={()=>setSelectedItem(2)}>Best Seller</button>
        <button className={`btnStyle ${selectedItem===3 ? 'bg-green-500 text-white':'text-slate-500'}`} onClick={()=>setSelectedItem(3)}>Special</button>

    </section>
  )
}

export default Filter
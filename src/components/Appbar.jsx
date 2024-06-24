import {useState} from 'react'

function Appbar() {
    const [open, setOpen] = useState(false);
    const[selectedOption,setSelectedOption]=useState(0);
    const menuClicked=()=>{
        setOpen((curr)=>!curr);
    }
  return (
    <nav className='mt-5'>
        <div className='md:flex justify-between  w-5/6 md:max-w-7xl mx-auto'>
            <div className='flex justify-between mb-4 '>

            
        <div>
            <span className="text-green-500 text-4xl font-bold">Fruit</span>
            <span className="text-slate-500 text-3xl font-light">Shop</span>
        </div>
        <div className='md:hidden'>
            <button onClick={menuClicked}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
</div>
        </div>
        <div className={`flex justify-center md:justify-end ${open ? "block": "hidden"} md:block`}>
            <ul className='w-full md:flex md:space-x-8 space-y-8 md:space-y-0'>
                <li className={`menu ${selectedOption===1 ?'border-b-4':''}`}>
                    <a className='font-body' href='#' onClick={()=>setSelectedOption(1)}>Fruits</a>
                </li>
                <li className={`menu ${selectedOption===2 ?'border-b-4':''}`}>
                    <a className='font-body' href="#" onClick={()=>setSelectedOption(2)}>Vegetables</a>
                </li>
                <li className={`menu ${selectedOption===3 ?'border-b-4':''}`}>
                    <a className='font-body' href='#' onClick={()=>setSelectedOption(3)}>More</a>
                </li>
                <li className='px-4 py-2 text-green-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Appbar;
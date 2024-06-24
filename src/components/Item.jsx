import React, { useState } from 'react'
import FruitsCard from './FruitsCard';

function Item() {
    const[fruits,setFruits]=useState([
        {
          id: 1,
          image: '../public/assets/1.jpeg',
          name: 'Green Grapes',
          price: 100
        },
        {
          id: 2,
          image: '../public/assets/2.jpeg',
          name: 'Pomegranate',
          price: 200
        },
        {
          id: 3,
          image: '../public/assets/3.jpeg',
          name: 'Black Grapes',
          price: 250
        },
        {
          id: 4,
          image: '../public/assets/4.jpeg',
          name: 'Grape Fruit',
          price: 300
        },
        {
          id: 5,
          image: '../public/assets/5.jpeg',
          name: 'Berry',
          price: 250
        },
        {
          id: 6,
          image: '../public/assets/6.jpeg',
          name: 'lemon',
          price: 150
        }
      ])
  return (
    <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
        {fruits.map((data)=>{
            return <FruitsCard key={data.id} fruits={data}/>
        })}
    </section>
  )
}

export default Item;
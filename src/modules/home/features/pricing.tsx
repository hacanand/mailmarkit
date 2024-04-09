'use client'
import React,{useState} from 'react'

const Pricing = () => {
    const [active, setActive] = useState('monthly')
  return (
      <div className='w-full bg-[#fec8eb]'>
          <div className='w-[95%] m-auto py-5 '>
              <div className='w-full md:flex justify-between'>
                  <div>
                      <h3 className='font-classDisplay text-center lg:text-left'></h3>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Pricing
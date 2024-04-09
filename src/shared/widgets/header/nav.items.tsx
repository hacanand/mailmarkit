import { navItems } from '../../../app/configs/constants'
import Link from 'next/link'
import React from 'react'

const NavItems = () => {
  return (
      <div className='w-full hidden md:flex items-center'>
          {navItems.map((item, index:number) => (
              <Link key={index} href={item.title}
                  className=' px-5 font-bold text-lg'>{item.title}
              </Link>
          ))}
          
    </div>
  )
}

export default NavItems
import { navItems } from '@/app/configs/constants'
import Link from 'next/link'

const NavItems = () => {
  return (
      <div className='w-full hidden md:flex items-center'>
          {navItems.map((item, index:number) => (
              <Link key={index} href= '/'
                  className=' px-5 font-bold text-lg'>{item.title}
              </Link>
          ))}    
    </div>
  )
}

export default NavItems
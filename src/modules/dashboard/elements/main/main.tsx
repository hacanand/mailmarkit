'use client'
import { useUser } from '@clerk/nextjs'


const Main = () => {
    const {user}=useUser()
  return (
      <div className='p-5 w-full h-screen bg-[#f9fafb]'>
          <h1 className='text-2xl text-surface-900 font-medium'>
              Hi {user?.firstName}👋
      </h1>
      <p className='opacity-[.7] text-sm'>
        Here&apos;s how your publication is doing
      </p>
      <div className='w-full flex'>

      </div>
    </div>
  )
}

export default Main
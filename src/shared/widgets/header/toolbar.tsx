'use client';
import { Button, Link } from '@nextui-org/react';
import React from 'react'

const toolbar = () => {
    return (
      <>
            <Button color='primary' className='text-lg font-bold'>
            Start Trial
            </Button>
            <Link href={'/sign-up'}>Login
            </Link>
      </>
    
  )
}

export default toolbar
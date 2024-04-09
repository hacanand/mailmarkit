'use client';
import { Button, Link } from '@nextui-org/react';
import React from 'react'

const toolbar = () => {
    return (
      <>
        <Button color="primary" className="text-lg font-semibold">
          Start Trial
        </Button>
        <Link href={"/sign-up"} className="text-lg font-semibold border-2 p-1 px-2 border-blue-600 rounded-xl hover:bg-blue-100">
          Login
        </Link>
      </>
    );
}

export default toolbar
"use client";

import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const page = () => {

    const { data: session } = useSession();
  return (
    <div>
        <h2>Profile Name: {session?.user.name}</h2>
    </div>
  )
}

export default page
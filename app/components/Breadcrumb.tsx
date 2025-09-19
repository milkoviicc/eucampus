'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Breadcrumb = () => {
  const path = usePathname()

  let splitPath = path.slice(1).replaceAll('-', ' ')

  if (splitPath === 'faqs y consejos') {
    splitPath = 'Frequently asked questions (FAQ)'
  }
  return (
    <div
      className="w-full h-[150px] bg-bottom bg-no-repeat"
      style={{
        backgroundImage:
          'url(https://marianos98.sg-host.com/wp-content/uploads/2025/05/bg-title-int.jpg)',
      }}
    >
      <div className="max-w-[1300px] h-full mx-auto flex flex-col justify-center gap-2 text-white">
        <div className="flex gap-2 uppercase text-xs">
          <Link href="/">Home</Link>
          <p> / {splitPath} </p>
        </div>
        <h3 className="capitalize text-4xl font-semibold">{splitPath}</h3>
      </div>
    </div>
  )
}

export default Breadcrumb

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
        backgroundImage: 'url(https://eucampus.com/wp-content/uploads/2025/05/bg-title-int.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full px-4 lg:max-w-[1300px] lg:px-0 2xl:max-w-[1600px] h-full mx-auto flex flex-col justify-center gap-2 text-[rgba(255,255,255,0.8)]">
        <div className="flex gap-2 uppercase text-xs">
          <Link href="/">Home</Link>
          <p>/</p>
          <p>{splitPath}</p>
        </div>
        <h3 className="capitalize text-2xl lg:text-4xl font-semibold text-white">
          {splitPath.endsWith('la ue')
            ? splitPath.slice(0, -2) + 'UE'
            : splitPath.endsWith('ad5')
              ? splitPath.slice(0, -3) + 'AD5'
              : splitPath.endsWith('ast3')
                ? splitPath.slice(0, -4) + '(AST3)'
                : splitPath.endsWith('razonamiento')
                  ? splitPath.slice(0, -14) + ': Razonamiento'
                  : splitPath.endsWith('conocimientos ue')
                    ? splitPath.slice(0, -17) + ': Conocimientos UE'
                    : splitPath.endsWith('digitales')
                      ? splitPath.slice(0, -23) + ': Competencias Digitales'
                      : splitPath}
        </h3>
      </div>
    </div>
  )
}

export default Breadcrumb

'use client'

import React, {
  useEffect,
  useRef,
  ReactNode,
  cloneElement,
  SVGProps,
  ReactElement,
  RefObject,
  isValidElement,
} from 'react'

type AnimatedHeadingProps = {
  firstText: ReactNode
  secondText: ReactNode
  underlineOn?: 'first' | 'second'
  svg: ReactNode
  className?: string // ✅ allow custom className
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  firstText,
  secondText,
  underlineOn = 'second',
  svg,
  className = '', // ✅ default to empty string
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          } else {
            entry.target.classList.remove('animate')
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(svgRef.current)
    return () => observer.disconnect()
  }, [])

  // Clone the passed SVG so we can inject ref + svg-animated class
  const svgWithRef =
    isValidElement<SVGProps<SVGSVGElement>>(svg) &&
    cloneElement(svg, {
      ref: svgRef as RefObject<SVGSVGElement>,
      className: `${svg.props.className ?? ''} svg-animated`,
    })

  return (
    <div
      className={`flex flex-col flex-wrap sm:flex-row gap-2 w-full justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center pb-8 ${className}`}
    >
      {underlineOn === 'first' ? (
        <>
          <div className="relative inline-block w-fit mx-auto sm:mx-0">
            <h2 className="text-accent w-fit">{firstText}</h2>
            {svgWithRef}
          </div>
          <h2 className="mt-2 sm:mt-0">{secondText}</h2>
        </>
      ) : (
        <>
          <h2>{firstText}</h2>
          <div className="relative inline-block w-fit mx-auto sm:mx-0">
            <h2 className="text-accent w-fit">{secondText}</h2>
            {svgWithRef}
          </div>
        </>
      )}
    </div>
  )
}

export default AnimatedHeading

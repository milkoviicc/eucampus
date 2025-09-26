'use client'

import React, {
  useEffect,
  useRef,
  ReactNode,
  cloneElement,
  SVGProps,
  ReactElement,
  RefObject,
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
    svg &&
    cloneElement(svg as ReactElement<SVGProps<SVGSVGElement>>, {
      ref: svgRef as RefObject<SVGSVGElement>,
      className: `${
        (svg as ReactElement<SVGProps<SVGSVGElement>>).props.className || ''
      } svg-animated`,
    })

  return (
    <div
      className={`flex flex-wrap gap-2 w-full justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center pb-8 ${className}`}
    >
      {underlineOn === 'first' ? (
        <>
          <div className="relative inline-block">
            <h2 className="text-accent">{firstText}</h2>
            {svgWithRef}
          </div>
          <h2>{secondText}</h2>
        </>
      ) : (
        <>
          <h2>{firstText}</h2>
          <div className="relative inline-block">
            <h2 className="text-accent">{secondText}</h2>
            {svgWithRef}
          </div>
        </>
      )}
    </div>
  )
}

export default AnimatedHeading

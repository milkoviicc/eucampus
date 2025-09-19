'use client'
import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import StackingCards from '../components/StackingCards'
import Stack from '../components/Stack'

const Faqs = () => {
  const svgRef1 = useRef<SVGSVGElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleTips = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  useEffect(() => {
    // Function to set up observer for a single SVG
    const setupObserver = (node: SVGSVGElement) => {
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

      observer.observe(node)
      return observer
    }

    // Set up observers for both SVGs
    const observers: IntersectionObserver[] = []

    if (svgRef1.current) {
      observers.push(setupObserver(svgRef1.current))
    }

    // Cleanup function
    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const tips = [
    {
      shortDesc: 'Crea tu cuenta en EPSO cuanto antes',
      longDesc:
        'Aunque no vayas a presentarte de inmediato, registrarte te permite explorar convocatorias, practicar con la interfaz y recibir alertas personalizadas.',
    },
    {
      shortDesc: 'Elige bien tus lenguas de trabajo',
      longDesc:
        'Para la mayoría de procesos, necesitarás dominar al menos dos lenguas oficiales de la UE. Asegúrate de que tu segunda lengua (normalmente inglés o francés) está suficientemente consolidada, ya que será la que usarás en las pruebas.',
    },
    {
      shortDesc: 'Lee bien la convocatoria',
      longDesc:
        'Cada proceso tiene detalles clave: plazos, estructura de pruebas, requisitos de idioma o documentación. Léelo todo con calma y tómate tu tiempo para rellenar la solicitud. No se puede modificar una vez enviada.',
    },
    {
      shortDesc: 'Prepara tus pruebas con antelación',
      longDesc:
        'No esperes a que salga la fecha para empezar a estudiar. Las pruebas de razonamiento requieren práctica, y la redacción escrita (en convocatorias como AD5) necesita estructura y claridad. En EU Campus te ayudamos con materiales y simulacros adaptados a cada fase.',
    },
    {
      shortDesc: 'Adapta tu CV al formato europeo',
      longDesc:
        'Aunque EPSO no siempre lo exige, muchas instituciones lo utilizan como referencia. Puedes hacerlo fácilmente con la herramienta Europass: https://europa.eu/europass',
    },
    {
      shortDesc: 'Organiza tu estudio por bloques y tiempos cortos',
      longDesc:
        'Las oposiciones europeas no requieren memorizar cientos de temas, pero sí constancia. Dedicar 30-60 minutos al día con buena planificación puede ser más eficaz que sesiones largas e irregulares.',
    },
    {
      shortDesc: 'Consulta fuentes fiables (y evita los foros confusos)',
      longDesc:
        'Hay mucha información en internet, pero no toda es clara o actualizada. En EU Campus te lo contamos con claridad y enfoque práctico, para que sepas por dónde empezar y qué esperar.',
    },
  ]

  return (
    <div>
      <Breadcrumb />
      <div className="max-w-[1300px] mx-auto flex flex-col -20">
        <div className="flex gap-2 w-full justify-center text-5xl leading-[1.2] font-semibold">
          <div className="relative">
            <h2 className="text-accent">Consejos prácticos</h2>
            <svg
              ref={svgRef1}
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 -bottom-5 w-full svg-animated"
              viewBox="0 0 500 150"
              stroke="#00A694"
              strokeWidth={5}
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"></path>
            </svg>
          </div>
          <h2>para los candidatos</h2>
        </div>
        <Stack />
        <div className="flex flex-col gap-4 mt-20">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-[#22405817] py-[20px] px-[10px] border-[#d5d8dc] border-1 cursor-pointer"
              onClick={() => toggleTips(idx)}
            >
              <p
                className={`flex gap-2 font-semibold items-center ${openIndex === idx ? 'text-accent' : 'text-primary'}`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[12px] transition-transform duration-300"
                  style={{
                    transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                </svg>
                {tip.shortDesc}
              </p>

              {openIndex === idx && <p className="mt-4 text-sm text-[#7A7A7A]">{tip.longDesc}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs

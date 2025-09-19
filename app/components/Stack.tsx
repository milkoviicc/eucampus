import { Plus } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Stack = () => {
  const [currentActiveCard, setCurrentActiveCard] = useState(0)

  const tips = [
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

  const sectionRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current || !wrapperRef.current) return

    const section = sectionRef.current
    const itemElements = itemRefs.current.filter(Boolean)

    // Initial states
    itemElements.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { yPercent: 100 })
      }
    })

    // Create timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: 'top top',
        end: () => `+=${itemElements.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Calculate which card should be active based on progress
          const progress = self.progress
          const activeIndex = Math.min(
            Math.floor(progress * itemElements.length),
            itemElements.length - 1,
          )
          setCurrentActiveCard(activeIndex)
        },
        // markers: true, // Uncomment for debugging
      },
      defaults: { ease: 'none' },
    })

    // Animate items
    itemElements.forEach((item, index) => {
      timeline.to(item, {
        scale: 0.9,
        borderRadius: '10px',
      })

      // Animate tip-description to open when card comes into view
      const description = item.querySelector('.tip-description')
      if (description) {
        timeline.fromTo(
          description,
          {
            maxHeight: 0,
          },
          {
            maxHeight: '500px',
            duration: 0.6,
          },
          '<',
        )
      }

      // Animate the purple line
      const beforeElement = item.querySelector('.tip-card')
      if (beforeElement) {
        timeline.fromTo(
          beforeElement,
          {
            '--line-scale': 0,
          },
          {
            '--line-scale': 1,
            duration: 0.5,
          },
          '<',
        )
      }

      if (itemElements[index + 1]) {
        timeline.to(
          itemElements[index + 1],
          {
            yPercent: 0,
          },
          '<',
        )
      }
    })

    // Cleanup
    return () => {
      timeline.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="w-full">
      <div className="scroll-section vertical-section section pt-20 w-full" ref={sectionRef}>
        <div className="wrapper" ref={wrapperRef}>
          <div className="list">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="item bg-white"
                ref={(el) => {
                  if (el) itemRefs.current[idx] = el
                }}
              >
                <div
                  className={`tip-card w-[90vw] max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden relative
                    ${currentActiveCard === idx ? 'active' : ''}
                    ${currentActiveCard > idx ? 'stacked' : ''}
                  `}
                  id={`tip-card-${idx}`}
                >
                  <div className="flex items-center gap-4 mb-5 relative z-10 cursor-pointer p-10">
                    <Plus className="plus-icon w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">{tip.shortDesc}</h2>
                  </div>

                  <div className="tip-description px-10 pb-10">
                    <p className="text-[#7A7A7A] leading-relaxed">{tip.longDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack

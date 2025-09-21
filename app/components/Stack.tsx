import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Plus } from 'lucide-react'
import React, { useRef, useEffect, useState, useMemo } from 'react'

const Stack = () => {
  const navbarOffset = 125 // height of navbar

  const tips = useMemo(
    () => [
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
    ],
    [],
  )

  const tipRefs = useRef<HTMLDivElement[]>([])
  const [expanded, setExpanded] = useState<boolean[]>(tips.map((_, i) => i === 0)) // first card open
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // Expand/collapse based on activeIndex
  useEffect(() => {
    setExpanded(tips.map((_, i) => i === activeIndex))
  }, [activeIndex, tips])

  // Index-based smooth scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isScrolling) return

      let nextIndex = activeIndex

      if (e.deltaY > 0 && activeIndex < tips.length - 1) {
        // scroll down
        nextIndex = activeIndex + 1
      } else if (e.deltaY < 0) {
        // scroll up
        if (activeIndex > 0) {
          nextIndex = activeIndex - 1
        } else {
          // first card scroll up → go to top of page
          window.scrollTo({ top: 0, behavior: 'smooth' })
          return
        }
      }

      if (nextIndex !== activeIndex) {
        setActiveIndex(nextIndex)
        const target = tipRefs.current[nextIndex]
        if (target) {
          window.scrollTo({
            top: target.offsetTop - navbarOffset,
            behavior: 'smooth',
          })
        }
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 500)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [activeIndex, isScrolling, tips.length])

  return (
    <div className="flex flex-col gap-[20px] mt-20 px-6">
      {tips.map((tip, idx) => (
        <div
          key={idx}
          ref={(el) => {
            if (el) tipRefs.current[idx] = el
          }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden relative"
        >
          <div className="tip-card relative p-6">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faPlus}
                className={`text-2xl text-primary  ${expanded[idx] ? '!hidden' : 'block'}`}
              />
              <FontAwesomeIcon
                icon={faMinus}
                className={`text-2xl text-accent hidden ${expanded[idx] ? 'block' : '!hidden'}`}
              />
              <h2
                className={`text-2xl font-bold transition-colors duration-300 ${
                  expanded[idx] ? 'text-accent' : 'text-primary'
                }`}
              >
                {tip.shortDesc}
              </h2>
            </div>

            <div
              className={`tip-description mt-4 text-[#7A7A7A] leading-relaxed transition-all duration-500 overflow-hidden`}
              style={{ maxHeight: expanded[idx] ? '500px' : '0px' }}
            >
              {tip.longDesc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stack

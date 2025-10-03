'use client'
import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

const Stack = () => {
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

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleTip = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="flex flex-col gap-[20px] mt-10 px-6">
      {tips.map((tip, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden relative cursor-pointer"
          onClick={() => toggleTip(idx)}
        >
          <div className="tip-card relative p-6">
            <div className="flex items-center gap-4">
              <svg
                aria-hidden="true"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                fill={openIndex === idx ? '#00a694' : '#224058'}
                className="w-[12px] transition-transform duration-300"
                style={{
                  transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>

              <h2
                className={`text-2xl font-bold transition-colors duration-300 ${
                  openIndex === idx ? 'text-accent' : 'text-primary'
                }`}
              >
                {tip.shortDesc}
              </h2>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === idx ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pb-2">{tip.longDesc}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Stack

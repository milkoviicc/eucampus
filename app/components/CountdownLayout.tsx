'use client'
import React, { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'

// CountdownSection.tsx
// Accepts target prop as string | Date | number (unix ms). Re-runs when target changes.

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const card: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const CountdownLayout = ({
  target = '2025-10-01T00:00:00',
  heading,
  date,
}: {
  target?: string | Date | number
  heading: string
  date: string
}) => {
  // normalize target to a timestamp (ms)
  const toTimestamp = (t?: string | Date | number) => {
    if (!t) return Date.now()

    // Number: accept ms, but detect seconds (typical length 10 digits)
    if (typeof t === 'number') {
      // if t looks like seconds (<= 1e11) convert to ms
      if (t < 1e11) return t * 1000
      return t
    }

    // Date object
    if (t instanceof Date) return t.getTime()

    // String: try parsing normally first
    const parsed = Date.parse(t)
    if (!Number.isNaN(parsed)) return parsed

    // If string is only digits, treat as unix seconds or ms
    const digits = t.trim()
    if (/^\d+$/.test(digits)) {
      const n = Number(digits)
      if (n < 1e11) return n * 1000 // seconds -> ms
      return n // already ms
    }

    // Last resort: try `new Date(t).getTime()`
    const alt = new Date(t).getTime()
    if (!Number.isNaN(alt)) return alt

    // fallback to now (avoid NaN)
    return Date.now()
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetTs = toTimestamp(target)
    console.log('target (raw):', target, '-> targetTs:', targetTs, 'now:', Date.now())

    function update() {
      const now = Date.now()
      const diff = Math.max(0, targetTs - now)

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [target]) // re-run when `target` changes

  const features = [
    {
      title: 'Razonamiento:',
      text: '(verbal, numérico y abstracto): entrenamiento tipo test con explicación de patrones y errores frecuentes para ganar agilidad y precisión.',
    },
    {
      title: 'Conocimientos de la UE:',
      text: 'instituciones, proceso legislativo y competencias, con apuntes y esquemas para repasar rápido lo esencial.',
    },
    {
      title: 'Prueba escrita:',
      text: 'redacción y síntesis guiada con rúbrica clara, ejemplos comentados y pasos prácticos para estructurar respuestas con criterio.',
    },
    {
      title: 'Prueba específica de secretaría:',
      text: 'organización de agenda y correo, correspondencia formal, formatos y maquetación (Word/LibreOffice), nociones de hoja de cálculo (tablas y filtros) y archivo de documentos.',
    },
  ]

  return (
    <section className="w-full lg:max-w-[1300px] 2xl:max-w-[1600px] mx-auto px-4 lg:px-0 py-20">
      <motion.header
        className="text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">{heading}</h2>
        <p className="text-xl font-semibold text-slate-700 mt-2">Apertura: {date}</p>
        <p className="text-sm text-slate-400 mt-3">
          La compra se habilitará con la apertura de inscripciones. Para consultas o soporte,
          escribe a info@eucampus.com
        </p>
      </motion.header>

      {/* Countdown cards */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 mb-12 lg:max-w-2/3 lg:mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        {[
          { value: timeLeft.days, label: 'Días' },
          { value: timeLeft.hours, label: 'Horas' },
          { value: timeLeft.minutes, label: 'Minutos' },
          { value: timeLeft.seconds, label: 'Segundos' },
        ].map((cardItem) => (
          <motion.div
            key={cardItem.label}
            variants={card}
            className="min-w-[150px] lg:max-w-[210px] bg-teal-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center"
          >
            {/* Numeric value: re-animate when value changes using `key` */}
            <motion.div
              key={cardItem.value} // when value updates, this remounts and animates
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-bold leading-none"
            >
              {String(cardItem.value).padStart(2, '0')}
            </motion.div>

            <div className="text-sm md:text-base mt-1 opacity-90">{cardItem.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contents */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn}
        className="mb-8 lg:max-w-2/3 lg:mx-auto"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Contenidos previstos</h3>

        <motion.ul className="space-y-6">
          {features.map((f, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -8 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.45, delay: i * 0.04 } },
              }}
              className="flex gap-4 items-start"
            >
              {/* book icon */}
              <svg
                aria-hidden="true"
                className="w-[20px] mt-[2px]"
                fill={'#224058'}
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
              </svg>

              <p className="text-slate-700">
                <span className="font-semibold text-teal-600">{f.title}</span>{' '}
                <span className="text-slate-600">{f.text}</span>
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Notice bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 border-l-4 border-blue-200 p-4 rounded-sm lg:max-w-2/3 lg:mx-auto"
      >
        <p className="text-sm text-slate-700">
          El contenido es sensible de cambio hasta publicación oficial en octubre de 2025.
        </p>
      </motion.div>
    </section>
  )
}

export default CountdownLayout

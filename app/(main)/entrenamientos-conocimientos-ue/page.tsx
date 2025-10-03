'use client'
import Breadcrumb from '@/app/components/Breadcrumb'
import Generalistas from '@/app/components/Generalistas'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

const ConocimientosUE = () => {
  const entrenamientos = [
    {
      entrenamientoTitle: 'Conocimientos UE (Starter Pack 120)',
      entrenamientoType1: 'Entrenamiento',
      entrenamientoType2: 'Conocimientos UE',
      entrenamientoDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Conocimientos...',
      entrenamientoLink: '#',
    },
    {
      entrenamientoTitle: 'Conocimientos UE (Ultimate Pack 480)',
      entrenamientoType1: 'Entrenamiento',
      entrenamientoType2: 'Conocimientos UE',
      entrenamientoDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Conocimientos...',
      entrenamientoLink: '#',
    },
    {
      entrenamientoTitle: 'Conocimientos UE (Advanced Pack 240)',
      entrenamientoType1: 'Entrenamiento',
      entrenamientoType2: 'Conocimientos UE',
      entrenamientoDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Conocimientos...',
      entrenamientoLink: '#',
    },
  ]
  return (
    <div className="mt-[60px]">
      <Breadcrumb />
      <div className="px-4 xl:px-0 w-full lg:max-w-[1300px] 2xl:max-w-[1600px] mx-auto pt-10 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20 lg:pb-0"
        >
          {entrenamientos.slice(0, 4).map((entrenamiento, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="pl-4 py-[15px] bg-[#222] h-[280px] text-[#fff] shadow-[-6px_7px_1px_5px_#00A694] rounded-[10px] hover:shadow-[6px_7px_1px_5px_#00A694] transition-all duration-500"
            >
              <a
                href={`${entrenamiento.entrenamientoLink}`}
                className="block font-bold mt-[20px] text-lg pr-3"
              >
                {entrenamiento.entrenamientoTitle}
              </a>
              <div className="flex gap-2 my-2">
                <p className="block w-fit bg-primary text-xs rounded-[18px] px-[10px] py-[5px] text-[#fff]">
                  <FontAwesomeIcon icon={faTag} fontSize={12} /> {entrenamiento.entrenamientoType1}
                </p>
                <p className="block w-fit bg-primary text-xs rounded-[18px] px-[10px] py-[5px] text-[#fff]">
                  <FontAwesomeIcon icon={faTag} fontSize={12} /> {entrenamiento.entrenamientoType2}
                </p>
              </div>
              <p className="pb-3 pl-2 text-sm pr-4 lg:px-1">
                {entrenamiento.entrenamientoDescription}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="mt-8"
        >
          <Generalistas />
        </motion.div>
      </div>
    </div>
  )
}

export default ConocimientosUE

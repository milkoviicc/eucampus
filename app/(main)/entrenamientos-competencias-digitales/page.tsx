import Breadcrumb from '@/app/components/Breadcrumb'
import Generalistas from '@/app/components/Generalistas'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CompetenciasDigitales = () => {
  const entrenamientos = [
    {
      entrenamientoTitle: 'Competencias Digitales (Advanced Pack 150)',
      entrenamientoType1: 'Entrenamiento',
      entrenamientoType2: 'Competencias Digitales',
      entrenamientoDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Competencias...',
      entrenamientoLink: '#',
    },
    {
      entrenamientoTitle: 'Competencias Digitales (Starter Pack 50)',
      entrenamientoType1: 'Entrenamiento',
      entrenamientoType2: 'Competencias Digitales',
      entrenamientoDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Competencias...',
      entrenamientoLink: '#',
    },
    {
      entrenamientoTitle: 'Competencias Digitales (Ultimate Pack 300)',
      entrenamientoType1: 'Entrenamiento',
      entrenamientoType2: 'Competencias Digitales',
      entrenamientoDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Competencias...',
      entrenamientoLink: '#',
    },
  ]
  return (
    <div className="mt-[60px]">
      <Breadcrumb />
      <div className="px-4 xl:px-0 w-full lg:max-w-[1300px] 2xl:max-w-[1600px] mx-auto pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20 lg:pb-0">
          {entrenamientos.slice(0, 4).map((entrenamiento, idx) => (
            <div
              key={idx}
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
            </div>
          ))}
        </div>
        <Generalistas />
      </div>
    </div>
  )
}

export default CompetenciasDigitales

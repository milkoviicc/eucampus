import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Generalistas = () => {
  return (
    <div className="lg:pt-10">
      <div className="text-center font-semibold">
        <h3 className="text-lg md:text-2xl">Preparación completa con método</h3>
        <h1 className="text-2xl mt-2 md:text-3xl md:mt-0">Explora nuestro Pack Generalistas AD5</h1>
      </div>

      {/* Responsive bottom section: image on top for small screens, image on right for md+ */}
      <div className="flex flex-col lg:flex-row lg:items-center pt-8 gap-8">
        <div className="flex flex-col gap-1 w-full lg:w-1/2 order-2 lg:order-1">
          <p className="text-[#7A7A7A] text-sm">
            Un único itinerario que integra Razonamiento (verbal, numérico y abstracto),
            Competencias Digitales, Conocimiento de la UE y Prueba Escrita. Estudia con estructura,
            ahorra tiempo y avanza con contenidos alineados al formato EPSO y basados en fuentes
            oficiales.
          </p>
          <div className="flex flex-col gap-4 text-accent py-4">
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-black pr-1 pt-1" />
              <p>
                <span className="font-bold">Itinerario integrado:</span> coherencia entre módulos;
                lo que aprendes en uno potencia el siguiente.
              </p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-black pr-1 pt-1" />
              <p>
                <span className="font-bold">Progreso visible:</span> simulacros y ejercicios que te
                permiten ver avances reales.
              </p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-black pr-1 pt-1" />
              <p>
                <span className="font-bold">Acceso unificado:</span> todo en un mismo espacio, sin
                compras ni rutas paralelas.
              </p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-black pr-1 pt-1" />
              <p>
                <span className="font-bold">Ahorro:</span> frente a adquirir los módulos por
                separado, ahorras un 19 %.
              </p>
            </div>
          </div>

          <h4 className="text-xl font-semibold mt-4">Cursos Incluidos</h4>
          <ul className="text-accent text-[17px] space-y-2 mt-2">
            <li className="flex gap-2">
              <svg
                aria-hidden="true"
                className="w-[14px]"
                fill={'#224058'}
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
              </svg>
              Módulo de Conocimiento UE
            </li>
            <li className="flex gap-2">
              <svg
                aria-hidden="true"
                className="w-[14px]"
                fill={'#224058'}
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
              </svg>
              Módulo de Razonamiento
            </li>
            <li className="flex gap-2">
              <svg
                aria-hidden="true"
                className="w-[14px]"
                fill={'#224058'}
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
              </svg>
              Módulo de Competencias Digitales
            </li>
            <li className="flex gap-2">
              <svg
                aria-hidden="true"
                className="w-[14px]"
                fill={'#224058'}
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
              </svg>
              Módulo de Prueba Escrita
            </li>
          </ul>
          <a
            href="#"
            className="mt-4 bg-primary px-[24px] py-[10px] w-fit text-white text-[15px] font-semibold rounded-[3px] hover:bg-accent transition duration-300"
          >
            Infórmate
          </a>
        </div>

        <div className="flex flex-col justify-center h-full w-full lg:w-1/2 order-1 lg:order-2">
          <Image
            src="https://eucampus.com/wp-content/uploads/2025/05/Generalistas-AD5-Course-1536x1024.jpg"
            width={600}
            height={500}
            alt="Pack image"
            className="rounded-[5px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] w-full h-auto object-cover"
          />
          <h6 className="text-[#7A7A7A] font-bold text-base mt-5">Recomendación</h6>
          <div className="flex flex-col gap-2 mt-2 text-sm text-[#7A7A7A]">
            <p>Empieza por los vídeos, continúa con apuntes y cierra cada bloque con simulacros.</p>
            <p>Preparación ordenada y completa para el dída del examen.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Generalistas

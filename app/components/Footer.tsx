'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="pt-20 pb-8 bg-primary text-white">
      <div className="max-w-[1300px] 2xl:max-w-[1600px] mx-auto px-4">
        {/* Grid: mobile = 2 cols with custom ordering, md+ = 5 columns like original */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-5 lg:items-start">
          {/* Cursos (mobile: col 1 row 1) */}
          <div className="order-1 lg:order-none">
            <h5 className="text-lg font-semibold py-2">Cursos</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/cursos-generalistas-ad5" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Generalistas
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  CAST
                </a>
              </li>
              <li>
                <a href="/secretaries" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Secreatries
                </a>
              </li>
            </ul>
          </div>

          {/* Entrenamiento (mobile: col 2 row 1) */}
          <div className="order-2 lg:order-none">
            <h5 className="text-lg font-semibold py-2">Entrenamiento</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/entrenamientos-razonamiento" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Razonamiento
                </a>
              </li>
              <li>
                <a
                  href="/entrenamientos-conocimientos-ue"
                  className="text-sm flex gap-2 items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Conoc. UE
                </a>
              </li>
              <li>
                <a
                  href="/entrenamientos-competencias-digitales"
                  className="text-sm flex gap-2 items-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Compet. dig.
                </a>
              </li>
            </ul>
          </div>

          {/* Próximos cursos (mobile: full width row 2) */}
          <div className="order-3 col-span-2 lg:col-span-1 lg:order-none lg:col-start-3 lg:row-auto">
            <h5 className="text-lg font-semibold pt-6 pb-2 lg:pt-2">Próximos cursos</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/asistentes-ast3" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Asistentes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          {/* Trabajar en la UE (mobile: col 1 row 3) */}
          <div className="order-4 lg:order-none">
            <h5 className="text-lg font-semibold py-2 lg:pt-0">Trabajar en la UE</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/trabajar-en-la-ue#porque" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Acceso a la UE
                </a>
              </li>
              <li>
                <a href="/trabajar-en-la-ue#tipos" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Tipos de empleo
                </a>
              </li>
              <li>
                <a href="/trabajar-en-la-ue#requisitos" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Requisitos generales
                </a>
              </li>
              <li>
                <a href="/trabajar-en-la-ue#proceso" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Proceso de selección
                </a>
              </li>
              <li>
                <a href="/trabajar-en-la-ue#ofertas" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Dónde buscar ofertas
                </a>
              </li>
              <li>
                <a href="/trabajar-en-la-ue#practicos" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Consejos prácticos
                </a>
              </li>
            </ul>
          </div>

          {/* Sobre nosotros (mobile: col 2 row 3) */}
          <div className="order-5 lg:order-none">
            <h5 className="text-lg font-semibold py-2">Sobre nosotros</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/sobre-nosotros#quienes" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="/sobre-nosotros#quehacemos" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Qué hacemos
                </a>
              </li>
              <li>
                <a href="/sobre-nosotros#elegirnos" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a href="/sobre-nosotros#ayudamos" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />A quién ayudamos
                </a>
              </li>
              <li>
                <a href="/sobre-nosotros#comohacemos" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Cómo lo hacemos
                </a>
              </li>
            </ul>
          </div>

          {/* Logo column for md+ (on mobile it'll appear below everything in its own centered block) */}
          <div className="order-6 col-span-2 lg:col-span-1 lg:order-none lg:flex lg:flex-col lg:items-start hidden">
            {/* Keep empty on mobile — we'll render logo below for small screens */}
          </div>
        </div>

        {/* Logo + Socials (mobile: centered under grid, lg: positioned as the 5th column) */}
        <div className="mt-16 lg:mt-0 flex flex-col items-center">
          <div className="w-[160px]">
            <Image
              src="https://eucampus.com/wp-content/uploads/2025/05/logo-web-pie.png"
              width={500}
              height={500}
              alt="EU Campus logo"
              className="w-full h-auto"
            />
          </div>

          <ul className="flex gap-6 mt-4">
            <li>
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} fontSize={24} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} fontSize={24} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} fontSize={24} />
              </a>
            </li>
          </ul>

          <p className="text-center pt-6">Made by Marko Milkovic</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

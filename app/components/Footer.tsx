'use client'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className="pt-20 pb-4 bg-primary text-white">
      <div className="flex flex-col max-w-[1300px] mx-auto">
        <div className="flex justify-between gap-6">
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold py-2">Cursos</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
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
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Secreatries
                </a>
              </li>
            </ul>
            <h5 className="text-lg font-semibold pt-6 pb-2">Próximos cursos</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
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
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold py-2">Entrenamiento</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Razonamiento
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Conoc. UE
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Compet. dig.
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold py-2">Trabajar en la UE</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Acceso a la UE
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Tipos de empleo
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Requisitos generales
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Proceso de selección
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Dónde buscar ofertas
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Consejos prácticos
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold py-2">Sobre nosotros</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Qué hacemos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />A quién ayudamos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex gap-2 items-center">
                  <FontAwesomeIcon icon={faChevronRight} fontSize="14" />
                  Cómo lo hacemos
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Image
              src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/logo-web-pie.png"
              width={500}
              height={500}
              alt="EU Campus logo"
              className="w-[160px]"
            />
            <ul className="flex justify-around mt-4">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} fontSize={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} fontSize={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} fontSize={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center pt-12">Made by Marko Milkovic</p>
      </div>
    </div>
  )
}

export default Footer

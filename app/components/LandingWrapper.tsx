'use client'
import { faCircleCheck, faClock } from '@fortawesome/free-regular-svg-icons'
import {
  faChevronRight,
  faCoins,
  faEarthEurope,
  faScaleBalanced,
  faTag,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import AnimatedHeading from './AnimatedHeading'

const LandingWrapper = () => {
  const courses = [
    {
      courseTitle: 'Competencias Digitales (Ultimate Pack 300)',
      courseType: 'Entrenamiento',
      courseDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Competencias Digitales. Simulacros cronometrados, soluciones explicadas y dificultad progresiva para afinar...',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Competencias Digitales (Advanced Pack 150)',
      courseType: 'Entrenamiento',
      courseDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Competencias Digitales. Simulacros cronometrados, soluciones explicadas y dificultad progresiva para afinar...',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Competencias Digitales (Starter Pack 50)',
      courseType: 'Entrenamiento',
      courseDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Competencias Digitales. Simulacros cronometrados, soluciones explicadas y dificultad progresiva para afinar...',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Prueba CAST: Módulo de Razonamiento',
      courseType: 'Prueba CAST',
      courseDescription:
        'La fase inicial del CAST consiste en una prueba de razonamiento de carácter eliminatorio. Su finalidad es verificar competencias lógicas básicas para el puesto. Únicamente las personas que la...',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Generalistas AD5: Módulo de Prueba Escrita',
      courseType: 'Generalistas AD5',
      courseDescription:
        'La prueba escrita de EPSO evalúa tu capacidad para estructurar ideas de manera clara, ordenada y profesional en temas relacionados con la Unión Europea.',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Generalistas AD5: Módulo de Competencias Digitales',
      courseType: 'Generalistas AD5',
      courseDescription:
        'Evalúa tu capacidad para manejar de forma segura y eficaz la información y las herramientas digitales habituales en el entorno profesional europeo.',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Generalistas AD5: Módulo de Razonamiento',
      courseType: 'Generalistas AD5',
      courseDescription:
        'Esta es la primera prueba que te vas a encontrar en el proceso de selección, y una de las más importantes: si no la superas, el resto del examen no se corrige.',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Generalistas AD5: Módulo de Conocimiento UE',
      courseType: 'Generalistas AD5',
      courseDescription:
        'Esta prueba evalúa tu capacidad para entender su funcionamiento, su historia y sus principales áreas de acción. Y no basta con saber “quién es quién”: necesitas comprender qué hace cada...',
      courseLink: '#',
      courseTypeLink: '#',
    },
  ]

  const reasons = [
    {
      reasonTitle: 'Todo el contenido en español claro y directo',
      reasonDescription:
        'Olvídate de materiales genéricos o traducciones automáticas. Aquí encontrarás explicaciones, vídeos, ejercicios y apuntes pensados desde el principio para hispanohablantes que quieren aprobar.',
    },
    {
      reasonTitle: 'No caigas en promesas vacías',
      reasonDescription:
        'Si te ofrecen preparación para pruebas que ya no existen o no están convocadas, es señal de que no están al día. Aquí solo te preparamos para lo que sí va a evaluarse.',
    },
    {
      reasonTitle: 'Sin dependencias de Zoom ni herramientas externas',
      reasonDescription:
        'Todo lo que necesitas está integrado en tu espacio personal. No tienes que depender de plataformas de terceros ni instalar aplicaciones.',
    },
    {
      reasonTitle: 'Sin webinars programados ni clases en horarios fijos',
      reasonDescription:
        'Tú marcas el ritmo. Accede al contenido cuando quieras y desde donde quieras. Sabemos que muchos opositores compaginan su preparación con trabajo o familia.',
    },
    {
      reasonTitle: 'No pagues por relleno',
      reasonDescription:
        'Otros cursos alargan su temario con decenas de documentos públicos sin procesar. Nosotros seleccionamos, ordenamos y explicamos lo importante, para que no pierdas ni tiempo ni energía.',
    },
    {
      reasonTitle: 'Nada de foros sin control',
      reasonDescription:
        'Evita cursos donde se fomenta el “estudia entre compañeros” como única vía de resolver dudas. Aquí tienes explicaciones claras, contacto con formadores y contenido diseñado profesionalmente.',
    },
    {
      reasonTitle: 'Claridad desde el principio',
      reasonDescription:
        'Te decimos desde el inicio qué incluye el curso, qué pruebas se preparan y cómo evaluarlas. Sin letra pequeña, sin sorpresas.',
    },
    {
      reasonTitle: 'Nada de contenidos desactualizados',
      reasonDescription:
        'Algunos cursos siguen preparando para el Assessment Centre o para entrevistas, cuando ya no forman parte del proceso oficial. Nosotros actualizamos nuestros materiales en cuanto cambian los procedimientos de EPSO.',
    },
  ]

  return (
    <>
      <div className="max-w-[1300px] mx-auto flex justify-between items-center">
        <div className="font-montserrat w-1/2 py-35">
          <h3 className="text-xl font-light w-fit">
            La #1 en preparación EPSO en español, sin rodeos
          </h3>
          <h1 className="text-[40px] font-extralight leading-6 mt-8 w-fit">
            Construye tu futuro en la
          </h1>
          <h1 className="w-fit">
            <b className="text-[70px]">Unión Europea</b>
          </h1>

          <div className="font-poppins leading-5">
            <p>
              Ayudamos a personas a prepararse para conseguir empleo en la Unión Europea, ya sea
              mediante oposiciones, contratos temporales o procesos de selección abiertos.
            </p>
            <br />
            <p>
              Ofrecemos formación online clara, actualizada y en español, para que no pierdas tiempo
              y te centres en lo que realmente importa.
            </p>
          </div>

          <a
            href="#"
            className="bg-primary font-['Muli',sans-serif] text-white border-1 border-[#062D6F] rounded-[5px] py-3 px-6 flex gap-2 items-center w-fit mt-5"
          >
            Nuestra cursos <FontAwesomeIcon icon={faChevronRight} className="h-[12px]" />{' '}
          </a>
        </div>
        <div className="relative">
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/portada.jpg"
            width={460}
            height={430}
            alt="Hero image"
            className="w-[460px] h-[430px] rounded-[20px]"
          />
          <Image
            src="/images/hero-pattern.png"
            width={88}
            height={88}
            alt="Bg img"
            className="w-[88px] h-[88px] absolute -bottom-5 -right-12 opacity-[0.18]"
          />
        </div>
      </div>
      {/* BENEFITS SECTION */}
      <div className="py-20 bg-[#F7F7F7]">
        <div className="max-w-[1300px] mx-auto flex flex-col justify-center items-center">
          <AnimatedHeading
            firstText="Beneficios"
            secondText="de trabajar en la UE"
            underlineOn="first"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-0 w-full svg-animated"
                viewBox="0 0 500 150"
                stroke="#00A694"
                strokeWidth={9}
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
              </svg>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 px-4 md:px-0 w-full">
            <div className="px-5 py-10 flex flex-col justify-center items-center text-center bg-[#E4F3F1] rounded-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.11)]">
              <FontAwesomeIcon icon={faClock} fontSize={50} className="pb-2" />
              <h3 className="text-[#222] text-2xl font-semibold">Conciliación</h3>
              <p className="text-[#222] text-lg">Horarios estables y previsibles</p>
            </div>
            <div className="px-6 py-14 flex flex-col justify-center items-center text-center bg-[#E4F3F1] rounded-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.11)]">
              <FontAwesomeIcon icon={faCoins} fontSize={50} className="pb-2" />
              <h3 className="text-[#222] text-2xl font-semibold">Sueldo competitivo</h3>
              <p className="text-[#222] text-lg">Retribuciones atractivas y progresivas</p>
            </div>
            <div className="px-6 py-14 flex flex-col justify-center items-center text-center bg-[#E4F3F1] rounded-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.11)]">
              <FontAwesomeIcon icon={faScaleBalanced} fontSize={50} className="pb-2" />
              <h3 className="text-[#222] text-2xl font-semibold">Estabilidad</h3>
              <p className="text-[#222] text-lg">Contrato fijo y carrera profesional</p>
            </div>
            <div className="px-6 py-14 flex flex-col justify-center items-center text-center bg-[#E4F3F1] rounded-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.11)]">
              <FontAwesomeIcon icon={faEarthEurope} fontSize={50} className="pb-2" />
              <h3 className="text-[#222] text-2xl font-semibold">Prestigio internacional</h3>
              <p className="text-[#222] text-lg">Reconocimiento Europeo</p>
            </div>
          </div>
        </div>
      </div>

      {/* COURSES SECTION */}
      <div className="max-w-[1300px] mx-auto py-20">
        <AnimatedHeading
          firstText="Nuestros"
          secondText="cursos"
          underlineOn="second"
          svg={
            <svg
              className="absolute -left-2 -top-2 w-[calc(100%+20px)] h-[calc(100%+20px)] svg-animated"
              stroke="#00A694"
              strokeWidth={9}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
            </svg>
          }
        />

        <p className="text-center">
          Combinamos explicaciones claras, materiales estructurados y práctica real para que
          aprendas de forma eficaz.
        </p>
        <div className="flex justify-between items-center mt-12">
          <h3 className="font-semibold text-3xl">Top cursos</h3>
          <a href="#" className="text-[#394c62] text-sm">
            Ver todo el catálogo
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-8">
          {courses.slice(0, 4).map((course, idx) => (
            <div
              key={idx}
              className="pl-4 py-[15px] bg-[#222] h-[280px] text-[#fff] shadow-[-6px_7px_1px_5px_#00A694] rounded-[10px] hover:shadow-[6px_7px_1px_5px_#00A694] transition-all duration-500"
            >
              <a href={`${course.courseLink}`} className="block font-bold mt-[20px] text-lg">
                {course.courseTitle}
              </a>
              <a
                href={`${course.courseTypeLink}`}
                className="block w-fit bg-primary text-xs rounded-[18px] px-[10px] py-[5px] text-[#fff] my-2"
              >
                <FontAwesomeIcon icon={faTag} fontSize={12} /> {course.courseType}
              </a>
              <p className="pb-3 px-2 text-sm">{course.courseDescription}</p>
            </div>
          ))}
        </div>
      </div>

      {/* REASONS SECTIONS */}
      <div className="py-20 bg-[#F7F7F7]">
        <div className="max-w-[1300px] mx-auto flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <AnimatedHeading
              firstText="Porqué"
              secondText={<span className="text-[43px] text-accent">Elegirnos</span>}
              underlineOn="second"
              svg={
                <svg
                  className="absolute left-0 top-2 svg-animated"
                  stroke="#00A694"
                  strokeWidth={9}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
                </svg>
              }
            />

            <p className="text-[#555]">
              Una plataforma pensada para ayudarte a conseguir trabajo en la Unión Europea.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
            {reasons.map((reason, index) => (
              <div className="flex gap-3 w-full" key={index}>
                <FontAwesomeIcon icon={faCircleCheck} fontSize={32} className="text-accent" />
                <div className="flex flex-col">
                  <h5 className="font-semibold ">{reason.reasonTitle}</h5>
                  <p className="text-justify text-[#555] text-sm py-2">
                    {reason.reasonDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CERTIFICATES SECTION */}
      <div className="max-w-[1300px] mx-auto py-20 flex flex-col">
        <AnimatedHeading
          firstText="Confianza"
          secondText=", transparencia, reconocimiento"
          underlineOn="first"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 -bottom-3 w-full svg-animated"
              viewBox="0 0 500 150"
              stroke="#00A694"
              strokeWidth={9}
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
            </svg>
          }
        />

        <p className="text-center text-2xl font-semibold -mt-4">Certificados mediante</p>

        <div className="flex justify-center items-center gap-16 mt-10">
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/elementor/thumbs/credly_logo_icon_247258-r7kwnu6q9hehvntjz3e0jy15u02nib1l7y9pl6mf40.png"
            width={240}
            height={600}
            alt="Certificate 1"
            className="w-auto h-auto min-w-[100px]"
          />
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2025/06/logo-2.jpg"
            width={240}
            height={600}
            alt="Certificate 1"
            className="w-auto h-auto min-w-[100px]"
          />
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2025/06/logo-3.jpg"
            width={240}
            height={600}
            alt="Certificate 1"
            className="w-auto h-auto min-w-[100px]"
          />
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2025/06/logo-4.jpg"
            width={240}
            height={600}
            alt="Certificate 1"
            className="w-auto h-auto min-w-[100px]"
          />
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2025/06/logo-5.jpg"
            width={240}
            height={600}
            alt="Certificate 1"
            className="w-auto h-auto min-w-[100px]"
          />
        </div>
      </div>
    </>
  )
}

export default LandingWrapper

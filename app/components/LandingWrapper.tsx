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
import Link from 'next/link'
import { Marquee } from '@/components/ui/marquee'
import Generalistas from './Generalistas'
import { motion, Variants } from 'framer-motion'

interface Course {
  courseTitle: string
  courseType: string
  courseDescription: string
  courseLink: string
  courseTypeLink: string
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
}

const LandingWrapper = ({ courses }: { courses: Course[] }) => {
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

  const certificates = [
    {
      imgSrc: 'https://learnwithjusticeu.com/wp-content/uploads/2023/01/credly-logo-400x150px.png',
    },
    {
      imgSrc: 'https://eucampus.com/wp-content/uploads/2025/06/logo-2.jpg',
    },
    {
      imgSrc: 'https://eucampus.com/wp-content/uploads/2025/06/logo-3.jpg',
    },
    {
      imgSrc: 'https://eucampus.com/wp-content/uploads/2025/06/logo-4.jpg',
    },
    {
      imgSrc: 'https://eucampus.com/wp-content/uploads/2025/06/logo-5.jpg',
    },
  ]

  return (
    <>
      {/* HERO */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={stagger}
        className="lg:max-w-[1300px] 2xl:max-w-[1600px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center px-4 lg:px-0 mt-[100px] lg:mt-0"
      >
        {/* Hero Text */}
        <motion.div
          variants={fadeInUp}
          className="font-montserrat w-full px-2 lg:w-1/2 pb-12 lg:py-35 lg:px-8 text-left"
        >
          <motion.h3
            variants={fadeIn}
            className="text-xs lg:text-[14px] lg:text-base xl:text-xl font-light lg:mx-0"
          >
            La #1 en preparación EPSO en español, sin rodeos
          </motion.h3>

          <motion.div variants={fadeInUp} className="mt-6">
            <h1 className="text-[24px] md:text-[16px] lg:text-[30px] xl:text-[40px] font-extralight leading-8 lg:leading-6">
              Construye tu futuro en la
            </h1>
            <h1>
              <b className="text-[40px] md:text-[24px] lg:text-[52px] xl:text-[70px]">
                Unión Europea
              </b>
            </h1>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="font-poppins leading-6 md:leading-4 lg:leading-5 mt-2 lg:mt-6 text-xs lg:text-[10px] lg:text-sm xl:text-base lg:w-full"
          >
            <p>
              Ayudamos a personas a prepararse para conseguir empleo en la Unión Europea, ya sea
              mediante oposiciones, contratos temporales o procesos de selección abiertos.
            </p>
            <br />
            <p>
              Ofrecemos formación online clara, actualizada y en español, para que no pierdas tiempo
              y te centres en lo que realmente importa.
            </p>
          </motion.div>

          <motion.a
            variants={fadeIn}
            href="#"
            className="bg-primary font-['Muli',sans-serif] text-white border border-[#062D6F] rounded-[5px] py-3 px-6 md:py-2 md:px-3 lg:py-3 lg:px-6 flex gap-2 items-center w-fit lg:mx-0 mt-5"
          >
            Nuestra cursos <FontAwesomeIcon icon={faChevronRight} className="h-[12px]" />
          </motion.a>
        </motion.div>

        {/* Hero Image */}
        <motion.div variants={fadeInUp} className="relative mb-8 lg:mb-0 px-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.995 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ amount: 0.3 }}
          >
            <video
              src="https://eucampus.com/wp-content/uploads/2025/09/video-2.mp4"
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload"
              className="w-full lg:w-[500px] h-auto lg:h-[430px] mx-auto lg:mx-0"
            ></video>
            <Image
              src="/images/hero-pattern.png"
              width={88}
              height={88}
              alt="Bg img"
              className="w-[88px] h-[70px] lg:h-[88px] absolute -bottom-5 -right-0 opacity-[0.18]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-[#F7F7F7]">
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

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 py-8 px-4 xl:px-4 w-full"
          >
            {[
              { icon: faClock, title: 'Conciliación', text: 'Horarios estables y previsibles' },
              {
                icon: faCoins,
                title: 'Sueldo competitivo',
                text: 'Retribuciones atractivas y progresivas',
              },
              {
                icon: faScaleBalanced,
                title: 'Estabilidad',
                text: 'Contrato fijo y carrera profesional',
              },
              {
                icon: faEarthEurope,
                title: 'Prestigio internacional',
                text: 'Reconocimiento Europeo',
              },
            ].map((b, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="px-5 py-10 flex flex-col justify-center items-center text-center bg-[#E4F3F1] rounded-[10px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.11)]"
              >
                <FontAwesomeIcon icon={b.icon} fontSize={50} className="pb-2" />
                <h3 className="text-[#222] text-2xl font-semibold">{b.title}</h3>
                <p className="text-[#222] text-lg">{b.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={stagger}
        className="max-w-[1300px] mx-auto py-20 px-2 lg:px-8 2xl:px-0"
      >
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

        <motion.p variants={fadeIn} className="text-center">
          Combinamos explicaciones claras, materiales estructurados y práctica real para que
          aprendas de forma eficaz.
        </motion.p>

        <div className="flex justify-between items-center mt-12 px-4 xl:px-4">
          <motion.h3 variants={fadeInUp} className="font-semibold text-3xl">
            Top cursos
          </motion.h3>
          <motion.div variants={fadeIn} className="text-[#394c62] text-sm">
            <Link href="/cursos">Ver todo el catálogo</Link>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 py-8 px-4 xl:px-4 w-full"
        >
          {courses.slice(0, 4).map((course, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="pl-4 py-[15px] bg-[#222] h-[280px] text-[#fff] shadow-[-6px_7px_1px_5px_#00A694] rounded-[10px] hover:shadow-[6px_7px_1px_5px_#00A694] transition-all duration-500"
            >
              <a href={`${course.courseLink}`} className="block font-bold mt-[20px] text-lg pr-3">
                {course.courseTitle}
              </a>
              <a
                href={`${course.courseTypeLink}`}
                className="block w-fit bg-primary text-xs rounded-[18px] px-[10px] py-[5px] text-[#fff] my-2"
              >
                <FontAwesomeIcon icon={faTag} fontSize={12} /> {course.courseType}
              </a>
              <p className="pb-3 pl-2 text-sm pr-4 lg:px-1">{course.courseDescription}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <div className="w-full lg:max-w-[1300px] 2xl:max-w-[1600px] mx-auto px-4 lg:px-0 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={fadeIn}
        >
          <Generalistas />
        </motion.div>
      </div>

      {/* REASONS SECTIONS */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-[1300px] mx-auto flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <AnimatedHeading
              firstText="Porqué"
              secondText="Elegirnos"
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

            <motion.p variants={fadeIn} className="text-[#555] px-8 text-center">
              Una plataforma pensada para ayudarte a conseguir trabajo en la Unión Europea.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 px-4 xl:px-4"
          >
            {reasons.map((reason, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex gap-3 w-full">
                <FontAwesomeIcon icon={faCircleCheck} fontSize={32} className="text-accent" />
                <div className="flex flex-col">
                  <h5 className="font-semibold ">{reason.reasonTitle}</h5>
                  <p className="text-justify text-[#555] text-sm py-2 pr-8 md:pr-0">
                    {reason.reasonDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={stagger}
        className="max-w-[1300px] mx-auto py-20 flex flex-col"
      >
        <div className="px-4">
          <AnimatedHeading
            firstText="Confianza,"
            secondText="transparencia, reconocimiento"
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
        </div>

        <motion.p variants={fadeIn} className="text-center text-2xl font-semibold -mt-4">
          Certificados mediante
        </motion.p>

        <div className="md:hidden block mt-10">
          <motion.div variants={fadeIn}>
            <Marquee pauseOnHover className="[--duration:10s]">
              {certificates.map((certificate, idx) => (
                <Image
                  key={idx}
                  src={certificate.imgSrc}
                  width={240}
                  height={600}
                  alt={`Certificate ${idx + 1}`}
                  className="w-fit h-auto max-h-[400px] sm:max-h-[50px]"
                />
              ))}
            </Marquee>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          className="md:flex hidden justify-center items-center gap-16 mt-10"
        >
          <Image
            src="https://learnwithjusticeu.com/wp-content/uploads/2023/01/credly-logo-400x150px.png"
            width={240}
            height={600}
            alt="Certificate 1"
            className="w-auto h-auto min-w-[100px]"
          />
          <Image
            src="https://eucampus.com/wp-content/uploads/2025/06/logo-2.jpg"
            width={240}
            height={600}
            alt="Certificate 1"
            className="w-auto h-auto min-w-[100px]"
          />
          <Image
            src="https://eucampus.com/wp-content/uploads/2025/06/logo-3.jpg"
            width={240}
            height={600}
            alt="Certificate 1"
            className="w-auto h-auto min-w-[100px]"
          />
          <Image
            src="https://eucampus.com/wp-content/uploads/2025/06/logo-4.jpg"
            width={240}
            height={600}
            alt="Certificate 1"
            className="w-auto h-auto min-w-[100px]"
          />
          <Image
            src="https://eucampus.com/wp-content/uploads/2025/06/logo-5.jpg"
            width={240}
            height={600}
            alt="Certificate 1"
            className="w-auto h-auto min-w-[100px]"
          />
        </motion.div>
      </motion.div>
    </>
  )
}

export default LandingWrapper

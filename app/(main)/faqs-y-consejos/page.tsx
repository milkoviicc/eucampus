'use client'
import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Stack from '../../components/Stack'
import AnimatedHeading from '../../components/AnimatedHeading'
import { motion, Variants } from 'framer-motion'

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

const Faqs = () => {
  const [openFaq1Index, setOpenFaq1Index] = useState<number | null>(null)
  const [openFaq2Index, setOpenFaq2Index] = useState<number | null>(null)

  const toggleFaq1 = (idx: number) => {
    if (openFaq2Index) {
      setOpenFaq2Index(null)
    }
    setOpenFaq1Index(openFaq1Index === idx ? null : idx)
  }

  const toggleFaq2 = (idx: number) => {
    if (openFaq1Index) {
      setOpenFaq1Index(null)
    }
    setOpenFaq2Index(openFaq2Index === idx ? null : idx)
  }

  const faq1 = [
    {
      question: '¿Necesito hablar varios idiomas para presentarme?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Solo necesitas conocer <strong>dos lenguas oficiales de la UE</strong>. Normalmente, tu
          lengua materna y otra con nivel mínimo B2, que suele ser inglés o francés. No necesitas
          ser políglota para empezar.
        </p>
      ),
    },
    {
      question: '¿Las pruebas EPSO se hacen en inglés?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          No necesariamente. En el modelo actual,{' '}
          <strong>una parte del examen se realiza en tu segunda lengua</strong> (por ejemplo, inglés
          o francés), y <strong>otra parte en tu lengua principal</strong>.<br /> Tú eliges ambas
          durante la inscripción, siempre que sean lenguas oficiales de la UE y cumplas los
          requisitos (nivel mínimo B2 para la segunda lengua).
        </p>
      ),
    },
    {
      question: '¿Cuánto dura todo el proceso de oposición?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Con el nuevo modelo EPSO, el proceso completo puede durar unos{' '}
          <strong>4 a 6 meses</strong>. Todo se realiza de forma online, en una sola fase de
          pruebas.
        </p>
      ),
    },
    {
      question: '¿Qué pasa si no paso las pruebas?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          No hay penalización. Puedes volver a presentarte en la siguiente convocatoria, siempre que
          cumplas los requisitos. Muchas personas aprueban en su segundo intento.
        </p>
      ),
    },
    {
      question: '¿Puedo presentarme si todavía no tengo experiencia laboral?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Sí. Los puestos de entrada (como <strong>AD5 generalistas</strong>) no exigen experiencia
          previa. Solo necesitas cumplir los requisitos de titulación e idiomas.
        </p>
      ),
    },
    {
      question: '¿Puedo presentarme si no vivo en Europa actualmente?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Sí. Puedes hacer el proceso desde cualquier lugar del mundo, siempre que tengas la
          nacionalidad de un país miembro de la UE. Las pruebas son online.
        </p>
      ),
    },
    {
      question: '¿Los exámenes EPSO son como los de una oposición nacional?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          No. Son más prácticos: no hay temarios teóricos que memorizar, sino pruebas de
          razonamiento, redacción, comprensión y análisis. La clave está en{' '}
          <strong>entender, practicar y gestionar el tiempo.</strong>
        </p>
      ),
    },
    {
      question: '¿Dónde puedo practicar para las pruebas?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          En <strong>EU Campus</strong> encontrarás cursos, simulacros y material explicativo en
          español, con todo lo necesario para preparar tus pruebas paso a paso.
        </p>
      ),
    },
    {
      question: '¿Cuántas veces me puedo presentar a una oposición EPSO?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          No hay límite de intentos. Puedes presentarte tantas veces como quieras, siempre que
          cumplas los requisitos de cada convocatoria.
        </p>
      ),
    },
    {
      question: '¿Qué nivel de estudios necesito para opositar?',
      answer: (
        <div className="mt-4 text-sm text-[#7A7A7A]">
          <p>Depende del tipo de puesto al que te presentes. Aquí te lo resumimos:</p>

          <p>
            <strong>Para AD5</strong> (administrador de nivel de entrada):
            <br />
            Se requiere una <strong>titulación universitaria completa</strong> (grado o
            equivalente).
          </p>

          <p>
            <strong>Para AST</strong> (asistente):
            <br />
            Normalmente se pide{' '}
            <strong>bachillerato completo + formación técnica específica</strong>, o{' '}
            <strong>experiencia profesional relevante</strong>.
          </p>

          <p>
            <strong>Para AST/SC</strong> (secretarios y oficinistas):
            <br />
            Se exige <strong>educación secundaria y experiencia administrativa acreditada</strong>.
            Son puestos más centrados en el apoyo de oficina.
          </p>

          <p>
            <strong>Para CAST</strong> (agentes contractuales):
            <br />
            Depende del <strong>grupo de funciones (GF)</strong> al que quieras acceder:
            <br />
            <strong>GFII:</strong> educación secundaria
            <br />
            <strong>GFIII:</strong> estudios postsecundarios o experiencia equivalente
            <br />
            <strong>GFIV:</strong> titulación universitaria
          </p>

          <p>
            <strong>Para prácticas (traineeships):</strong>
            <br />
            Se requiere haber finalizado una <strong>titulación universitaria</strong>, sin
            necesidad de experiencia previa. Ideal para recién graduados.
          </p>
        </div>
      ),
    },
    {
      question: '¿Cuándo salen las oposiciones? ¿Hay fechas fijas?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          No. Las convocatorias se publican según las necesidades de las instituciones. Por eso es
          importante estar atento al portal de EPSO o suscribirse a alertas. En{' '}
          <strong>EU Campus</strong> también te avisamos cuando hay novedades importantes.
        </p>
      ),
    },
    {
      question:
        '¿Puedo presentarme si soy de Latinoamérica y tengo doble nacionalidad con un país de la UE?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Sí, siempre que tengas la <strong>nacionalidad de un Estado miembro</strong> de la UE en
          el momento de la inscripción, puedes participar. No importa dónde vivas actualmente.
        </p>
      ),
    },
  ]

  const faq2 = [
    {
      question: '¿Tengo que vivir en Bruselas si consigo el puesto?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          No siempre. Muchas instituciones están en Bruselas, Luxemburgo o Estrasburgo, pero hay
          agencias repartidas por toda la UE (Alicante, París, La Haya, Budapest, etc.). Algunas
          plazas permiten <strong>teletrabajo parcial</strong>.
        </p>
      ),
    },
    {
      question: '¿Qué pasa si apruebo pero no me llaman?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Estar en la <strong>lista de reserva</strong> significa que has superado el proceso y
          puedes ser contratado, pero no garantiza una oferta inmediata. Aun así, muchas
          instituciones consultan regularmente estas listas.
        </p>
      ),
    },
    {
      question: '¿Las pruebas son eliminatorias?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Sí. Generalmente, tienes que superar una primera fase (como razonamiento y conocimientos)
          para pasar a la corrección de la prueba escrita o la comprobación de elegibilidad. Si no
          apruebas, no se corrige lo demás.
        </p>
      ),
    },
    {
      question: '¿Puedo cambiar mi segunda lengua después de inscribirme?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          No. Una vez enviada la inscripción, no puedes modificar ni tu segunda lengua ni otros
          datos clave. Es importante elegir bien desde el principio.
        </p>
      ),
    },
    {
      question: '¿Puedo presentarme si todavía no tengo experiencia laboral?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          No. Para los puestos de entrada como <strong>AD5</strong>, no se exige experiencia laboral
          previa. Se valora más la capacidad de razonamiento, la organización y la claridad al
          comunicar.
        </p>
      ),
    },
    {
      question: '¿Qué es exactamente una lista de reserva?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Es una lista oficial de personas que han superado todas las fases del proceso de
          selección. Las instituciones usan esta lista para cubrir vacantes cuando necesitan nuevos
          empleados. No es un puesto garantizado, pero{' '}
          <strong>es el paso imprescindible para ser contratado como funcionario.</strong>
        </p>
      ),
    },
    {
      question: '¿Qué ocurre si apruebo las pruebas pero no cumplo con algún requisito?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Si, tras revisar tu expediente, EPSO comprueba que{' '}
          <strong>no cumples algún requisito formal (idiomas, nacionalidad, titulación…)</strong>,
          quedas excluido, aunque hayas aprobado las pruebas. Por eso es clave{' '}
          <strong>leer bien la convocatoria</strong> y comprobar que todo esté correcto.
        </p>
      ),
    },
    {
      question: '¿Las instituciones me contactan directamente si estoy en la lista de reserva?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Sí. Una vez en la lista de reserva,{' '}
          <strong>
            las distintas instituciones pueden revisar tu perfil y contactarte directamente
          </strong>{' '}
          si encajas en una vacante. A veces piden entrevistas o pruebas adicionales antes de
          hacerte una oferta formal.
        </p>
      ),
    },
    {
      question: '¿Puedo presentarme a varias oposiciones a la vez?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          Sí. Puedes tener candidaturas abiertas en varias oposiciones al mismo tiempo, siempre que
          cumplas los requisitos. Eso sí:{' '}
          <strong>tendrás que gestionar cada proceso por separado</strong> (fechas, lenguas,
          documentos…).
        </p>
      ),
    },
    {
      question: '¿Puedo elegir en qué ciudad trabajaré?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          En general, no. La mayoría de plazas indican ya su destino (Bruselas, Luxemburgo,
          Estrasburgo, etc.). Si estás en una lista de reserva, puedes{' '}
          <strong>indicar tus preferencias</strong>, pero la{' '}
          <strong>decisión final depende de las necesidades de la institución.</strong>
        </p>
      ),
    },
    {
      question: '¿Las pruebas EPSO son muy difíciles?',
      answer: (
        <p className="mt-4 text-sm text-[#7A7A7A]">
          No son difíciles en contenido, pero sí en <strong>gestión del tiempo y estrategia</strong>
          . Las preguntas de razonamiento requieren práctica para mejorar velocidad y precisión. La
          clave no es sabérselo todo, sino{' '}
          <strong>entender el formato, practicar y estar bien organizado</strong>.
        </p>
      ),
    },
  ]

  return (
    <div className="mt-[60px]">
      <Breadcrumb />
      <div className="w-full lg:max-w-[1300px] 2xl:max-w-[1600px] mx-auto flex flex-col py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn}
        >
          <AnimatedHeading
            firstText="Consejos prácticos"
            secondText="para los candidatos"
            underlineOn="first" // the underline appears under the first text
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                stroke="#00A694"
                strokeWidth={5}
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute left-0 -bottom-3 lg:-bottom-5 w-full"
              >
                <path d="M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"></path>
              </svg>
            }
          />
        </motion.div>

        <Stack />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="mt-10 py-20"
        >
          <AnimatedHeading
            firstText="Preguntas frecuentes"
            secondText="(FAQ)"
            underlineOn="second" // underline appears under the second text
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                stroke="#00A694"
                strokeWidth={9}
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -left-2 -top-2 w-[calc(100%+20px)] h-[calc(100%+20px)]"
              >
                <path d="M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"></path>
              </svg>
            }
          />
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 px-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="flex flex-col gap-8 lg:gap-2 w-full" variants={stagger}>
              {faq1.map((faq, idx) => (
                <motion.div
                  key={idx}
                  className="p-[20px] cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden relative"
                  onClick={() => toggleFaq1(idx)}
                  variants={card}
                >
                  <p
                    className={`flex gap-2 font-semibold items-center ${openFaq1Index === idx ? 'text-accent' : 'text-primary'}`}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                      fill={openFaq1Index === idx ? '#00a694' : '#224058'}
                      className="w-[12px] transition-transform duration-300"
                      style={{
                        transform: openFaq1Index === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                    {faq.question}
                  </p>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openFaq1Index === idx ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-2">{faq.answer}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="flex flex-col gap-8 lg:gap-2 w-full" variants={stagger}>
              {faq2.map((faq, idx) => (
                <motion.div
                  key={idx}
                  className="p-[20px] cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden relative"
                  onClick={() => toggleFaq2(idx)}
                  variants={card}
                >
                  <p
                    className={`flex gap-2 font-semibold items-center ${openFaq2Index === idx ? 'text-accent' : 'text-primary'}`}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                      fill={openFaq2Index === idx ? '#00a694' : '#224058'}
                      className="w-[12px] transition-transform duration-300"
                      style={{
                        transform: openFaq2Index === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                    {faq.question}
                  </p>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openFaq2Index === idx ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-2">{faq.answer}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Faqs

'use client'
import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'

const Trabajar = () => {
  const svgRef1 = useRef<SVGSVGElement>(null)
  const svgRef2 = useRef<SVGSVGElement>(null)
  const svgRef3 = useRef<SVGSVGElement>(null)
  const svgRef4 = useRef<SVGSVGElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleStep = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  useEffect(() => {
    // Function to set up observer for a single SVG
    const setupObserver = (node: SVGSVGElement) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate')
            } else {
              entry.target.classList.remove('animate')
            }
          })
        },
        { threshold: 0.3 },
      )

      observer.observe(node)
      return observer
    }

    // Set up observers for both SVGs
    const observers: IntersectionObserver[] = []

    if (svgRef1.current) {
      observers.push(setupObserver(svgRef1.current))
    }
    if (svgRef2.current) {
      observers.push(setupObserver(svgRef2.current))
    }

    if (svgRef3.current) {
      observers.push(setupObserver(svgRef3.current))
    }

    if (svgRef4.current) {
      observers.push(setupObserver(svgRef4.current))
    }

    // Cleanup function
    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const selectionProcess = [
    {
      question: '1. Publicación de la convocatoria',
      answer: (
        <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
          <p>La convocatoria se publica en el portal oficial de EPSO.</p>
          <p>Incluye detalles sobre el perfil buscado, requisitos, pruebas y plazos.​</p>
        </div>
      ),
    },
    {
      question: '2. Inscripción',
      answer: (
        <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
          <p>Creación de una cuenta en el portal de EPSO.</p>
          <p>Cumplimentación del formulario de solicitud en línea.​</p>
          <p>Indicación de las lenguas de trabajo y adjuntar los documentos requeridos.​</p>
        </div>
      ),
    },
    {
      question: '3. Pruebas de selección',
      answer: (
        <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
          <p>Todas las pruebas se realizan en línea en una única sesión:</p>
          <p>
            <strong>Pruebas de razonamiento:</strong> verbal, numérico y abstracto (evaluadas como
            apto/no apto).​
          </p>
          <p>
            <strong>Prueba de conocimientos sobre la UE:</strong> para competiciones generalistas.​
          </p>
          <p>
            <strong>Prueba de competencias digitales:</strong> cuando sea aplicable.​
          </p>
          <p>
            <strong>Prueba escrita:</strong> evaluación de habilidades de comunicación escrita.​
          </p>
          <p>
            Nota: Una prueba de conocimientos específicos son necesarios para puestos con
            experiencia especializada (AST, AST/SC…).
          </p>
        </div>
      ),
    },
    {
      question: '4. Comprobación de elegibilidad',
      answer: (
        <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
          <p>
            Verificación de los requisitos antes de la inclusión en la lista de reserva (ciudadano o
            no UE, títulos señalados…).
          </p>
        </div>
      ),
    },
    {
      question: '5. Lista de reserva',
      answer: (
        <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
          <p>
            Los candidatos que superan todas las fases son incluidos en una lista de reserva
            utilizada por las instituciones de la UE para cubrir vacantes.​​
          </p>
          <p>
            Este nuevo modelo busca completar las oposiciones en un plazo de hasta 6 meses, con
            todas las pruebas realizadas en línea en una única sesión.​
          </p>
        </div>
      ),
    },
  ]
  return (
    <div className="mt-[60px]">
      <Breadcrumb />
      <div className="max-w-[1300px] mx-auto pt-20 pb-10">
        <div className="pb-8 flex flex-wrap gap-2 w-full justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center">
          <h2>¿Por qué trabajar en la</h2>
          <div className="relative inline-block">
            <h2 className="text-accent">Unión Europea?</h2>
            <svg
              ref={svgRef1}
              className="absolute left-0 -bottom-5 w-full h-auto svg-animated"
              stroke="#00A694"
              strokeWidth={5}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
            </svg>
          </div>
        </div>

        <div className="py-10 flex justify-between gap-12">
          <div className="flex flex-col gap-5 text-[#7A7A7A] text-justify text-sm w-1/2">
            <h3 className="text-2xl text-primary font-semibold">
              Estabilidad y proyección profesional
            </h3>
            <p>
              Los empleos en la UE ofrecen contratos claros, previsibles y con posibilidades de
              desarrollo a largo plazo. Tanto si accedes como funcionario permanente como si lo
              haces a través de un contrato temporal, se valora la continuidad y el crecimiento
              dentro de la institución.
            </p>
            <h3 className="text-2xl text-primary font-semibold mt-2">
              Condiciones laborales favorables
            </h3>
            <p>
              Uno de los principales atractivos de trabajar en la UE son sus condiciones laborales.
              Estas son algunas de las ventajas que marcan la diferencia:
            </p>
            <p>
              <strong>Salarios competitivos</strong>: ajustados al coste de vida del país de destino
              y con aumentos automáticos según antigüedad y nivel.
            </p>
            <p>
              <strong>Equilibrio entre vida personal y trabajo</strong>: horarios flexibles,
              posibilidad de teletrabajo y generosos periodos vacacionales.
            </p>
            <p>
              <strong>Seguridad social completa</strong>: cobertura médica y de pensiones sólida,
              incluso si trabajas desde otro Estado miembro.
            </p>
            <p>
              <strong>Ayudas familiares y de integración</strong>: apoyo económico por hijos,
              escolarización, reubicación o expatriación.
            </p>
            <p>
              <strong>Ambiente multicultural</strong>: trabajar con personas de todos los países de
              la UE fomenta la cooperación, el respeto y el aprendizaje constante.
            </p>
            <p>
              <strong>Sentido de propósito</strong>
            </p>
            <p>
              Además de las condiciones laborales, muchas personas valoran el impacto de su trabajo.
              Formar parte de la UE significa contribuir al desarrollo de políticas que afectan
              directamente a millones de ciudadanos europeos.
            </p>
          </div>
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-16-at-11.29.00-PM.png"
            alt=""
            width={500}
            height={500}
            className="shadow-[3px_6px_10px_0_rgba(0,0,0,0.26)] rounded-tl-[50px] rounded-br-[50px] w-1/2 max-h-[670px]"
          />
        </div>
        <div className="flex flex-col gap-20 py-15">
          <div className="flex flex-wrap gap-2 w-full justify-center text-2xl sm:text-3xl md:text-4xl lg:text-[43px] leading-tight font-semibold text-center">
            <div className="relative inline-block">
              <h2 className="text-accent">Requisitos generales</h2>
              <svg
                ref={svgRef2}
                className="absolute left-0 -bottom-6 w-full h-auto svg-animated"
                stroke="#00A694"
                strokeWidth={5}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
              </svg>
            </div>
            <h2>para trabajar en la Unión Europea</h2>
          </div>

          <div className="flex justify-between gap-10">
            <div className="flex flex-col gap-2 text-[#7A7A7A] text-justify text-sm w-1/2">
              <p>
                Para trabajar en las instituciones europeas, existen una serie de requisitos comunes
                a la mayoría de procesos, tanto si hablamos de oposiciones como de contratos
                temporales o prácticas. Estos criterios pueden variar ligeramente según el perfil o
                la convocatoria, pero en general son los siguientes:
              </p>
              <div className="flex flex-col gap-2 mt-3">
                <h5 className="text-primary font-semibold">1. Nacionalidad</h5>
                <p>Debes ser ciudadano de uno de los Estados miembros de la Unión Europea.</p>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <h5 className="text-primary font-semibold">2. Idiomas</h5>
                <p>
                  La mayoría de los procesos exigen el conocimiento de al menos dos lenguas
                  oficiales de la UE:
                </p>
                <p>Una lengua principal (lengua materna o de educación).</p>
                <p>Una segunda lengua (nivel mínimo B2), que suele ser inglés o francés.</p>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <h5 className="text-primary font-semibold">3. Titulación académica</h5>
                <p>Dependiendo del tipo de puesto:</p>
                <p>
                  Para puestos de administrador (AD): se exige una titulación universitaria completa
                  (grado/licenciatura mínimo).
                </p>
                <p>
                  Para puestos de asistente (AST): suele requerirse título de educación secundaria +
                  formación específica o experiencia profesional relevante.
                </p>
                <p>Para secretarios (AST/SC): título de secundaria + experiencia administrativa.</p>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <h5 className="text-primary font-semibold">
                  4. Capacidad para ejercer las funciones
                </h5>
                <p>
                  No tener antecedentes penales ni estar inhabilitado para ejercer funciones
                  públicas.
                </p>
              </div>
            </div>
            <Image
              src="https://marianos98.sg-host.com/wp-content/uploads/2025/06/eu-4.png"
              alt=""
              width={500}
              height={500}
              className="shadow-[3px_6px_10px_0_rgba(0,0,0,0.26)] rounded-tl-[50px] rounded-br-[50px] w-1/2"
            />
          </div>
          <div className="py-20 flex flex-col gap-2 justify-center items-center">
            <div className="pb-8 flex flex-wrap gap-2 w-full justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center">
              <h2>Cómo es el</h2>
              <div className="relative inline-block">
                <h2 className="text-accent">proceso de selección</h2>
                <svg
                  ref={svgRef3}
                  className="absolute left-0 -bottom-6 w-full h-auto svg-animated"
                  stroke="#00A694"
                  strokeWidth={5}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
                </svg>
              </div>
            </div>

            <p className="text-sm text-[#7A7A7A] text-center w-[70%]">
              EPSO ha implementado un nuevo modelo de selección más ágil y centrado en competencias,
              eliminando las pruebas orales y el Assessment Centre. El proceso se realiza
              completamente en línea y se completa en una única sesión de pruebas.
            </p>
            <div className="flex gap-10 mt-10">
              <Image
                src="https://marianos98.sg-host.com/wp-content/uploads/2020/07/course2.png"
                alt=""
                width={500}
                height={500}
                className="shadow-[3px_6px_10px_0_rgba(0,0,0,0.26)] rounded-tl-[50px] rounded-br-[50px] w-1/2 h-full"
              />
              <div className="flex flex-col gap-4 w-1/2">
                {selectionProcess.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden relative cursor-pointer"
                    onClick={() => toggleStep(idx)}
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
                          {step.question}
                        </h2>
                      </div>

                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                          openIndex === idx ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pb-2">{step.answer}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 flex flex-col items-center gap-5">
          <div className="pt-8 flex flex-wrap gap-2 w-full justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center">
            <h2>¿Dónde buscar las</h2>
            <div className="relative inline-block">
              <h2 className="text-accent">ofertas de empleo</h2>
              <svg
                ref={svgRef4}
                className="absolute left-0 -bottom-5 w-full h-auto svg-animated"
                stroke="#00A694"
                strokeWidth={5}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
              </svg>
            </div>
            <h2>en la Unión Europea?</h2>
          </div>
          <p className="text-[#7A7A7A] text-sm">
            Hay varias formas de encontrar oportunidades de trabajo en las instituciones europeas,
            dependiendo del tipo de contrato o institución.
          </p>
          <div className="flex justify-between gap-10 text-[#7A7A7A] text-sm mt-10">
            <div className="w-1/2 flex flex-col gap-2">
              <h3 className="text-primary text-xl font-medium">
                EPSO – Oficina Europea de Selección de Personal
              </h3>
              <p>
                Es el portal oficial para las oposiciones y procesos centralizados de selección.
                Aquí se publican las convocatorias de funcionarios (AD, AST, AST/SC), CAST
                Permanente y otras competiciones específicas.
              </p>
              <div className="flex flex-col gap-2 mt-10">
                <h3 className="text-primary text-xl font-medium">
                  Páginas de empleo de cada institución o agencia
                </h3>
                <p>
                  Algunas instituciones y agencias europeas publican directamente sus ofertas para
                  agentes contractuales, temporales o puestos especializados. Ejemplos:
                </p>
                <p>Comisión Europea</p>
                <p>Parlamento Europeo</p>
                <p>Consejo de la UE</p>
                <p>
                  Agencias descentralizadas como EMA (medicamentos), FRONTEX (fronteras), EASA
                  (aviación), etc.
                </p>
                <p>
                  Puedes encontrarlas en
                  <a href="https://europa.eu/european-union/about-eu/agencies" target="_blank">
                    https://europa.eu/european-union/about-eu/agencies
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-10">
                <h3 className="text-primary text-xl font-medium">Plataformas adicionales</h3>
                <p>
                  Además de EPSO, existen otros portales que publican trabajos relacionados con la
                  UE, sobre todo para expertos, becas o consultorías:
                </p>
                <p>Jobs in Brussels – empleos en instituciones y ONG vinculadas a la UE.</p>
                <p>EURAXESS – oportunidades para investigadores y científicos.</p>
                <p>LinkedIn – muchas agencias e instituciones europeas publican aquí ofertas.</p>
                <p>Euractiv Jobs – especializado en empleo europeo, sobre todo en Bruselas.</p>
              </div>
              <div className="flex flex-col gap-2 mt-10">
                <h3 className="text-primary text-xl font-medium">Suscripción a alertas</h3>
                <p>
                  EPSO y muchas instituciones permiten suscribirse a alertas por email para no
                  perder ninguna convocatoria nueva.
                </p>
                <p>
                  <strong>Consejo</strong>: crea una cuenta en EPSO aunque aún no vayas a
                  presentarte, así puedes seguir las novedades y recibir alertas de con
                </p>
              </div>
            </div>
            <Image
              src="https://marianos98.sg-host.com/wp-content/uploads/2025/06/eu-3.png"
              alt=""
              width={500}
              height={500}
              className="shadow-[3px_6px_10px_0_rgba(0,0,0,0.26)] rounded-tl-[50px] rounded-br-[50px] w-1/2 h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trabajar

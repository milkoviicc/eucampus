'use client'
import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Image from 'next/image'
import AnimatedHeading from '../../components/AnimatedHeading'

const Trabajar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [employmentTab, setEmploymentTab] = useState(0)

  const toggleStep = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

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
      <div className="max-w-[1300px] mx-auto pt-20" id="porque">
        <AnimatedHeading
          firstText="¿Por qué trabajar en la"
          secondText="Unión Europea?"
          underlineOn="second"
          svg={
            <svg
              className="absolute left-0 -bottom-5 w-full h-auto"
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
          }
        />

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
        <div className="flex flex-col items-center py-15" id="tipos">
          <AnimatedHeading
            firstText="Tipos de empleo"
            secondText="en la Unión Europea"
            underlineOn="first"
            svg={
              <svg
                className="absolute left-0 -bottom-6 w-full h-auto"
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
            }
          />

          <p className="text-[#7A7A7A] text-center text-sm w-[75%] mt-2">
            Las instituciones de la UE ofrecen distintas formas de trabajar en función del tipo de
            contrato, la duración y las tareas a desempeñar. A continuación te explicamos las
            principales categorías:
          </p>
          <div className="flex flex-col items-center w-full gap-10 mt-10">
            <div className="grid grid-cols-3 gap-2 w-fit">
              {/* Top row */}
              <button
                className={`px-[35px] py-[15px] text-sm rounded-t-[10px] text-white hover:bg-[#61CE70] transition duration-300 ${employmentTab === 0 ? 'bg-accent' : 'bg-primary'}`}
                onClick={() => setEmploymentTab(0)}
              >
                Funcionarios permanentes
              </button>
              <button
                className={`px-[35px] py-[15px] text-sm rounded-t-[10px] text-white hover:bg-[#61CE70] transition duration-300 ${employmentTab === 1 ? 'bg-accent' : 'bg-primary'}`}
                onClick={() => setEmploymentTab(1)}
              >
                Agentes contractuales (CAST)
              </button>
              <button
                className={`px-[35px] py-[15px] text-sm rounded-t-[10px] text-white hover:bg-[#61CE70] transition duration-300 ${employmentTab === 2 ? 'bg-accent' : 'bg-primary'}`}
                onClick={() => setEmploymentTab(2)}
              >
                Agentes temporales
              </button>

              {/* Bottom row centered */}
              <div className="col-span-3 flex justify-center gap-2">
                <button
                  className={`px-[35px] py-[15px] text-sm rounded-t-[10px] text-white hover:bg-[#61CE70] transition duration-300 ${employmentTab === 3 ? 'bg-accent' : 'bg-primary'}`}
                  onClick={() => setEmploymentTab(3)}
                >
                  Expertos nacionales en comisión de servicios (SNEs)
                </button>
                <button
                  className={`px-[35px] py-[15px] text-sm rounded-t-[10px] text-white hover:bg-[#61CE70] transition duration-300 ${employmentTab === 4 ? 'bg-accent' : 'bg-primary'}`}
                  onClick={() => setEmploymentTab(4)}
                >
                  Prácticas o traineeships
                </button>
              </div>
            </div>
            <div className="w-full">
              {employmentTab === 0 ? (
                <div className="flex flex-col gap-3 text-[#7A7A7A]">
                  <p>
                    Los funcionarios permanentes son empleados de carrera de la UE con contratos
                    indefinidos. Se accede a estos puestos mediante oposiciones organizadas por
                    EPSO. Las categorías son:​
                  </p>
                  <p>
                    <strong>Administradores (AD):</strong> responsables de la formulación de
                    políticas, análisis, gestión de programas y tareas similares. Los grados van
                    desde AD 5 (nivel de entrada para graduados universitarios) hasta AD 16 (puestos
                    de alta dirección).
                  </p>
                  <p>
                    <strong>Asistentes (AST):</strong> realizan funciones técnicas y administrativas
                    de apoyo. Los grados van desde AST 1 hasta AST 11. El ingreso suele ser en AST 1
                    o AST 3, dependiendo de la experiencia y formación del candidato.
                  </p>
                  <p>
                    <strong>Secretarios/Oficinistas (AST/SC):</strong> proporcionan apoyo
                    administrativo y de oficina, como gestión de documentos, organización de
                    reuniones y mantenimiento de bases de datos. Los grados van desde AST/SC 1 hasta
                    AST/SC 6. La entrada habitual es en AST/SC 1 o AST/SC 2.
                  </p>
                  <table className="border-1 border-collapse mt-5">
                    <thead>
                      <tr className="text-left">
                        <th>Categoria</th>
                        <th>Funciones principales</th>
                        <th>Grados de entrada</th>
                        <th>Requisitos tipicos</th>
                        <th>Evolución profesional</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-semibold px-2">Administradores (AD)</td>
                        <td>
                          Políticas, gestión de programas, análisis, legislación, relaciones
                          exteriores
                        </td>
                        <td>AD 5</td>
                        <td>Titulo universitario</td>
                        <td>Hasta AD 16 (dirección)</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2">Asistentes (AST)</td>
                        <td>
                          Apoyo técnico y administrativo, preparación de documentos, gestión interna
                        </td>
                        <td>AST 1 o AST 3</td>
                        <td>Titulo de secundaria + experiencia o formación técnica</td>
                        <td>Hasta AST 11</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2">Secretarios/Oficinistas (AST/SC)</td>
                        <td>
                          Tareas administrativas de oficina, archivo, gestión de agendas, apoyo
                          logístico
                        </td>
                        <td>AST/SC 1 o AST/SC 2</td>
                        <td>Título de secundaria + experiencia administrativa</td>
                        <td>Hasta AST/SC 6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : employmentTab === 1 ? (
                <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
                  <p>
                    Trabajan bajo contrato por tiempo determinado, pero pueden encadenar varios
                    contratos o incluso acceder a contratos indefinidos. Este tipo de personal
                    <br />
                    desempeña tareas similares a las de los funcionarios, dependiendo del grado
                    (grupo de funciones).
                  </p>
                  <p>
                    Se accede a través de una base de datos gestionada por EPSO (CAST Permanente).
                  </p>
                  <p>
                    No es necesario aprobar una oposición tradicional, pero sí superar pruebas y ser
                    seleccionado por una institución.
                  </p>
                  <p>Muy habitual en agencias descentralizadas o delegaciones.</p>
                </div>
              ) : employmentTab === 2 ? (
                <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
                  <p>
                    Ocupaciones más especializadas o de duración concreta. Son contratados
                    directamente por las instituciones para necesidades específicas (por ejemplo:
                    <br />
                    expertos en clima, abogados lingüistas, técnicos en datos).
                  </p>
                  <p>Contratos normalmente de 2 a 6 años, con posibilidad de prórroga.</p>
                  <p>Suelen requerir experiencia previa o cualificaciones específicas.</p>
                </div>
              ) : employmentTab === 3 ? (
                <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
                  <p>
                    Funcionarios de los Estados miembros que son enviados temporalmente a trabajar
                    en una institución europea, manteniendo su vínculo con la administración
                    nacional.
                  </p>
                  <p>Requieren una sólida experiencia previa.</p>
                  <p>Se consideran “embajadores técnicos” de su país en las instituciones.</p>
                  <p>Muy valorado como experiencia profesional de alto nivel.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3 text-[#7A7A7A]">
                  <p>
                    Destinadas a personas recién graduadas o en etapas iniciales de su carrera
                    profesional. Ofrecen una primera experiencia laboral en el entorno de la UE.
                  </p>
                  <p>
                    Programas de prácticas remuneradas (como el Blue Book de la Comisión Europea).
                  </p>
                  <p>Duración habitual: 5 a 6 meses.</p>
                  <p>Se valoran idiomas, motivación y formación universitaria.</p>
                  <table className="border-1 border-collapse mt-5">
                    <thead>
                      <tr className="text-left">
                        <th>Tipo de empleo</th>
                        <th>Acceso</th>
                        <th>Duración del contrato</th>
                        <th>Estabilidad</th>
                        <th>Remuneración</th>
                        <th>¿Requiere pruebas EPSO?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-semibold px-2">Funcionario permanente</td>
                        <td>Oposición EPSO (convocatoria formal y pruebas)</td>
                        <td>Indefinido (tras periodo de prueba)</td>
                        <td>Alta</td>
                        <td>Alta (según escalas AD/AST)</td>
                        <td>Sí</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2">Agente contractual (CAST)</td>
                        <td>Inscripción en base de datos + selección por la institución</td>
                        <td>Variable (renovable, a veces indefinido)</td>
                        <td>Media</td>
                        <td>Buena (según grado y funciones)</td>
                        <td>No (salvo pruebas internas del CAST)</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2">Agente temporal</td>
                        <td>Selección directa por la institución o agencia</td>
                        <td>Normalmente de 2 a 6 años</td>
                        <td>Media o baja</td>
                        <td>Buena (en perfiles técnicos o especializados)</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2">Prácticas (Traineeships)</td>
                        <td>Solicitud directa en el programa correspondiente</td>
                        <td>5 a 6 meses (ocasionalmente ampliable)</td>
                        <td>Temporal, formativa</td>
                        <td>Remuneración fija mensual (varía según institución)</td>
                        <td>No (se valoran criterios académicos y motivación)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 py-15" id="requisitos">
          <AnimatedHeading
            firstText={<span className="text-accent leading-[2]">Requisitos generales</span>}
            secondText="para trabajar en la Unión Europea"
            underlineOn="first"
            svg={
              <svg
                className="absolute left-0 -bottom-3 w-full h-auto svg-animated"
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
            }
          />

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
          <div className="py-20 flex flex-col gap-2 justify-center items-center" id="proceso">
            <AnimatedHeading
              firstText="Cómo es el"
              secondText="proceso de selección"
              underlineOn="second"
              svg={
                <svg
                  className="absolute left-0 -bottom-6 w-full h-auto"
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
              }
            />

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
        <div className="py-20 flex flex-col items-center" id="ofertas">
          <AnimatedHeading
            firstText="¿Dónde buscar las"
            secondText="ofertas de empleo"
            underlineOn="second"
            svg={
              <svg
                className="absolute left-0 -bottom-5 w-full h-auto"
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
            }
          />

          <p className="text-[#7A7A7A] text-sm">
            Hay varias formas de encontrar oportunidades de trabajo en las instituciones europeas,
            dependiendo del tipo de contrato o institución.
          </p>
          <div className="flex justify-between gap-10 text-[#7A7A7A] text-sm mt-20">
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

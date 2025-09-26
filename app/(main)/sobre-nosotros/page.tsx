import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AnimatedHeading from '../components/AnimatedHeading'
import Image from 'next/image'

const SobreNosotros = () => {
  return (
    <div className="mt-[60px]">
      <Breadcrumb />
      <div className="max-w-[1300px] mx-auto flex flex-col gap-5 py-20">
        <div className="flex gap-10">
          <div className="flex flex-col justify-center gap-2 w-1/2">
            <AnimatedHeading
              firstText="Quiénes"
              secondText="Somos"
              underlineOn="second"
              className="justify-start"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 -bottom-2 w-full svg-animated"
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
            <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
              <p>
                <strong>EU Campus</strong> es una plataforma pensada para ayudarte a conseguir
                trabajo en la Unión Europea.
              </p>
              <p>
                Creamos contenidos en español, explicados con claridad y pensados para ayudarte a
                aprobar.
              </p>
              <p>
                Todo está diseñado para personas que valoran su tiempo y buscan una forma de
                estudiar clara, ordenada y sin distracciones.
              </p>
            </div>
          </div>
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/quienes-1.jpg"
            width={240}
            height={600}
            alt="Europea"
            className="w-[550px] h-auto rounded-[10px]"
          />
        </div>
        <div className="flex gap-10 py-20">
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/quienes-2.jpg"
            width={240}
            height={600}
            alt="Europea"
            className="w-[550px] h-auto rounded-[10px]"
          />
          <div className="flex flex-col justify-center gap-2 w-1/2">
            <AnimatedHeading
              firstText="Qué"
              secondText="hacemos"
              underlineOn="second"
              className="justify-start"
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
            <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
              <p>
                Ayudamos a personas a prepararse para conseguir empleo en la Unión Europea, ya sea
                mediante oposiciones, contratos temporales o procesos de selección abiertos.
              </p>
              <p>
                Ofrecemos formación online clara, actualizada y en español, para que no pierdas
                tiempo y te centres en lo que realmente importa.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 py-20">
          <div className="flex flex-col justify-center gap-2 w-1/2">
            <AnimatedHeading
              firstText="Porqué"
              secondText="elegirnos"
              underlineOn="second"
              className="justify-start"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 -bottom-5 w-full svg-animated"
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
            <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
              <p>
                En EU Campus queremos que tengas claro lo que estudias y por qué lo estás
                estudiando.
              </p>
              <p>Nos centramos en lo esencial, sin añadir complicaciones innecesarias.</p>
              <p>
                Ofrecemos contenidos útiles, bien explicados y en una plataforma clara y fácil de
                usar.
              </p>
              <p>Todo pensado para que aproveches tu tiempo y avances con confianza.</p>
            </div>
          </div>
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/quienes-3.jpg"
            width={240}
            height={600}
            alt="Countries"
            className="w-[550px] h-auto rounded-[10px]"
          />
        </div>
        <div className="flex gap-10 py-20">
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/quienes-4.jpg"
            width={240}
            height={600}
            alt="Friends"
            className="w-[550px] h-auto rounded-[10px]"
          />
          <div className="flex flex-col justify-center gap-2 w-1/2">
            <AnimatedHeading
              firstText="A quién"
              secondText="ayudamos"
              underlineOn="second"
              className="justify-start"
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
            <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
              <p>
                A estudiantes, opositores, jóvenes profesionales o personas que quieren dar un giro
                a su carrera y trabajar en la UE.
              </p>
              <p>Gente que busca estabilidad o proyección internacional, y valora su tiempo.</p>
              <p>Personas digitales, exigentes y con ganas de avanzar.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 py-20">
          <div className="flex flex-col justify-center gap-2 w-1/2">
            <AnimatedHeading
              firstText="Cómo lo"
              secondText="hacemos"
              underlineOn="second"
              className="justify-start"
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
            <div className="flex flex-col gap-2 text-sm text-[#7A7A7A]">
              <p>
                En EU Campus combinamos explicaciones claras, materiales estructurados y práctica
                real para que aprendas de forma eficaz.
              </p>
              <p>
                Nuestros cursos están diseñados para que entiendas lo importante, consolides lo
                aprendido y avances con seguridad, paso a paso.
              </p>
              <p>
                Todo dentro de una plataforma cómoda, intuitiva y pensada para aprovechar tu tiempo.
              </p>
            </div>
          </div>
          <Image
            src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/quienes-5.jpg"
            width={240}
            height={600}
            alt="Studying"
            className="w-[550px] h-auto rounded-[10px]"
          />
        </div>
      </div>
    </div>
  )
}

export default SobreNosotros

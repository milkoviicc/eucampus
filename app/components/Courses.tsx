'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

interface Course {
  courseTitle: string
  courseType: string
  courseDescription: string
  courseLink: string
  courseTypeLink: string
}

type Courses = Course[]

const Courses = ({ courses }: { courses: Courses }) => {
  const [activeFilter, setActiveFilter] = useState('Todo')
  const filters = ['Todo', 'Entrenamiento', 'Prueba CAST', 'Generalistas AD5']

  return (
    <div className="max-w-[1300px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-4 py-20 px-4 xl:px-0">
      <div className="w-full">
        {/* dropdown for small screens */}
        <div className="block lg:hidden mt-4">
          <label htmlFor="courses-filter" className="sr-only">
            Filtrar cursos
          </label>

          <div className="relative">
            <select
              id="courses-filter"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="appearance-none w-full bg-primary text-[#fafafa] text-xs font-semibold py-3 px-4 rounded-[10px] focus:outline-none"
            >
              {filters.map((filter, idx) => (
                <option key={idx} value={filter}>
                  {filter}
                </option>
              ))}
            </select>

            {/* simple chevron — optional, matches native select */}
            <svg
              className="pointer-events-none absolute right-3 top-1/2 translate-y-[-50%] w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* button grid for md+ */}
        <div className="hidden lg:grid-cols-4 lg:grid mt-4 gap-4 uppercase text-primary">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-left uppercase text-xs font-semibold rounded-t-[10px] py-[15px] px-[14px] flex-1 hover:bg-primary hover:text-white duration-300 cursor-pointer ${
                activeFilter === f ? 'bg-primary text-white' : 'bg-[#DDD]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-8">
        {activeFilter === 'Todo'
          ? courses.map((course, idx) => (
              <div
                key={`${activeFilter}-${idx}`} // Key includes filter for proper re-rendering
                className="pl-4 py-[5px] bg-[#222] h-[280px] text-[#fff] shadow-[-6px_7px_1px_5px_#00A694] rounded-[10px] hover:shadow-[6px_7px_1px_5px_#00A694] transition-all duration-500 animate-fadeInUp"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`, // Staggered animation
                }}
              >
                <a href={`${course.courseLink}`} className="block font-bold mt-[20px] text-lg pr-8">
                  {course.courseTitle}
                </a>
                <a
                  href={`${course.courseTypeLink}`}
                  className="block w-fit bg-primary text-xs rounded-[18px] px-[10px] py-[5px] text-[#fff] my-2"
                >
                  <FontAwesomeIcon icon={faTag} fontSize={12} /> {course.courseType}
                </a>
                <p className="pb-3 pr-8 text-sm">{course.courseDescription}</p>
              </div>
            ))
          : courses
              .filter((course) => course.courseType === activeFilter)
              .map((c, i) => (
                <div
                  key={`${activeFilter}-${i}`} // Key includes filter for proper re-rendering
                  className="pl-4 py-[5px] bg-[#222] h-[280px] text-[#fff] shadow-[-6px_7px_1px_5px_#00A694] rounded-[10px] hover:shadow-[6px_7px_1px_5px_#00A694] transition-all duration-500 animate-fadeInUp"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`, // Staggered animation
                  }}
                >
                  <a href={`${c.courseLink}`} className="block font-bold mt-[20px] text-lg pr-8">
                    {c.courseTitle}
                  </a>
                  <a
                    href={`${c.courseTypeLink}`}
                    className="block w-fit bg-primary text-xs rounded-[18px] px-[10px] py-[5px] text-[#fff] my-2"
                  >
                    <FontAwesomeIcon icon={faTag} fontSize={12} /> {c.courseType}
                  </a>
                  <p className="pb-3 pr-8 text-sm">{c.courseDescription}</p>
                </div>
              ))}
      </div>

      <div className="pt-20">
        <div className="text-center font-semibold">
          <h3 className="text-lg md:text-2xl">¿No es la opción adecuada para ti?</h3>
          <h1 className="text-2xl mt-2 md:text-3xl md:mt-0">
            Explora nuestro Pack Generalistas AD5
          </h1>
        </div>

        {/* Responsive bottom section: image on top for small screens, image on right for md+ */}
        <div className="flex flex-col md:flex-row md:items-center pt-8 gap-8">
          <div className="flex flex-col gap-1 w-full md:w-1/2 order-2 md:order-1">
            <p className="text-[#7A7A7A] text-sm">
              Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas
              borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de
              sucedernos bien las cosas.
            </p>
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

          <div className="flex justify-center w-full md:w-1/2 order-1 md:order-2">
            <Image
              src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/pack-1.jpg"
              width={600}
              height={500}
              alt="Pack image"
              className="rounded-[5px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses

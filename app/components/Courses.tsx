'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Generalistas from './Generalistas'

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

      <Generalistas />
    </div>
  )
}

export default Courses

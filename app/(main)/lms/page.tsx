'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faMagnifyingGlass,
  faPowerOff,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'
import { Moon, Settings, Users } from 'lucide-react'
import { useAppSelector } from '@/app/redux/hooks'
import { logoutThunk, User } from '@/app/redux/features/authSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/redux/store'
import { useRouter, useSearchParams } from 'next/navigation'
import { userAgent } from 'next/server'

type Course = {
  id: string
  title: string
  image?: string
  progress: number // 0-100
  status: string
  type: string
}

const SAMPLE_IMAGE = '/lms-course-sample.jpg'

const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Competencias digitales (Ultimate Pack 300)',
    image: SAMPLE_IMAGE,
    progress: 100,
    status: 'continuar',
    type: 'competencias-digitales',
  },
  {
    id: '2',
    title: 'Generalistas AD5: Written Test Module',
    image: SAMPLE_IMAGE,
    progress: 0,
    status: 'iniciar',
    type: 'generalistas',
  },
  {
    id: '3',
    title: 'Generalistas AD5: Digital Skills Module',
    image: SAMPLE_IMAGE,
    progress: 20,
    status: 'evaluacion',
    type: 'generalistas',
  },
  {
    id: '4',
    title: 'Another Course Example',
    image: SAMPLE_IMAGE,
    progress: 45,
    status: 'completado',
    type: 'razonamiento',
  },
]

export default function LMSPage() {
  const [courses] = useState<Course[]>(sampleCourses)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedCourse, setSelectedCourse] = useState<string>('all')
  const [activeTab, setActiveTab] = useState<string>('active')
  const searchParams = useSearchParams()

  // inside LMSPage component, with other useState calls
  const [profileTab, setProfileTab] = useState<'see' | 'edit' | 'photo'>('see')

  // left sidebar active: 'courses' | 'profile' | 'settings'
  const tabParam = searchParams.get('tab') as 'cursos' | 'perfil' | 'ajustes' | null
  const [activeLeft, setActiveLeft] = useState<'courses' | 'profile' | 'settings'>('courses')

  useEffect(() => {
    if (tabParam === 'cursos' || null) {
      setActiveLeft('courses')
    } else if (tabParam === 'perfil') {
      setActiveLeft('profile')
    } else {
      setActiveLeft('settings')
    }
  }, [tabParam])

  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  // Read hash like #component=course on mount and set active tab if needed
  useEffect(() => {
    try {
      const hash = typeof window !== 'undefined' ? window.location.hash : ''
      if (hash) {
        const params = new URLSearchParams(hash.replace(/^#/, ''))
        const comp = params.get('component')
        if (comp === 'course') {
          setActiveLeft('courses')
          setActiveTab('active')
        }
      }
    } catch (e) {
      console.log(e)
    }
  }, [])

  const filtered = useMemo(() => {
    if (activeTab === 'finished') {
      // ✅ show only completed courses, no filters
      return courses.filter((c) => c.status.toLowerCase() === 'completado')
    }

    // ✅ normal filtering for "My courses"
    return courses.filter((c) => {
      const status = c.status?.toLowerCase()
      const filter = statusFilter.toLowerCase()

      // match status filter
      if (filter !== 'all' && status !== filter) return false

      // match search
      if (search && !c.title.toLowerCase().includes(search.toLowerCase())) return false

      // match course type
      if (selectedCourse !== 'all' && c.type !== selectedCourse) return false

      return true
    })
  }, [courses, search, statusFilter, selectedCourse, activeTab])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* <-- cambio principal: apilado en móviles, fila en lg+ --> */}
      <div className="flex flex-col lg:flex-row pt-[60px]">
        {/* Left - dark sidebar */}
        <aside className="w-full lg:w-52 bg-[#394C62] text-gray-100 lg:min-h-screen lg:sticky lg:top-0 mb-4 lg:mb-0">
          <div className="pb-[20px] flex lg:flex-col justify-between items-center h-full">
            <nav className="px-4 mt-8 space-y-3 text-sm w-full h-full">
              <button
                onClick={() => setActiveLeft('courses')}
                className={`flex w-full items-center gap-3 px-3 py-2 rounded-l-full rounded-r-full transition ${
                  activeLeft === 'courses' ? 'bg-slate-700 text-white' : 'hover:bg-gray-700'
                }`}
              >
                <FontAwesomeIcon icon={faBookOpen} />
                Cursos
              </button>

              <button
                onClick={() => setActiveLeft('profile')}
                className={`flex w-full items-center gap-3 px-3 py-2 rounded-l-full rounded-r-full transition ${
                  activeLeft === 'profile' ? 'bg-slate-700 text-white' : 'hover:bg-gray-700'
                }`}
              >
                <Users />
                Perfil
              </button>

              <button
                onClick={() => setActiveLeft('settings')}
                className={`flex w-full items-center gap-3 px-3 py-2 rounded-l-full rounded-r-full transition ${
                  activeLeft === 'settings' ? 'bg-slate-700 text-white' : 'hover:bg-gray-700'
                }`}
              >
                <Settings />
                Ajustes
              </button>
            </nav>

            <div className="flex flex-col justify-between w-full h-full lg:h-fit gap-5 lg:gap-10 -mt-6 lg:mt-0">
              <button
                onClick={() => setActiveLeft('courses')}
                className={`flex w-full items-center px-2 lg:px-8 gap-1 rounded-l-full rounded-r-full transition`}
              >
                <Moon />
                Modo oscuro
              </button>
              <button
                onClick={() => {
                  dispatch(logoutThunk())
                  router.push('/')
                }}
                className={`flex w-full items-center px-2 lg:px-8 gap-1 rounded-l-full rounded-r-full transition`}
              >
                <FontAwesomeIcon icon={faPowerOff} />
                Cerrar sesión
              </button>
            </div>
          </div>
        </aside>

        {/* Middle - light navigation sidebar (render only when not in settings) */}
        {activeLeft !== 'settings' && (
          <aside className="w-full lg:w-52 bg-[#f4f4ff] lg:min-h-screen lg:sticky lg:top-0 mb-4 lg:mb-0">
            <div className="px-2 py-8">
              {activeLeft === 'courses' && (
                <nav>
                  <h2 className="text-2xl font-bold text-slate-700 mb-6 ml-1">Curso</h2>

                  <div className="flex flex-col gap-3 text-slate-600">
                    <button
                      onClick={() => setActiveTab('active')}
                      className={`text-left px-4 py-1 rounded-l-full rounded-r-full transition ${
                        activeTab === 'active'
                          ? 'bg-slate-700 text-white'
                          : 'hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      Mis cursos
                    </button>

                    <button
                      onClick={() => setActiveTab('finished')}
                      className={`text-left px-4 py-1 rounded-l-full rounded-r-full transition ${
                        activeTab === 'finished'
                          ? 'bg-slate-700 text-white'
                          : 'hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      Terminados
                    </button>
                    <button
                      onClick={() => setActiveTab('tests')}
                      className={`text-left px-4 py-1 rounded-l-full rounded-r-full transition ${
                        activeTab === 'tests'
                          ? 'bg-slate-700 text-white'
                          : 'hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      Mis test
                    </button>
                    <button
                      onClick={() => setActiveTab('exercises')}
                      className={`text-left px-4 py-1 rounded-l-full rounded-r-full transition ${
                        activeTab === 'exercises'
                          ? 'bg-slate-700 text-white'
                          : 'hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      Mis ejercicios
                    </button>
                  </div>
                </nav>
              )}

              {activeLeft === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-700 mb-6 ml-1">Perfil</h2>
                  <div className="text-slate-600 space-y-3">
                    <button
                      onClick={() => setProfileTab('see')}
                      className={`block px-4 py-1 rounded-full w-full text-left ${profileTab === 'see' ? 'bg-slate-700 text-white' : 'hover:bg-gray-700 hover:text-white'}`}
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => setProfileTab('edit')}
                      className={`block px-4 py-1 rounded-full w-full text-left ${profileTab === 'edit' ? 'bg-slate-700 text-white' : 'hover:bg-gray-700 hover:text-white'}`}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => setProfileTab('photo')}
                      className={`block px-4 py-1 rounded-full w-full text-left ${profileTab === 'photo' ? 'bg-slate-700 text-white' : 'hover:bg-gray-700 hover:text-white'}`}
                    >
                      Cambiar la foto de perfil
                    </button>
                  </div>
                </div>
              )}
            </div>
          </aside>
        )}

        {/* Main content - switches depending on left selection */}
        <main className="flex-1 w-full p-8 bg-[#fafafa]">
          {activeLeft === 'courses' && (
            <CoursesMain
              filtered={filtered}
              search={search}
              setSearch={setSearch}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              activeTab={activeTab}
            />
          )}

          {activeLeft === 'profile' && user ? (
            <ProfileMain courses={courses} profileTab={profileTab} user={user} />
          ) : null}

          {activeLeft === 'settings' && user && <SettingsMain user={user} />}
        </main>
      </div>
    </div>
  )
}

/* ---------- el resto del archivo se mantiene igual ---------- */

function CoursesMain({
  filtered,
  search,
  setSearch,
  selectedCourse,
  setSelectedCourse,
  statusFilter,
  setStatusFilter,
  activeTab,
}: {
  filtered: Course[]
  search: string
  setSearch: (v: string) => void
  selectedCourse: string
  setSelectedCourse: (v: string) => void
  statusFilter: string
  setStatusFilter: (v: string) => void
  activeTab: string
}) {
  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        {activeTab === 'active' && (
          <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-md w-full">
            <div className="flex flex-col lg:flex-row items-center justify-around gap-3 bg-white p-2 w-full">
              <div className="relative w-full">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={activeTab === 'active' ? 'Search courses' : 'Search tests'}
                  className="px-3 py-2 w-full lg:w-100 outline-none border-1 rounded border-[rgba(0,0,0,0.2)] text-[rgba(0,0,0,0.6)]"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                />
              </div>
              <div className="flex gap-3 w-full">
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="px-3 py-2 w-full lg:w-fit border-1 rounded border-[rgba(0,0,0,0.2)] text-[rgba(0,0,0,0.6)]"
                >
                  <option value="all">Seleccionar una fecha</option>
                  <option value="competencias-digitales">Competencias digitales</option>
                  <option value="conocimientos">Conocimientos UE</option>
                  <option value="entrenamiento">Entrenamiento</option>
                  <option value="generalistas">Generalistas AD5</option>
                  <option value="prubea-cast">Prueba CAST</option>
                  <option value="razonamiento">Razonamiento</option>
                </select>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 w-full lg:w-fit border-1 rounded border-[rgba(0,0,0,0.2)] text-[rgba(0,0,0,0.6)]"
                >
                  <option value="all">Seleccione Estado del curso</option>
                  <option value="iniciar">Iniciar</option>
                  <option value="continuar">Continuar</option>
                  <option value="evaluacion">En Evaluación</option>
                  <option value="completado">Completado</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {(activeTab === 'tests' || activeTab === 'exercises') && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-white p-4 rounded-md w-full">
            <div className="relative w-full">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tests"
                className="px-3 py-2 w-full outline-none border-1 rounded border-[rgba(0,0,0,0.2)] text-[rgba(0,0,0,0.6)]"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 w-full md:w-fit border-1 rounded border-[rgba(0,0,0,0.2)] text-[rgba(0,0,0,0.6)]"
            >
              <option value="all">Seleccione tipo de test</option>
              <option value="prueba1">Prueba 1</option>
              <option value="prueba2">Prueba 2</option>
            </select>
          </div>
        )}
      </header>

      {activeTab === 'active' || activeTab === 'finished' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : null}

      {activeTab === 'tests' && (
        <div className="w-full bg-[#f4f4ff] py-2 px-2 rounded-md flex gap-2 items-center">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          No se han encontrado cuestionarios!
        </div>
      )}
      {activeTab === 'exercises' && (
        <div className="w-full bg-[#f4f4ff] py-2 px-2 rounded-md flex gap-2 items-center">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          No se encontraron tareas!
        </div>
      )}
    </>
  )
}

function ProfileMain({
  courses,
  profileTab,
  user,
}: {
  courses: Course[]
  profileTab: 'see' | 'edit' | 'photo'
  user: User
}) {
  const registered = courses.length
  const [newFullName, setNewFullName] = useState(user.fullName)

  if (profileTab === 'see') {
    return (
      <div>
        <div className="bg-primary text-white rounded-md p-6 mb-8 flex items-center gap-6">
          {/* <img src="/avatar-placeholder.png" alt="avatar" className="w-16 h-16 rounded-full" /> */}
          <div>
            <h2 className="text-3xl font-semibold">{user.fullName}</h2>
            <div className="mt-4">
              Inscrito en:
              <span className="text-teal-600 font-semibold"> {registered}</span> Curso/s.
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-700 mb-6">Mis cursos</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((c) => (
            <div key={c.id} className="bg-white rounded-lg shadow p-0 overflow-hidden">
              {/* <img src={c.image} alt={c.title} className="w-full h-36 object-cover" /> */}
              <div className="p-4">
                <h4 className="font-semibold text-slate-800">{c.title}</h4>
                <p className="text-sm text-slate-500 mt-3">
                  {c.progress}% practical training with multiple choice questions that replicate the
                  EPSO Digital Com...
                </p>
                <div className="mt-4">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${c.progress}%`,
                        backgroundColor: c.progress === 100 ? '#10b981' : '#22c55e',
                      }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-slate-500 text-right">{c.progress}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } else if (profileTab === 'edit') {
    return (
      <div className="flex flex-col gap-4 mt-10">
        <label htmlFor="name">Nombre completo</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newFullName}
          onChange={(e) => setNewFullName(e.target.value)}
          className="border w-1/3 px-2 py-1 border-[rgba(0,0,0,0.3)]"
        />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col gap-4 mt-10">
        {/* <img src="" alt="" /> */}
        <button className="bg-primary px-4 py-1 text-white text-lg w-fit rounded-sm shadow-xl">
          Cambiar imagen
        </button>
      </div>
    )
  }
}

function SettingsMain({ user }: { user: User }) {
  const latest = Array.from({ length: 4 }).map((_, i) => ({
    id: i + 1,
    title: 'Chrome Join Windows 10',
    date: new Date().toString(),
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow px-4">
        <h4 className="font-semibold text-slate-800 text-sm py-4">
          Correo electrónico de la cuenta
        </h4>

        <div className="bg-white pb-8">
          <div className="mb-4 flex">
            <button className="px-2 py-1 border rounded-l-md text-sm border-[rgba(0,0,0,0.2)]">
              Cambie correo electrónico{' '}
            </button>
            <button className="px-2 py-1 border rounded-r-md text-sm border-[rgba(0,0,0,0.2)]">
              Cambiar contraseña
            </button>
          </div>

          <label className="text-sm text-slate-500">Correo electrónico de la cuenta</label>
          <input className="w-full border-b py-2 outline-none mb-6" defaultValue={user.email} />

          <button className="w-full px-6 py-2 bg-primary text-white rounded shadow">
            Guardar cambios
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h4 className="font-semibold text-slate-800 mb-4">Últimas conexiones</h4>
        <div className="space-y-4">
          {latest.map((l) => (
            <div key={l.id} className="bg-indigo-50 rounded p-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-700">{l.date}</div>
                <div className="text-sm text-slate-500 mt-2">{l.title}</div>
              </div>
              <div className="text-slate-400">🗑️</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h4 className="font-semibold text-slate-800 mb-6">Delete Account</h4>
        <button className="w-full px-6 py-2 bg-primary text-white rounded shadow">
          Delete Account
        </button>
      </div>
    </div>
  )
}

function CourseCard({ course }: { course: Course }) {
  const progressPct = Math.max(0, Math.min(100, course.progress))
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm">
      <div className="relative">
        {/* <img src={course.image} alt={course.title} className="w-full h-44 object-cover block" /> */}
        <div className="absolute left-4 top-4 bg-slate-700 text-white px-3 py-1 rounded-full text-xs">
          {course.status.toUpperCase()}
        </div>
      </div>

      <div className="p-5 mt-10">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">{course.title}</h3>

        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progressPct}%`,
                  backgroundColor: progressPct === 100 ? '#10b981' : '#22c55e',
                }}
              />
            </div>
          </div>
          <div className="text-sm text-slate-500 w-12 text-right">{progressPct}%</div>
        </div>

        <div className="mt-5">
          <Link
            href="#"
            className="uppercase inline-block px-4 py-2 rounded-md bg-primary text-white text-sm font-medium shadow"
          >
            Continuar curso
          </Link>
        </div>
      </div>
    </div>
  )
}

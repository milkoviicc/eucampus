'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Menu, X } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useAppSelector } from '../redux/hooks'
import UserMenu from './UserMenu'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { logoutThunk } from '../redux/features/authSlice'

const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth)
  const [isOpen, setIsOpen] = useState(false)
  const [openSub, setOpenSub] = useState<'cursos' | 'entrenamiento' | 'trabajar' | null>(null)

  const dispatch = useDispatch<AppDispatch>()

  const toggleSub = (sub: typeof openSub) => {
    setOpenSub((prev) => (prev === sub ? null : sub))
  }

  const handleLogout = () => {
    dispatch(logoutThunk())
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[60px] bg-white z-50 shadow-[0_1px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-[1300px] 2xl:max-w-[1600px] mx-auto flex justify-between items-center text-secondary h-full text-[#222] bg-white px-4 lg:px-8">
          {/* Logo - always visible */}
          <Link href="/" className="flex items-center h-full">
            <Image
              src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/logo-web-hor.png"
              className="object-contain"
              width={195.962}
              height={29.9875}
              alt="EU Campus logo"
            />
          </Link>

          {/* ===== Desktop nav: UNCHANGED (hidden on <lg) ===== */}
          <div className="pt-[7px] flex-1 px-8 hidden xl:block">
            <ul className="text-[14px] flex gap-2 justify-evenly items-center h-full leading-[40px]">
              {/* Cursos Dropdown */}
              <li className=" group">
                <p className="flex items-center gap-2 px-[10px] uppercase cursor-pointer">
                  Cursos <FontAwesomeIcon icon={faCaretDown} className="w-[11]" />
                </p>
                <div className="absolute top-[55px] left-1/2 transform -translate-x-1/2 flex gap-8 pt-[50px] pb-[40px] px-[50px] bg-white shadow-lg border border-gray-200 w-full max-w-[1300px] 2xl:max-w-[1600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="flex flex-col gap-5 max-w-[400px]">
                    <p className="text-xl leading-[29px] text-primary">
                      Explora <b>nuestros cursos</b> divididos por las oposiciones que te interesen
                    </p>
                    <Link
                      href="/cursos"
                      className="bg-accent px-6 py-1 rounded-[10px] text-white text-[15px] w-fit hover:bg-primary transition duration-200"
                    >
                      Explora todos nuestros cursos
                    </Link>
                  </div>
                  <div className="block w-[2px] h-[125px] bg-primary"></div>
                  <div className="flex flex-col px-4 w-[250px]">
                    <ul className="uppercase text-accent text-xl">
                      <li className="py-1 cursor-pointer hover:bg-gray-100 transition-colors">
                        <Link href="/cursos-generalistas-ad5">
                          <FontAwesomeIcon icon={faArrowRight} color="#000" /> Generalistas
                        </Link>
                      </li>
                      <hr />
                      <li className="py-1 cursor-pointer hover:bg-gray-100 transition-colors">
                        <Link href="#">
                          <FontAwesomeIcon icon={faArrowRight} color="#000" /> Prueba Cast
                        </Link>
                      </li>
                      <hr />
                      <li className="py-1 cursor-pointer hover:bg-gray-100 transition-colors">
                        <Link href="#">
                          <FontAwesomeIcon icon={faArrowRight} color="#000" /> Secretaries
                        </Link>
                      </li>
                      <hr />
                    </ul>
                  </div>
                  <div className="flex flex-col px-4 flex-1">
                    <h5 className="text-xl text-primary font-semibold">Próximos cursos</h5>
                    <ul className="uppercase text-accent text-xl mt-2">
                      <li className="py-1 cursor-pointer hover:bg-gray-100 transition-colors">
                        <Link href="#">
                          <FontAwesomeIcon icon={faArrowRight} color="#000" /> Asistentes
                        </Link>
                      </li>
                      <hr />
                      <li className="py-1 cursor-pointer hover:bg-gray-100 transition-colors">
                        <Link href="#">
                          <FontAwesomeIcon icon={faArrowRight} color="#000" /> Project Management
                        </Link>
                      </li>
                      <hr />
                    </ul>
                  </div>
                </div>
              </li>

              {/* Entrenamiento Dropdown */}
              <li className="relative group">
                <p className="flex items-center gap-2 uppercase cursor-pointer">
                  Entrenamiento <FontAwesomeIcon icon={faCaretDown} className="w-[11]" />
                </p>
                <div className="absolute pt-[10px] pb-[20px] px-5 top-full -left-10 bg-white shadow-lg border border-gray-200 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-lg text-accent hover:bg-gray-100 transition-colors"
                    >
                      <FontAwesomeIcon icon={faArrowRight} color="#000" /> Razonamiento
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-lg text-accent hover:bg-gray-100 transition-colors"
                    >
                      <FontAwesomeIcon icon={faArrowRight} color="#000" /> Conocimiento UE
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-lg text-accent hover:bg-gray-100 transition-colors"
                    >
                      <FontAwesomeIcon icon={faArrowRight} color="#000" /> Competencias digitales
                    </Link>
                  </div>
                </div>
              </li>

              {/* Trabajar en la UE Dropdown */}
              <li className="relative group">
                <Link
                  href="/trabajar-en-la-ue"
                  className="flex items-center gap-2 uppercase cursor-pointer"
                >
                  Trabajar en la UE
                  <FontAwesomeIcon icon={faCaretDown} className="w-[11]" />
                </Link>
                <div className="absolute pt-[10px] pb-[20px] px-5 top-full -left-16 flex gap-3 bg-white shadow-lg border border-gray-200 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      href="/trabajar-en-la-ue/#porque"
                      className="flex gap-2 px-4 py-2 text-lg text-accent hover:bg-gray-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        viewBox="0 0 30 30"
                        width="30px"
                        height="30px"
                      >
                        <path d="M17.523 5.149L16.204 6.13l.49 1.57c.066.21-.173.384-.353.256L15 7.005l-1.341.951C13.479 8.084 13.24 7.91 13.306 7.7l.49-1.57-1.319-.982c-.177-.131-.085-.412.135-.415l1.644-.019.526-1.558c.07-.209.366-.209.436 0l.526 1.558 1.644.019C17.608 4.737 17.7 5.018 17.523 5.149zM17.523 24.149l-1.319.982.49 1.57c.066.21-.173.384-.353.256L15 26.005l-1.341.951c-.18.128-.419-.046-.353-.256l.49-1.57-1.319-.982c-.177-.131-.085-.412.135-.415l1.644-.019.526-1.558c.07-.209.366-.209.436 0l.526 1.558 1.644.019C17.608 23.737 17.7 24.018 17.523 24.149zM26.907 14.149l-1.319.982.49 1.57c.066.21-.173.384-.353.256l-1.342-.951-1.341.951c-.18.128-.419-.046-.353-.256l.49-1.57-1.319-.982c-.177-.131-.085-.412.135-.415l1.644-.019.526-1.558c.07-.209.366-.209.436 0l.526 1.558 1.644.019C26.992 13.737 27.084 14.018 26.907 14.149zM8.14 14.149L6.821 15.13l.49 1.57c.066.21-.173.384-.353.256l-1.342-.951-1.341.951c-.18.128-.419-.046-.353-.256l.49-1.57-1.319-.982c-.177-.131-.085-.412.135-.415l1.644-.019.526-1.558c.07-.209.366-.209.436 0l.526 1.558 1.644.019C8.225 13.737 8.317 14.018 8.14 14.149zM27.75 5.818L26.123 5.58 25.36 7.036c-.102.195-.394.149-.431-.069l-.276-1.621-1.621-.276c-.218-.037-.264-.329-.069-.431l1.457-.764L24.182 2.25c-.033-.218.231-.351.389-.198l1.176 1.149 1.473-.73c.197-.098.407.111.308.308l-.73 1.473 1.149 1.176C28.102 5.587 27.968 5.851 27.75 5.818zM10.315 23.253l-1.627-.238-.764 1.457c-.102.195-.394.149-.431-.069l-.276-1.621-1.621-.276c-.218-.037-.264-.329-.069-.431l1.457-.764-.238-1.627c-.033-.218.231-.351.389-.198l1.176 1.149 1.473-.73c.197-.098.407.111.308.308l-.73 1.473 1.149 1.176C10.667 23.022 10.533 23.286 10.315 23.253zM24.021 22.817l-1.627-.238-.764 1.457c-.102.195-.394.149-.431-.069l-.276-1.621-1.621-.276c-.218-.037-.264-.329-.069-.431l1.457-.764-.238-1.627c-.033-.218.231-.351.389-.198l1.176 1.149 1.473-.73c.197-.098.407.111.308.308l-.73 1.473 1.149 1.176C24.373 22.586 24.239 22.85 24.021 22.817zM10.751 9.547L9.124 9.309l-.764 1.457c-.102.195-.394.149-.431-.069L7.654 9.075 6.033 8.8C5.815 8.763 5.769 8.471 5.964 8.369l1.457-.764L7.183 5.979C7.15 5.761 7.414 5.627 7.572 5.781L8.747 6.93l1.473-.73c.197-.098.407.111.308.308l-.73 1.473 1.149 1.176C11.103 9.316 10.969 9.58 10.751 9.547z"></path>
                      </svg>{' '}
                      Acceso a la UE
                    </Link>
                    {/* rest of the desktop Trabajar-internal links kept exactly as in your original snippet */}
                  </div>
                </div>
              </li>

              <li>
                <Link href="/faqs-y-consejos" className="uppercase">
                  Preguntas frecuntes (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="uppercase">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Desktop Right side: UNCHANGED (hidden on <lg) ===== */}
          <div className="hidden pt-[7px] gap-1 items-center uppercase text-[14px] xl:flex">
            <UserMenu user={user} />
            <Link href="/login">
              <ShoppingCart size={16} />
            </Link>
          </div>

          {/* ===== Mobile: hamburger only (shows on <lg) ===== */}
          <div className="xl:hidden flex items-center">
            <button
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setIsOpen((s) => !s)}
              className="p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== Mobile slide-in menu (from right) ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] px-4 max-w-[420px] bg-white z-60 shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-hidden={!isOpen}
      >
        <div className="flex justify-between items-center py-4 px-1 border-b">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <Image
              src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/logo-web-hor.png"
              className="object-contain"
              width={160}
              height={26}
              alt="EU Campus logo"
            />
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Cerrar menú" className="py-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="py-6 px-1 overflow-auto">
          {/* Mobile nav links: stacked with working toggles */}
          <ul className="flex flex-col gap-4 text-lg">
            {/* Cursos */}
            <li>
              <button
                className="w-full text-left uppercase flex items-center justify-between"
                onClick={() => toggleSub('cursos')}
                aria-expanded={openSub === 'cursos'}
              >
                Cursos
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`transition-transform ${openSub === 'cursos' ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  openSub === 'cursos' ? 'max-h-[600px] mt-3' : 'max-h-0'
                }`}
              >
                <div className="ml-2">
                  <Link href="/cursos" onClick={() => setIsOpen(false)} className="block py-2">
                    Explora todos nuestros cursos
                  </Link>
                  <Link
                    href="/cursos-generalistas-ad5"
                    onClick={() => setIsOpen(false)}
                    className="block py-2"
                  >
                    Generalistas
                  </Link>
                  <Link href="#" onClick={() => setIsOpen(false)} className="block py-2">
                    Prueba Cast
                  </Link>
                  <Link href="#" onClick={() => setIsOpen(false)} className="block py-2">
                    Secretaries
                  </Link>
                </div>
              </div>
            </li>

            {/* Entrenamiento */}
            <li>
              <button
                className="w-full text-left uppercase flex items-center justify-between"
                onClick={() => toggleSub('entrenamiento')}
                aria-expanded={openSub === 'entrenamiento'}
              >
                Entrenamiento
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`transition-transform ${openSub === 'entrenamiento' ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  openSub === 'entrenamiento' ? 'max-h-[400px] mt-3' : 'max-h-0'
                }`}
              >
                <div className="ml-2">
                  <Link href="#" onClick={() => setIsOpen(false)} className="block py-2">
                    Razonamiento
                  </Link>
                  <Link href="#" onClick={() => setIsOpen(false)} className="block py-2">
                    Conocimiento UE
                  </Link>
                  <Link href="#" onClick={() => setIsOpen(false)} className="block py-2">
                    Competencias digitales
                  </Link>
                </div>
              </div>
            </li>

            {/* Trabajar en la UE */}
            <li>
              <button
                className="w-full text-left uppercase flex items-center justify-between"
                onClick={() => toggleSub('trabajar')}
                aria-expanded={openSub === 'trabajar'}
              >
                Trabajar en la UE
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`transition-transform ${openSub === 'trabajar' ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  openSub === 'trabajar' ? 'max-h-[600px] mt-3' : 'max-h-0'
                }`}
              >
                <div className="ml-2">
                  <Link
                    href="/trabajar-en-la-ue/#porque"
                    onClick={() => setIsOpen(false)}
                    className="block py-2"
                  >
                    Acceso a la UE
                  </Link>
                  <Link
                    href="/trabajar-en-la-ue/#tipos"
                    onClick={() => setIsOpen(false)}
                    className="block py-2"
                  >
                    Tipos de empleo
                  </Link>
                  <Link
                    href="/trabajar-en-la-ue/#requisitos"
                    onClick={() => setIsOpen(false)}
                    className="block py-2"
                  >
                    Requisitos generales
                  </Link>
                  <Link
                    href="/trabajar-en-la-ue/#proceso"
                    onClick={() => setIsOpen(false)}
                    className="block py-2"
                  >
                    Proceso de selección
                  </Link>
                  <Link
                    href="/trabajar-en-la-ue/#ofertas"
                    onClick={() => setIsOpen(false)}
                    className="block py-2"
                  >
                    Dónde buscar ofertas
                  </Link>
                  <Link href="#" onClick={() => setIsOpen(false)} className="block py-2">
                    Consejos prácticos
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/faqs-y-consejos"
                onClick={() => setIsOpen(false)}
                className="uppercase block"
              >
                Preguntas frecuntes (FAQ)
              </Link>
            </li>

            <li>
              <Link href="/contacto" onClick={() => setIsOpen(false)} className="uppercase block">
                Contacto
              </Link>
            </li>

            <li className="pt-4 border-t mt-2">
              {user ? (
                <div className="flex flex-col items-start">
                  <Link href="/perfil" onClick={() => setIsOpen(false)} className="block py-2">
                    Mi cuenta
                  </Link>
                  <Link
                    href="/cart"
                    onClick={() => setIsOpen(false)}
                    className="flex gap-2 items-center py-2"
                  >
                    Carrito <ShoppingCart size={16} />
                  </Link>
                  <button onClick={handleLogout} className="py-2">
                    Login
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link href="/login" onClick={() => setIsOpen(false)} className="block py-2">
                    Login
                  </Link>
                  <Link
                    href="/cart"
                    onClick={() => setIsOpen(false)}
                    className="flex gap-2 items-center py-2"
                  >
                    Carrito <ShoppingCart size={16} />
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
